import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearFinanciacionComponent } from './crear-financiacion/crear-financiacion.component';

const routes: Routes = [
  {
    path: "crear-financiacion",
    component: CrearFinanciacionComponent
  },
  {
    path: "contacto",
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
