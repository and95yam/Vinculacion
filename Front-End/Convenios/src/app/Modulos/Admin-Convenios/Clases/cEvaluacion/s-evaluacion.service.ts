import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DireccionesApi} from '../../../../../herramientas/direcciones/Direcciones'
import { IEvaluacion } from './c-evaluacion';

@Injectable({
  providedIn: 'root'
})
export class SEvaluacionService {
  link: DireccionesApi = new DireccionesApi;
  url:string=this.link.evaluacionInforme;

  constructor(
    private http:HttpClient
  ) { }

  //evaluar informe 

  evaluarInforme(idInforme:string,evaluacion:IEvaluacion):Observable<IEvaluacion>{
    return this.http.put<IEvaluacion>(this.url+'/'+idInforme,evaluacion)
  }
}
