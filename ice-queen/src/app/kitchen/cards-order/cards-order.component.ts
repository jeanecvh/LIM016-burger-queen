import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-cards-order',
  templateUrl: './cards-order.component.html',
  styleUrls: ['./cards-order.component.scss']
})
export class CardsOrderComponent implements OnInit {

  @Input() detail!: any;


  time:any= "00:00:00";
  orders: any [] =[];
  runningTime:any = 0;
  timeInterval:any;
  id:string = '';
  startTime:any;
  orderStatusChange:string = "pendiente";
  _id:string = '';
  name:string = '';

  today: any = new Date()

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {

  }

  orderStatus($event:any){
    console.log('value',$event.target.value);
    console.log('target name', $event.target.name)

    if($event.target.value == 'accepted'){
      this.startTime = Date.now();
      this.start()
      console.log('START',this.time)
      //this.orderStatusChange = "accepted"
      this.sendToPreparation($event.target.name)
      this.firestoreService.updateStatus(this.detail.id, this.startTime)

    } else if ($event.target.value == 'ready'){
      console.log('se pausa el cronómetro');
      this.pause()
      //this.orderStatusChange = "ready"
      this.firestoreService.updateStatus(this.detail.id,this.startTime)
      this.firestoreService.sendReadyTime(this.detail.id, this.time);
      this.giveOrderToWaiter($event.target.name)
      console.log('PAUSA',this.time)
      //? Guardar date en documento de la colección
    }
  }

  start(){
    this.timeInterval = setInterval(() => {
      this.runningTime = Date.now() - this.startTime;
      this.time = this.calculateTime(this.runningTime);
    }, 1000)
    console.log('FUNCIÓN START',this.time)
  }

  calculateTime(x:any){

    const totalSeconds = Math.floor(x / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const displaySeconds = (totalSeconds % 60).toString().padStart(2, "0");
    const displayMinutes = (totalMinutes & 60).toString().padStart(2, "0");
    const displayHours = totalHours.toString().padStart(2, "0");
    console.log('CALCULANDO TIEMPO',this.time)

    return `${displayHours}:${displayMinutes}:${displaySeconds}`
  }

  pause(){
    clearInterval(this.timeInterval)
  }

 sendToPreparation(id:any) {
     return this.firestoreService.updateStatusCurrentOrder(id);
  }

  giveOrderToWaiter(id:any){
    return this.firestoreService.updateStatusGiveOrder(id);
  }

}
