import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { KitchenRoutingModule } from './kitchen-routing.module';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    KitchenRoutingModule
  ]
})
export class KitchenModule { }
