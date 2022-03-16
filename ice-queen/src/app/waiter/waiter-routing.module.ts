import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/guard/auth.guard';
import { MenuComponent } from './menu/menu.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  { path: 'waiter/tables', component: TablesComponent, canActivate: [AuthGuard] },
  { path: 'waiter/menu', component: MenuComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule { }
