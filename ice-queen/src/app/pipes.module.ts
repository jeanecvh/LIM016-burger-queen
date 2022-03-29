import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterStatusPipe } from './pipes/filter-status.pipe';



@NgModule({
  declarations: [
    FilterStatusPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterStatusPipe
  ]
})
export class PipesModule { }
