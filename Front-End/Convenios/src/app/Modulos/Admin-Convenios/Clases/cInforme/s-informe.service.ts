import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DireccionesApi} from '../../../../../herramientas/direcciones/Direcciones'
import { IInforme } from './i-informe';

@Injectable({
  providedIn: 'root'
})
export class SInformeService {

  link:DireccionesApi= new DireccionesApi;
  url:string=this.link.informeDatos;

  constructor(private http:HttpClient) { }

  getInformeCoord(stridcord:string):Observable<IInforme[]>{
    return this.http.get<IInforme[]>(this.url+'/'+stridcord);
  }
}
