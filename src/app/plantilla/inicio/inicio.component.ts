import { Component, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';
declare const M: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  ngAfterViewInit() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
    var elem = document.querySelectorAll('.carousel');
    var instance = M.Carousel.init(elem);
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  };

  ListaProductos: ModeloProducto[] = [];


  constructor(private servicioProducto: ProductoService) {

   }

  ngOnInit(): void {
    this.ObtenerListaProductos();
  }

  ObtenerListaProductos() {
    this.servicioProducto.ConsultarProductos().subscribe((datos: ModeloProducto[]) => {
      this.ListaProductos = datos;
    }, (error: any) => {
      alert(error)
    })
  }
}