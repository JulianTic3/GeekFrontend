import { Component, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListaProductos: ModeloProducto[] = [];

  constructor(private servicioProducto: ProductoService) { }

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