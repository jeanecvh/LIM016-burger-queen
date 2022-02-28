import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component'
import { ProfileComponent } from '../app/components/profile/profile.component';


const routes: Routes = [
  { path:'', redirectTo:'/home',pathMatch:'full' },
  { path:'home', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
