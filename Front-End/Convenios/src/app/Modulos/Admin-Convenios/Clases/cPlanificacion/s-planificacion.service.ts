import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';
import { IPlanificacion } from './i-planificacion';

@Injectable({
  providedIn: 'root'
})
export class SPlanificacionService {

  link:DireccionesApi=new DireccionesApi;
  url:string = this.link.planificacion;

  constructor(private http:HttpClient) { }

  getPlanificaciones(idConvenio:string):Observable<IPlanificacion[]>{
    return this.http.get<IPlanificacion[]>(this.url+'/'+idConvenio)
  }
}
