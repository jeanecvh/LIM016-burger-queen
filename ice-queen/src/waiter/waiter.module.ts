import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables/tables.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    TablesComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WaiterModule { }
