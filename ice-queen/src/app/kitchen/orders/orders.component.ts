import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {


  @Input() order!: any;

  allOrders: any [] =[];
  time:any= "00:00:00";
  runningTime:any = 0;
  timeInterval:any;
  id:string = '';


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
      this.allOrders.sort((a:any,b:any) =>{
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
    })
  }

  /*orderStatus($event:any,id:any){
    console.log('Que es jesto',$event.target.value);
    console.log('target name', $event.target.name)
    console.log('id of card',id);
    if($event.target.value == 'accepted' && $event.target.name == id){
      this.start(id)
      this.firestoreService.updateStatusCurrentOrder(id)
    } else if ($event.target.value == 'ready'){
      console.log('se pausa el cronómetro');
      this.pause(id)
      this.giveOrderToWaiter(id)
      //? Guardar date en documento de la colección
    } else {
      console.log('reinicia el cronómetro');
      this.time = "00:00:00"
    }
  }

  start(id:any){
    //const btn = document.querySelectorAll('select');
    //console.log(btn)
    this.id = ""
    let startTime = Date.now();
    console.log('Start Time',startTime);
    this.timeInterval = setInterval(() => {
      this.runningTime = Date.now() - startTime;
      this.time = this.calculateTime(this.runningTime);
    }, 1000)
  }

  calculateTime(x:any){
    const totalSeconds = Math.floor(x / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const displaySeconds = (totalSeconds % 60).toString().padStart(2, "0");
    const displayMinutes = totalMinutes.toString().padStart(2, "0")
    const displayHours = totalHours.toString().padStart(2, "0");

    return `${displayHours}:${displayMinutes}:${displaySeconds}`
  }

  pause(id:any){
    clearInterval(this.timeInterval)
  }

 sendToPreparation(id:any) {
     return this.firestoreService.updateStatusCurrentOrder(id);
  }

  giveOrderToWaiter(id:any){
    return this.firestoreService.updateStatusGiveOrder(id);
  }*/
}
