import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { CrearFinanciacionComponent } from './crear-financiacion/crear-financiacion.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    CrearFinanciacionComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
