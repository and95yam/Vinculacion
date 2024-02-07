import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';
import { ISeguridad } from './iseguridad';
import { id } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class SSeguridadService {

  link: DireccionesApi = new DireccionesApi; 
  url:string= this.link.perfilPerID
  dir!: string;
  constructor(private http:HttpClient) { }

getPerfilID(perID:any):Observable<ISeguridad[]>{
  sessionStorage.getItem('perid')

  this.dir= this.url+'/'+perID
  console.log('direccion',this.dir)
  return this.http.get<ISeguridad[]>(this.url+'/'+perID)
}
}
