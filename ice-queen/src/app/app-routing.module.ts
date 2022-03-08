import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component'
import { ProfileComponent } from '../app/components/profile/profile.component';
import { AuthGuard } from './services/guard/auth.guard';
import { MenuComponent } from './waiter/menu/menu.component';
import { TablesComponent } from './waiter/tables/tables.component';


const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full' },
  { path:'home' || '', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'tables', component: TablesComponent, canActivate: [AuthGuard] },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
