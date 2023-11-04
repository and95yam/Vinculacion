import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CDependencia } from './cDependencia';
import { cDependenciaCreate } from './cDependencia';
import {DireccionesApi} from '../../../../../herramientas/direcciones/Direcciones'

@Injectable({
  providedIn: 'root'
})
export class SDependenciaService {

     link: DireccionesApi = new DireccionesApi;
     url:string=this.link.dependencia;

  constructor(
    private http:HttpClient ) { }



  //obtiene dependencia
  getAll():Observable<CDependencia[]>{
    return this.http.get<CDependencia[]>(this.url);
  }

  //crear dependencia
  create(dependencia:cDependenciaCreate):Observable<cDependenciaCreate>{
    return this.http.post<cDependenciaCreate>(this.url, dependencia);
  }

  //obtiene una dependencia
  get(id:number):Observable<CDependencia[]>{
    return this.http.get<CDependencia[]>(this.url+'/'+id);
  }

  //actualizar dependencia
  update(dependencia:CDependencia, id:number):Observable<CDependencia>{
    return this.http.put<CDependencia>(this.url+'/'+id,dependencia);
  }


}
