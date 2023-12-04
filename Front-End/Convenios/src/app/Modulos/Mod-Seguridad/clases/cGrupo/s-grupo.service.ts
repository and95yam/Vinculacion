import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';
import { IGrupo,ModGrupo } from './i-grupo';
@Injectable({
  providedIn: 'root'
})
export class SGrupoService {

  link:DireccionesApi = new DireccionesApi;
  url:string=this.link.grupo

  constructor(private http:HttpClient) { }

  getGrupo():Observable<IGrupo[]>{
    return this.http.get<IGrupo[]>(this.url);
  }

  createGrupo(grupo:ModGrupo):Observable<ModGrupo>{
    return this.http.post<ModGrupo>(this.url,grupo)
  }

  updateGrupo(datosGrupo:ModGrupo,id:number):Observable<ModGrupo>{
    return this.http.put<ModGrupo>(this.url+'/'+id,datosGrupo);
  }

}
