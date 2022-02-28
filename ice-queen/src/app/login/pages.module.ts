import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module'
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';




@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  exports:[
    LoginComponent,
  ]
})
export class PagesModule { }
