import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPersona } from '../modelos/persona.modelo';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {

  }

  GuardarUsuario(tipo: string, numero: string, nombre: string, apellidos: string, correo: string, direccion: string, ciudad: string, pais: string, celular: string, nto: Date): Observable<ModeloPersona> {
    return this.http.post<ModeloPersona>(`${this.url}/personas`, {
      TipoDocumento: tipo,
      NumeroDocumento: numero,
      Nombre: nombre,
      Apellidos: apellidos,
      Correo: correo,
      Direccion: direccion,
      Ciudad: ciudad,
      Pais: pais,
      FechaNacimiento: nto,
      Celular: celular
    },
      {
        headers: new HttpHeaders(),
      })
  }

  EditarUsuario(id: string, tipo: string, numero: string, nombre: string, apellidos: string, correo: string, direccion: string, ciudad: string, pais: string, celular: string, nto: Date): Observable<ModeloPersona> {
    return this.http.patch<ModeloPersona>(`${this.url}/personas/${id}`, {
      TipoDocumento: tipo,
      NumeroDocumento: numero,
      Nombre: nombre,
      Apellidos: apellidos,
      Correo: correo,
      Direccion: direccion,
      Ciudad: ciudad,
      Pais: pais,
      FechaNacimiento: nto,
      Celular: celular
    },
      {
        headers: new HttpHeaders(),
      })
  }

  EliminarPersona(id: string): Observable<any> {
    return this.http.delete<ModeloPersona>(`${this.url}/personas/${id}`, {
      headers: new HttpHeaders({
      }),
    })
  }

  ConsultarPersonaPorId(id: string): Observable<ModeloPersona> {
    return this.http.get<ModeloPersona>(`${this.url}/personas/${id}`);
  }
}
