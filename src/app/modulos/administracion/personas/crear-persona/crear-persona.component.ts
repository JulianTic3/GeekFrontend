import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'TipoDocumento': ["", [Validators.required]],
    'NumeroDocumento': ["", [Validators.required]],
    'Nombre': ["", [Validators.required]],
    'Apellidos': ["", [Validators.required]],
    'Correo': ["", [Validators.required, Validators.email]],
    'Direccion': ["", [Validators.required]],
    'Ciudad': ["", [Validators.required]],
    'Pais': ["", [Validators.required]],
    'FechaNacimiento': ["", [Validators.required]],
    'Celular': ["", [Validators.required]],
  })

  constructor(private fb: FormBuilder, private servicioAdministracion: AdministracionService, private router: Router) { }

  ngOnInit(): void {
  }

  crearUsuario() {
    let TipoDocumento = this.fgValidador.controls['TipoDocumento'].value;
    let NumeroDocumento = this.fgValidador.controls['NumeroDocumento'].value;
    let Nombre = this.fgValidador.controls['Nombre'].value;
    let Apellidos = this.fgValidador.controls['Apellidos'].value;
    let Correo = this.fgValidador.controls['Correo'].value;
    let Direccion = this.fgValidador.controls['Direccion'].value;
    let Ciudad = this.fgValidador.controls['Ciudad'].value;
    let Pais = this.fgValidador.controls['Pais'].value;
    let FechaNacimiento = new Date (this.fgValidador.controls['FechaNacimiento'].value);
    let Celular = this.fgValidador.controls['Celular'].value;

    this.servicioAdministracion.GuardarUsuario(TipoDocumento, NumeroDocumento, Nombre, Apellidos, Correo, Direccion, Ciudad, Pais, Celular, FechaNacimiento).subscribe((datos: ModeloPersona) => {
      alert("Usuario Guardado de forma exitosa")
      this.router.navigate(["/inicio"]);
    },(error: any)=>{
      alert("Error - No se pudo guardar el usuario")
    })
  }
}
