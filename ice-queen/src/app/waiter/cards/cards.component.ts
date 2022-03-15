import {  ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Tables } from 'src/app/models/tables.model';
import { TablesCollectionService } from 'src/app/services/tables-collection.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public tablesCollections: AngularFirestoreCollection<Tables>;
  arrayTables?: Observable<Tables[]>;
  /*
  currentTables?: Tables;
  currentIndex = -1;
  ntables = "";*/



  constructor(
    public readonly afs: AngularFirestore
    //private tablesCollectionService : TablesCollectionService

    ) {
      this.tablesCollections = afs.collection<Tables>('arrayTables');
      this.arrayTables = this.tablesCollections.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Tables;
          const id = a.payload.doc.id;
          return { id, ...data}
        }))
      )
    }

  ngOnInit(): void {
    //this.retrieveTables();
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
