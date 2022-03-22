import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdersComponent } from "./orders/orders.component";
import { AuthGuard } from '../services/guard/auth.guard';
import { CommonModule } from "@angular/common";


const routes: Routes = [
    {
        path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class KitchenRoutingModule {}
