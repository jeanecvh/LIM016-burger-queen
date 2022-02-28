import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],

  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
