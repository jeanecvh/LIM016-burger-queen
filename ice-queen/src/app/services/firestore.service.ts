import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { doc, getDocs } from 'firebase/firestore';
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
      {
        clientName: order.clientName,
        table: order.table,
        total: order.total,
        status: order.status,
        products: JSON.parse(JSON.stringify(order.products)),
        date: JSON.parse(JSON.stringify(order.date)),
        startTime: order.readyTime,
      });
  }

  getOrder() {
    return this.firestore.collection('orders').snapshotChanges();
  }

  updateStatus(id:string, startTime: number ){
    try{
        this.firestore.collection('orders').doc(id).update({
        startTime : startTime
      })
    }
    catch(err){
      console.log(err)
    }
  }

  sendReadyTime(id:string, readyTime:string) {
    return this.firestore.collection('orders').doc(id).update({
      readyTime: readyTime,
    })
  }

   //actualiza estado pedido actual
   public updateStatusCurrentOrder(id: any) {
    try{
      this.firestore.collection('orders').doc(id).update({status:"preparacion"});
    } catch(err){
      console.log(err)
    }
    console.log(id)
  }

  public updateStatusGiveOrder(id: any) {
    try{
      this.firestore.collection('orders').doc(id).update({status:"listo"});
    } catch(err){
      console.log(err)
    }
    console.log(id)
  }

/*   public getOrdersByStatus() {
     const q =  this.firestore.collection('orders', (ref) => ref.where('status', '==', 'En preparación' && 'Pendiente')).valueChanges();
      const querySnapshot =  getDocs(q);
      querySnapshot.forEach((doc:any) => {
      console.log(doc.id, '=>', doc.data)
    })
  }*/

}
