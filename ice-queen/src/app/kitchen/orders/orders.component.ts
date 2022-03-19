import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {

  orders: any [] =[];

  time:any= "00:00:00";
  runningTime:any = 0;
  timeInterval:any;

  id:string = '';
  

  constructor(
    private dataService: DataService, 
    private firestoreService: FirestoreService 
  ) { }

  ngOnInit(): void {

    this.getOrder();
  }

  getOrder(){
    this.firestoreService.getOrder().subscribe(data => {
      this.orders = [];
      data.forEach((item) => {
        this.orders.push({
          id: item.payload.doc.id,
          data: item.payload.doc.data()
        });
      });
      // console.log(this.orders)
    })
  }

  orderStatus($event:any){
    console.log($event.target.value);
    if($event.target.value == 'acepted'){
      this.start()
    } else if ($event.target.value == 'ready'){
      console.log('se pausa el cronómetro');
      this.pause()
      //? Guardar date en documento de la colección
    } else {
      console.log('reinicia el cronómetro');
      this.time = "00:00:00"
    }
  }

  start(){
    const btn = document.querySelectorAll('select');
    console.log(btn)
    this.id = ""
    let startTime = Date.now();
    console.log(startTime);
    this.timeInterval = setInterval(() => {
      this.runningTime = Date.now() - startTime;
      this.time = this.calculateTime(this.runningTime);
    }, 1000)
  }

  calculateTime(x:any){
    const totalSeconds = Math.floor(x / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);

    const displaySeconds = (totalSeconds % 60).toString().padStart(2, "0");
    const displayMinutes = totalMinutes.toString().padStart(2, "0")

    return `${displayMinutes}:${displaySeconds}`
  }

  pause(){
    clearInterval(this.timeInterval)
  }

}
