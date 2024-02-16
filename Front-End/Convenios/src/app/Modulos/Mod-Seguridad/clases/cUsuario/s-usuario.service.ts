import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';
import { IUsuario,GUsuario,MUsuario } from './iusuario';

@Injectable({
  providedIn: 'root'
})
export class SUsuarioService {

  link:DireccionesApi = new DireccionesApi;
  url:string=this.link.usuario;

  constructor(private http:HttpClient) { }

  getUsuarios():Observable<GUsuario[]>{
    return this.http.get<GUsuario[]>(this.url);
  }

  addUsuario(usuario:IUsuario):Observable<IUsuario>{
    
    return this.http.post<IUsuario>(this.url,usuario)
  }

  modUsuario(datosUsuario:MUsuario,id:string):Observable<MUsuario>{
    return this.http.put<MUsuario>(this.url+'/'+id,datosUsuario)
  }

}
