import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
declare const M: any;

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  sesionIniciada: boolean = false;
  subs: Subscription = new Subscription();
  nombre: string = "";

  ngAfterViewInit() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
    var elem = document.querySelectorAll('.modal');
    var instance = M.Modal.init(elem);
  };
  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificar) => {
      this.sesionIniciada = datos.EstaIdentificado;
      this.nombre = this.seguridadServicio.ObtenerNombre();
    })
  }
}
