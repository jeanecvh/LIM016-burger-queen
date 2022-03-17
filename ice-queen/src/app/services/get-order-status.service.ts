import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetOrderStatusService {

  @Output() disparadorGetOrderStatus: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
