import { Component, OnInit } from '@angular/core';
import { AdministracionService } from 'src/app/servicios/administracion.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Router } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';

@Component({
  selector: 'app-eliminar-persona',
  templateUrl: './eliminar-persona.component.html',
  styleUrls: ['./eliminar-persona.component.css']
})
export class EliminarPersonaComponent implements OnInit {

  id: string="";

  constructor(private servicioAdministracion: AdministracionService, private servicioSeguridad: SeguridadService, private router: Router,) { }

  ngOnInit(): void {
    this.id = this.servicioSeguridad.ObtenerId();
    this.EliminarPersona();
    this.servicioSeguridad.EliminarInformacionSesion();
  }

  EliminarPersona() {
    this.servicioAdministracion.EliminarPersona(this.id).subscribe((datos: ModeloPersona) => {
      alert('Haz eliminado tu rsgistro!  Hasta pronto!!')
      this.router.navigate(["/inicio"])
    }, (error: any) => {
      alert('No ha sido posible eliminar tu registro');
    })
  }

}
