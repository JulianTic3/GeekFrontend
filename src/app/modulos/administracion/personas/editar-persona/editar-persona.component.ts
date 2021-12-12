import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloDatos } from 'src/app/modelos/datos.modelo';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  id: string = "";

  fgValidador: FormGroup = this.fb.group({
    'Id': ["", [Validators.required]],
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

  constructor(private fb: FormBuilder, private servicioAdministracion: AdministracionService, private router: Router, private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
    this.id = this.servicioSeguridad.ObtenerId();
    this.BuscarPersona();

  }
  BuscarPersona() {
    this.servicioAdministracion.ConsultarPersonaPorId(this.id).subscribe((datos: ModeloPersona) => {
      this.fgValidador.controls["Id"].setValue(this.id);
      this.fgValidador.controls["TipoDocumento"].setValue(datos.TipoDocumento);
      this.fgValidador.controls["NumeroDocumento"].setValue(datos.NumeroDocumento);
      this.fgValidador.controls["Nombre"].setValue(datos.Nombre);
      this.fgValidador.controls["Apellidos"].setValue(datos.Apellidos);
      this.fgValidador.controls["Nombre"].setValue(datos.Nombre);
      this.fgValidador.controls["Correo"].setValue(datos.Correo);
      this.fgValidador.controls["Direccion"].setValue(datos.Direccion);
      this.fgValidador.controls["Ciudad"].setValue(datos.Ciudad);
      this.fgValidador.controls["Pais"].setValue(datos.Pais);
      this.fgValidador.controls["FechaNacimiento"].setValue(datos.FechaNacimiento);
      this.fgValidador.controls["Celular"].setValue(datos.Celular);
    })
  }

  editarUsuario() {
    let Id = this.fgValidador.controls['Id'].value;
    let TipoDocumento = this.fgValidador.controls['TipoDocumento'].value;
    let NumeroDocumento = this.fgValidador.controls['NumeroDocumento'].value;
    let Nombre = this.fgValidador.controls['Nombre'].value;
    let Apellidos = this.fgValidador.controls['Apellidos'].value;
    let Correo = this.fgValidador.controls['Correo'].value;
    let Direccion = this.fgValidador.controls['Direccion'].value;
    let Ciudad = this.fgValidador.controls['Ciudad'].value;
    let Pais = this.fgValidador.controls['Pais'].value;
    let FechaNacimiento = new Date(this.fgValidador.controls['FechaNacimiento'].value);
    let Celular = this.fgValidador.controls['Celular'].value;

    this.servicioAdministracion.EditarUsuario(Id, TipoDocumento, NumeroDocumento, Nombre, Apellidos, Correo, Direccion, Ciudad, Pais, Celular, FechaNacimiento).subscribe((datos: ModeloPersona) => {
      alert("Usuario Actualizado de forma exitosa")
      this.router.navigate(["/inicio"]);
    }, (error: any) => {
      alert("Error - No se pudo guardar el usuario")
    })
  }
}