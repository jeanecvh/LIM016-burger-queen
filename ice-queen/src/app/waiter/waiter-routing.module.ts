import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/guard/auth.guard';
import { MenuComponent } from './menu/menu.component';
import { TablesComponent } from './tables/tables.component';
import { OrdersForDeliveryComponent } from './orders-for-delivery/orders-for-delivery.component';

const routes: Routes = [
  { path: 'tables', component: TablesComponent, canActivate: [AuthGuard] },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'orders-for-delivery', component:OrdersForDeliveryComponent,canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule { }
