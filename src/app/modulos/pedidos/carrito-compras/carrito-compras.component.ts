import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  id:string='';
  cantidad:number=0;
  precio:number=0;
  pedido:ModeloProducto[]=[];
  producto:ModeloProducto= new ModeloProducto;
  
  
  
  constructor(private route:ActivatedRoute, 
    private servicioProducto: ProductoService,
    private fb:FormBuilder) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarProducto();    
  }
  BuscarProducto(){
    this.servicioProducto.ConsultarProductosPorId(this.id).subscribe((datos: ModeloProducto)=>{
      this.producto=datos;
      this.pedido.push(this.producto);
      },(error:any)=>{
      alert('error al buscar producto');
    })
  }
  SumaTotal(){
    let precio:number=this.producto.Precio!;
    let cantidad:number =parseInt((<HTMLInputElement>document.getElementById("Cantidad")).value)
  }    
}
