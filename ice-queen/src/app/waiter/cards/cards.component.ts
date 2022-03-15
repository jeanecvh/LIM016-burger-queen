import { Component, OnInit } from '@angular/core';
import { Tables } from 'src/app/models/tables.model';
import { TablesCollectionService } from 'src/app/services/tables-collection.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  arrayTables?: Tables[];
  currentTables?: Tables;
  currentIndex = -1;
  ntables = "";
  retrieveTables: any;

  constructor(private tablesCollectionService : TablesCollectionService) { }

  ngOnInit(): void {
    this.retrieveTables();
  }

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
  }
}
