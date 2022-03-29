import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterStatusPipe } from './pipes/filter-status.pipe';
import { FilterStatusWaiterPipe } from './pipes/filter-status-waiter.pipe';



@NgModule({
  declarations: [
    FilterStatusPipe,
    FilterStatusWaiterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterStatusPipe,
    FilterStatusWaiterPipe
  ]
})
export class PipesModule { }
