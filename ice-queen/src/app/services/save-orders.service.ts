import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveOrdersService {
  @Output() disparadorSaveOrder: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
