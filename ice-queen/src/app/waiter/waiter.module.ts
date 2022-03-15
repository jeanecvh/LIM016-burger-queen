import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TablesComponent } from './tables/tables.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    MenuComponent,
    TablesComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MenuComponent,
    TablesComponent
  ]
})
export class WaiterModule { }
