import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { CrearPedidoComponent } from './crear-pedido/crear-pedido.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';


@NgModule({
  declarations: [
    CrearPedidoComponent,
    CarritoComprasComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
