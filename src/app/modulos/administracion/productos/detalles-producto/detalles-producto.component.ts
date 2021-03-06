import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {
  id:string='';
  filter:string='';
  
  productosSimilares:ModeloProducto[]=[];
  producto:ModeloProducto = new ModeloProducto;
  constructor(private servicioProducto: ProductoService,    
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];  
    this.BuscarProducto();
    }

  BuscarProducto(){
    this.servicioProducto.ConsultarProductosPorId(this.id).subscribe((datos: ModeloProducto)=>{
      this.producto=datos;
      this.filter=String(this.producto.Categoria)
      this.ProductosSimilares(this.filter);
      },(error:any)=>{
      alert('error al buscar producto');
    })
  }

  ProductosSimilares(filter:string){
    this.servicioProducto.ConsultarProductosPorFilter(filter).subscribe((datos:ModeloProducto[])=>{
      this.productosSimilares = datos;
    },(error: any)=>{
      alert(error)
    })
  }
}
