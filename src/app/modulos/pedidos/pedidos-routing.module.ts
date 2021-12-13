import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { CrearPedidoComponent } from './crear-pedido/crear-pedido.component';

const routes: Routes = [
  {
    path: "crear-pedido",
    component: CrearPedidoComponent
  },{
    path: "carrito-compras/:id",
    component: CarritoComprasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
