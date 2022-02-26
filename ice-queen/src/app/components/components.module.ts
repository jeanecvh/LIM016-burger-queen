import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module'
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    InputComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],

  exports: [
    HeaderComponent,
    InputComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
