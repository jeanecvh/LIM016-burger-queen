import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TablesComponent } from './tables/tables.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WaiterComponent } from './waiter.component';
import { WaiterRoutingModule } from './waiter-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    MenuComponent,
    TablesComponent,
    CardsComponent,
    WaiterComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WaiterRoutingModule,
  ],
  exports: [
    MenuComponent,
    TablesComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WaiterModule { }
