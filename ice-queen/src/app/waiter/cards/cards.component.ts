import {  Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() detail!: any;

  orders: any [] =[];
  id:string = '';

  constructor(
    private firestoreService: FirestoreService
  ) {}

  deliveryOrder(id:any) {
    return this.firestoreService.updateStatusDeliveryOrder(id);
 }

 deleteOrder(id:any){
   return this.firestoreService.delete(id)
 }

  ngOnInit(): void {}


}
