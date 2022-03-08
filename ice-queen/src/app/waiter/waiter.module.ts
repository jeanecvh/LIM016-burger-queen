import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TablesComponent } from './tables/tables.component';



@NgModule({
  declarations: [
    MenuComponent,
    TablesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    TablesComponent
  ]
})
export class WaiterModule { }
