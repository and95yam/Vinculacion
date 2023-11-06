import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IInstitucion } from './i-institucion';
import { IInstitucion2 } from './i-institucion';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';

@Injectable({
  providedIn: 'root'
})
export class SInstitucionService {

  link:DireccionesApi = new DireccionesApi;
  url:string = this.link.insititucion;

  constructor( private http:HttpClient) { }

  //obtener Instituciones

  getAllI():Observable<IInstitucion[]>{
    return this.http.get<IInstitucion[]>(this.url);
  }
  // crear Instituciones

  createI(institucion:IInstitucion2):Observable<IInstitucion2>{
    return this.http.post<IInstitucion2>(this.url,institucion);
  }
  // modificar Institucion
  updateI(institucion:IInstitucion, id:number):Observable<IInstitucion>{
    return this.http.put<IInstitucion>(this.url+'/'+id,institucion);
  }
}
