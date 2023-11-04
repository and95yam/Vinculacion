import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';
import { ICoordinador } from './i-coordinador';
import { ICoordinador2 } from './i-coordinador';


@Injectable({
  providedIn: 'root'
})
export class SCoordinadorService {

  link:DireccionesApi = new DireccionesApi;
  url:string=this.link.coordinador;

  constructor( private http:HttpClient) { }

  //Obtener Coordinador
  getAllCoordinador():Observable<ICoordinador[]>{
      return this.http.get<ICoordinador[]>(this.url);
  }

  //crear Coordinador
  createCoordinador(coordinador:ICoordinador2):Observable<ICoordinador2>{
    return this.http.post<ICoordinador2>(this.url,coordinador);
  }

  //actualizar Coordinador
  updateCoordinador(coordinador:ICoordinador2, id:string):Observable<ICoordinador2>{
    return this.http.put<ICoordinador2>(this.url+'/'+id,coordinador);
  }

}
