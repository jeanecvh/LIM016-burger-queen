import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdersComponent } from "./orders/orders.component";
import { AuthGuard } from '../services/guard/auth.guard';
import { CommonModule } from "@angular/common";
import { OrdersDeliveredComponent } from "./orders-delivered/orders-delivered.component";


const routes: Routes = [
    {
        path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]
    },
    {
        path: 'delivered', component: OrdersDeliveredComponent, canActivate: [AuthGuard]
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
