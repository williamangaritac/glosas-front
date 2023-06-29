import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Glosa } from './glosas';

@Injectable({
  providedIn: 'root'
})

export class GlosaServiceService {

  //esta URL sirve para listar todas las glosas del backend
  private baseURL = "http://localhost:8080/api/v1/glosas"

  constructor(private httpClient: HttpClient) {}

  //este metodo sirve para listar todas las glosas del backend y sql
  obtenerListaGlosas(): Observable<Glosa[]> {
    return this.httpClient.get<Glosa[]>(`${this.baseURL}`)
  }

    //este metodo sirve para registrar un Glosa en el back y sql
  registrarGlosa(glosa: Glosa) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, glosa)
  }

   //este metodo sirve para actualizar el empleado
   actualizarGlosa(id:number, glosa:Glosa) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,glosa);
  }

    //este metodo sirve para obtener o buscar un empleado
    obtenerGlosaPorId(id:number):Observable<Glosa>{
      return this.httpClient.get<Glosa>(`${this.baseURL}/${id}`);
    }

    eliminarGlosa(id:number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
}
