import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';
import { IRol, addRol } from './i-rol';

@Injectable({
  providedIn: 'root'
})
export class SRolService {

  link:DireccionesApi = new DireccionesApi;
  url:string=this.link.rol;

  constructor(private http:HttpClient) { }

  //obtener roles

  getRoles(): Observable<IRol[]> {
  return this.http.get<IRol[]>(this.url);
}


  //crear convenio

  createRol(rol:addRol):Observable<addRol>{
    return this.http.post<addRol>(this.url,rol)
  }

  updateRol(datosRol:addRol,id:number):Observable<addRol>{
    return this.http.put<addRol>(this.url+'/'+id,datosRol);
  }

  //falta eliminar
}
