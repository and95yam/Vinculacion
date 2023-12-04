import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';
import { IAccion, addAccion } from './i-accion';
import { IRol } from '../cRol/i-rol';

@Injectable({
  providedIn: 'root'
})
export class SAccionService {

  link:DireccionesApi = new DireccionesApi;
  url:string=this.link.accion;

  constructor(private http:HttpClient) { }

  //OBTENER ACCIONES

  getAcciones():Observable<IAccion[]>{
    return this.http.get<IAccion[]>(this.url);
  }

  createAccion(accion:addAccion):Observable<addAccion>{
    return this.http.post<addAccion>(this.url,accion)
  }

  updateAccion(datosAccion:addAccion,id:number):Observable<addAccion>{
    return this.http.put<addAccion>(this.url+'/'+id,datosAccion);
  }

  //eliminar

  deleteAccion(id: string): Observable<void> {
    return this.http.delete<void>(this.url+'/'+id);
  }
}
