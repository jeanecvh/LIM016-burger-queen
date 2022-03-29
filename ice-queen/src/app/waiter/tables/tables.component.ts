import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html'
})
export class TablesComponent implements OnInit {

  @Input() order!: any;

  allOrders: any [] =[];

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {

    this.getOrder();
  }

  getOrder(){
    this.firestoreService.getOrder().subscribe(data => {
      this.allOrders = [];
      data.forEach((item) => {
        this.allOrders.push({
          id: item.payload.doc.id,
          data: item.payload.doc.data()
        });
        //console.log('que es item',item)
        //console.log('all orders', this.allOrders)
      });
      this.sortOrders(this.allOrders)
    })
  }

  sortOrders(ordersArray:any){
    ordersArray.sort((a:any,b:any) =>{
      //console.log(a.data.date[0].monthDateYear);
      const newA = a.data.date[0].monthDateYear.split('/').reverse().join('-')
      const newB = b.data.date[0].monthDateYear.split('/').reverse().join('-');
      if(newA == newB){
        return - b.data.date[0].hourMinutes.localeCompare(a.data.date[0].hourMinutes);
      } else {
        const time = (a.data.date[0].hourMinutes)
        //console.log(time)
        return -new Date(newB) - -new Date(newA)
      }
    })
  }
}
