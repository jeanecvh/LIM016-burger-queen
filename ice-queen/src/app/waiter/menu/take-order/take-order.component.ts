import { Component, OnInit } from '@angular/core';
import { OrderDate, Product } from 'src/app/models/orders';
import { Orders } from 'src/app/models/orders';
import Swal from 'sweetalert2';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SaveOrdersService } from 'src/app/services/save-orders.service';
import { GetOrderStatusService } from 'src/app/services/get-order-status.service';


@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.scss']
})
export class TakeOrderComponent implements OnInit {

  //*Order
  productList:Array<any> = []
  clientName:string = "";
  tableNumber:string = "";
  price:number = 0;
  base: number = 1;
  nuevo:Array<Product> = [];
  orderDate:Array<OrderDate> = [];

   //*Payment
   subTotal:number = 0;
   igv:number = 0;
   total:number = 0;

  constructor(
    private SaveOrdersService: SaveOrdersService,
     private firestore: FirestoreService,
     private GetOrderStatusService: GetOrderStatusService

  ) { }

  ngOnInit(): void {
    this.SaveOrdersService.disparadorSaveOrder.subscribe(data => {
      this.productList.push({data, amount: 1});
      console.log('que es data',data)
      console.log('que da product list',this.productList)
      this.totalPrice();
  });
  }

  changeAmount(base:number, item:any){
    if (item.amount && item.amount+base === 0){
      this.deleteItem(item);
    }else{
      item.amount = item.amount + base
      this.totalPrice();
    }
  }

  deleteItem(item:any){
    const index = this.productList.indexOf(item);
    if(index > -1){
      this.productList.splice(index,1);
      this.totalPrice();
    }
    console.log(this.productList);
    //return this.productList;
  }

  totalPrice() {
    if(this.productList.length === 0){
      this.subTotal = 0;
    } else {
      this.subTotal = this.productList.map((item)=>item.data.data.price*item.amount)
      .reduce((acc,item) => acc += item);
      this.igv = this.subTotal*18/100;
      this.total = this.subTotal + this.igv;
    }
  }

  sendOrder(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Registered Order'
    })

    this.productList.forEach((product) => {
      this.nuevo.push(new Product(product.amount, product.data.data.flavors));
    })

    //fechaCreacion: new Date
    //fechaTerminada: new Date
    let dateDay = new Date().toLocaleDateString();
    let hourDay = `${new Date().getHours()}`+":"+`${new Date().getMinutes()}`;

    //*Capturamos la fecha y hora
    this.orderDate.push(new OrderDate(dateDay, hourDay));

    const orderObj =  new Orders(this.clientName, parseInt(this.tableNumber), this.nuevo, this.orderDate);

    console.log(orderObj);
    this.firestore.sendOrdeFireStore(orderObj).
    then(() => {console.log('Orden registrada con éxito!');
    //?Mandando con disparador get-otder-status
    this.GetOrderStatusService.disparadorGetOrderStatus.emit({orderSaved: orderObj});
    //Mandar al servicio con un "servicio"
  }).catch(err => {console.log(err)});

    this.clientName = "";
    this.tableNumber = "";
    this.productList = [];
    this.subTotal = 0;
    this.igv = 0;
    this.total = 0;
  }

  cancelOrder(){
    let clean  = () => {
      this.clientName = "";
      this.tableNumber = "";
      this.productList = [];
      this.base = 1;
      this.subTotal = 0;
      this.igv = 0;
      this. total = 0
    }

    Swal.fire({
      icon: 'warning',
      iconColor:'#94d154',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor:'#94d154',
      focusCancel:true,
      title: 'Do you want to cancel the order?',
      text: 'You will lose all registered products!',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          text:'Canceled Order!',
          icon: 'success',
          confirmButtonColor:'#94d154'
        }).then(clean)
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }

}
