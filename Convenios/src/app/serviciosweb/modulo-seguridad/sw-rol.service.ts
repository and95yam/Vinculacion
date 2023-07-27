import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
   providedIn: 'root'
})
export class swRolService {
  private UrlSis: string = environment.urlSistemaVinculacion+'rutaSeguridad/';
  constructor(private http: HttpClient) { 
  }

  ListarRoles(activo:any) {
    let direccion=this.UrlSis+'getDatos/1/'+activo;
    return this.http.get(direccion);
  }

  InsertarRol(datos:any){
    let direccion=this.UrlSis+'postDatos';
    return this.http.post(direccion, datos);
  }

  ModificarRol(datos:any, codigo:any){
    let direccion=this.UrlSis+'putDatos/'+codigo;
    return this.http.put(direccion, datos);
  }
}
