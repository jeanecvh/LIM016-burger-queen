import {  ChangeDetectorRef, Component, OnInit } from '@angular/core';
//import { Tables } from 'src/app/models/tables.model';
import { TablesCollectionService } from 'src/app/services/tables-collection.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FirestoreService } from '../../services/firestore.service';
import { orderBy } from 'firebase/firestore';

export interface Table { tables: number; addTable: boolean; }
export interface Tables extends Table { id: string }

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public tablesCollections: AngularFirestoreCollection<Table>;

  arrayTables?: Observable<Table[]> ;
  currentTables?: Table;
  currentIndex: Number = -1;
  ntables: Number = 0;
  orders: any [] =[];


  constructor(
    public readonly afs: AngularFirestore,
    private firestoreService: FirestoreService
    //private tablesCollectionService : TablesCollectionService

    ) {
      this.tablesCollections = afs.collection<Table>('orders');
      this.arrayTables = this.tablesCollections.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Table;
          const id = a.payload.doc.id;
          return { id, ...data}
        }))
      )
    }

  ngOnInit(): void {
    //this.retrieveTables();
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

      this.orders.sort((a:any,b:any) =>{
      console.log(a.data.date[0].monthDateYear);
      const newA = a.data.date[0].monthDateYear.split('/').reverse().join('-')
      const newB = b.data.date[0].monthDateYear.split('/').reverse().join('-');
      if(newA == newB){
        return - b.data.date[0].hourMinutes.localeCompare(a.data.date[0].hourMinutes);
      } else {
        const time = (a.data.date[0].hourMinutes)
        console.log(time)
        return -new Date(newB) - -new Date(newA)
      }
    })
    })
  }

  /*
  refreshList(): void {
    this.currentTables = undefined;
    this.currentIndex = -1;
    this.retrieveTables();
  }

  retrieveTutorials(): void {
    this.tablesCollectionService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.arrayTables = data;
    });
  }

  setActiveTutorial(tables: Tables, index: number): void {
    this.currentTables = tables;
    this.currentIndex = index;
  }*/
}
