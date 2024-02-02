import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';
import { IPerfil,GPerfil,MPerfil } from './i-perfil';

@Injectable({
  providedIn: 'root'
})
export class SPerfilService {

  link:DireccionesApi = new DireccionesApi;
  url:string=this.link.perfil;
  url2:string=this.link.perfilRol;

  constructor(private http:HttpClient) { }

  getPerfiles():Observable<GPerfil[]>{
    return this.http.get<GPerfil[]>(this.url2)
  }

  createperfil(perfil:IPerfil):Observable<IPerfil>{
    return this.http.post<IPerfil>(this.url,perfil)
  }

  modPerfil(perfil:GPerfil,id:number):Observable<MPerfil>{
    return this.http.put<MPerfil>(this.url+'/'+id,perfil)
  }

}
