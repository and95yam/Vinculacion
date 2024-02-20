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
  url3:string = this.link.gestionPerfil;
  url4:string = this.link.perfilRol2;

  constructor(private http:HttpClient) { }

  getPerfiles():Observable<GPerfil[]>{
    return this.http.get<GPerfil[]>(this.url2)
  }

  createperfil(perfil:IPerfil):Observable<IPerfil>{
    return this.http.post<IPerfil>(this.url,perfil)
  }

  modificarPerfil(perfil:MPerfil,PerId:any,rolId:any):Observable<MPerfil>{
    return this.http.put<MPerfil>(this.url3+'/'+PerId+'/'+rolId,perfil)
  }

  getPerfilesId(idPer:string):Observable<GPerfil[]>{
    console.log('direccion:',this.url4+'/'+idPer)
    return this.http.get<GPerfil[]>(this.url4+'/'+idPer)

  }
  checkPerfil(idPer:string,idRol:number):Observable<any[]>{
    return this.http.get<any[]>(this.url3+'/'+idPer+'/'+idRol)

  }

}
