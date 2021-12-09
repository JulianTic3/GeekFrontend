import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'Nombre': ["", [Validators.required]],
    'Precio': ["", [Validators.required]],
    'Stock': ["", [Validators.required]],
    'Categoria': ["", [Validators.required]],
    'Imagen': ["", [Validators.required]],
    'Descripcion': ["", [Validators.required]],
  })

  constructor( private fb:FormBuilder, private servicioProducto: ProductoService, private router: Router) { }

  ngOnInit(): void {
  }

  crearProducto() {
    let Nombre = this.fgValidador.controls['Nombre'].value;
    let Precio = parseInt(this.fgValidador.controls['Precio'].value);
    let Stock = parseInt(this.fgValidador.controls['Stock'].value);
    let Categoria = this.fgValidador.controls['Categoria'].value;
    let Imagen = this.fgValidador.controls['Imagen'].value;
    let Descripcion = this.fgValidador.controls['Descripcion'].value;

    let p = new ModeloProducto();
    p.Nombre=Nombre;
    p.Precio=Precio;
    p.Stock=Stock;
    p.Categoria=Categoria;
    p.Imagen=Imagen;
    p.Descripcion=Descripcion;
    this.servicioProducto.CrearProducto(p).subscribe((datos: ModeloProducto) => {
      alert("Producto Guardado de forma exitosa")
      this.router.navigate(["/administracion/buscar-producto"]);
    },(error: any)=>{
      alert("Error - No se pudo guardar el producto")
    })
  }
}
