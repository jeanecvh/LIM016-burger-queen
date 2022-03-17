import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component'
import { ProfileComponent } from '../app/components/profile/profile.component';
import { AuthGuard } from './services/guard/auth.guard';
import { MenuComponent } from './waiter/menu/menu.component';
import { TablesComponent } from './waiter/tables/tables.component';
import { WaiterComponent } from './waiter/waiter.component';


const routes: Routes = [
  { 
    path:'', 
    redirectTo:'/home', 
    pathMatch:'full' 
  },
  { 
    path:'home' || '', 
    component: LoginComponent 
  },
  { 
    path: 'waiter', 
    loadChildren: () => import('./waiter/waiter.module').then(m => m.WaiterModule)
  },
  { 
    path: 'chef', 
    loadChildren: () => import('./kitchen/kitchen.module').then(m => m.KitchenModule)
  },
  //{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  //{ path: 'waiter/tables', component: TablesComponent, canActivate: [AuthGuard] },
  //{ path: 'waiter/menu', component: MenuComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
