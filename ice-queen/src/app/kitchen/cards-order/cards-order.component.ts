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
  runningTime:any = 0;
  timeInterval:any;
  id:string = '';


  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {

  }


  orderStatus($event:any,id:any){
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
  }

}
