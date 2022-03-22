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
      {clientName: order.clientName, table: order.table, total: order.total, status: order.status, products: JSON.parse(JSON.stringify(order.products)),
      date: JSON.parse(JSON.stringify(order.date))});
  }

  getOrder() {
    return this.firestore.collection('orders').snapshotChanges();
  }

  updateStatus(id:string){
    return this.firestore.collection('orders').doc(id).update({status:"listo"})
  }

}
