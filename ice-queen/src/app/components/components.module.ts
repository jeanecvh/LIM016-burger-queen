import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],

  exports: [
    HeaderComponent,
    FooterComponent,
    ProfileComponent
  ]
})
export class ComponentsModule { }
