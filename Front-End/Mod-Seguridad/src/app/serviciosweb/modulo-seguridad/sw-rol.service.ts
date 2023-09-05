import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
   providedIn: 'root'
})
export class swRolService {
  private UrlSis: string = environment.urlSistemaVinculacion+'rutaSeguridad/';
  private vinculacionDns: string = environment.vinculacionDns;
  constructor(private http: HttpClient) {
  }



  ListarRoles(valor:any) {
    let direccion=this.vinculacionDns+'rol';
    return this.http.get(direccion);
  }

  InsertarRol(datos:any){
    let direccion=this.vinculacionDns+'rol';
    return this.http.post(direccion, datos);
  }

  ModificarRol(datos:any, codigo:any){
    let direccion=this.vinculacionDns+'rol/'+codigo;
    return this.http.put(direccion, datos);
  }
}
