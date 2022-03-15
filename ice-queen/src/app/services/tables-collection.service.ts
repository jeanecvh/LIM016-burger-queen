import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Tables } from '../models/tables.model';


@Injectable({
  providedIn: 'root'
})
export class TablesCollectionService {
  public dbPath = '/tables';
  tablesRef: AngularFirestoreCollection<Tables>;

  constructor(
    public db: AngularFirestore,

    ) {
    this.tablesRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Tables> {
    return this.tablesRef;
  }
  create(Tables: Tables): any {
    return this.tablesRef.add({ ...Tables });
  }
  update(id: string, data: any): Promise<void> {
    return this.tablesRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.tablesRef.doc(id).delete();
  }

}
