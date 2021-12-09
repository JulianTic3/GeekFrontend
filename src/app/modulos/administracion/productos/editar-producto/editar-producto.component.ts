import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  id:string='';
  fgValidador: FormGroup = this.fb.group({
    'Id': ["", [Validators.required]],
    'Nombre': ["", [Validators.required]],
    'Precio': ["", [Validators.required]],
    'Stock': ["", [Validators.required]],
    'Categoria': ["", [Validators.required]],
    'Imagen': ["", [Validators.required]],
    'Descripcion': ["", [Validators.required]],
  })

  constructor( private fb:FormBuilder, 
    private servicioProducto: ProductoService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];    
    this.BuscarProducto();
    
  }

  BuscarProducto(){
    this.servicioProducto.ConsultarProductosPorId(this.id).subscribe((datos: ModeloProducto)=>{
      this.fgValidador.controls["Id"].setValue(this.id);
      this.fgValidador.controls["Nombre"].setValue(datos.Nombre);
      this.fgValidador.controls["Precio"].setValue(datos.Precio);
      this.fgValidador.controls["Stock"].setValue(datos.Stock);
      this.fgValidador.controls["Categoria"].setValue(datos.Categoria);
      this.fgValidador.controls["Imagen"].setValue(datos.Imagen);
      this.fgValidador.controls["Descripcion"].setValue(datos.Descripcion);
    })
  }

  EditarProducto() {
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
    p.Id=this.id;
    this.servicioProducto.EditarProducto(p).subscribe((datos: ModeloProducto) => {
      alert("Producto Guardado de forma exitosa")
      this.router.navigate(["/administracion/buscar-producto"]);
    },(error: any)=>{
      alert("Error - No se pudo guardar el producto")
    })
  }

}
