import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { Orders } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  sendOrdeFireStore(order: Orders): Promise<DocumentReference<any>> {
    return this.firestore.collection('orders').add(
      {clientName: order.clientName, table: order.table, products: JSON.parse(JSON.stringify(order.products)), 
      date: JSON.parse(JSON.stringify(order.date))});
  }

  getOrder() {
    return this.firestore.collection('orders').snapshotChanges();
  }

}
