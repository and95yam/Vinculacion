import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';
import { IActividad,GActividad } from './i-actividad';
import { GMiembro } from '../cMiembro/i-miembro';

@Injectable({
  providedIn: 'root'
})
export class SActividadService {

  link: DireccionesApi = new DireccionesApi; 
  url:string= this.link.actividadInforme;

  constructor(private http:HttpClient) { }

  getActividades(idInforme:string):Observable<GActividad[]>{
    console.log('idinforme',idInforme)
    const encodedId = encodeURIComponent(idInforme);
    const apiUrl = `${this.url}/${encodedId}`;

    return this.http.get<GActividad[]>(apiUrl);
  }
}
