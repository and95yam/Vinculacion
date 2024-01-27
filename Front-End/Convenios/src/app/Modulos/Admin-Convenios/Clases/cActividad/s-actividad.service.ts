import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';
import { IActividad,GActividad,EActividad } from './i-actividad';
import { GMiembro } from '../cMiembro/i-miembro';
import id from 'date-fns/locale/id';

@Injectable({
  providedIn: 'root'
})
export class SActividadService {

  link: DireccionesApi = new DireccionesApi; 
  url:string= this.link.actividadInforme;

  constructor(private http:HttpClient) { }

  createActividad(actividad:IActividad,idInforme:string):Observable<IActividad>{
    const encodedId = encodeURIComponent(idInforme);
    const apiUrl = `${this.url}/${encodedId}`;
    console.log('direccion', apiUrl);
    
    return this.http.post<IActividad>(apiUrl,actividad);
  }

  getActividades(idInforme:string):Observable<GActividad[]>{
    console.log('idinforme',idInforme)
    const encodedId = encodeURIComponent(idInforme);
    const apiUrl = `${this.url}/${encodedId}`;

    return this.http.get<GActividad[]>(apiUrl);
  }

  editActividad(actividad:EActividad,idInforme:string,idActividad:number):Observable<EActividad>{
    
    return this.http.put<EActividad>(this.url+'/'+idInforme+'/'+idActividad,actividad);
  }

  deleteActividad(idInforme:string,idActividad:number):Observable<void>{

    /*const encodedId = encodeURIComponent(idInforme).replace;
    const apiUrl = `${this.url}/${encodedId}/${idActividad}`;*/
    return this.http.delete<void>(this.url+'/'+idInforme+'/'+idActividad);

  }
}
