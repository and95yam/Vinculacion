import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SwAsignacionRolService {
  private UrlSis: string = environment.urlSistemaVinculacion+'rutaSeguridad/';;

   constructor(private http: HttpClient) { }

  //LISTADO DE Asignación de roles y reglamentos
  ListarAsignacionRolReg(opcion:any) {
    let direccion = this.UrlSis + 'ListarAsignacionReg/'+opcion;
    return this.http.get(direccion);
 }

 IngresarAsignacionRol(opcion:any){
  let direccion= this.UrlSis+'ingresarAsignacionRolRegl';
  return this.http.post(direccion, opcion);
 }

 ModificarAsignacionRol(opcion:any){
  let direccion= this.UrlSis+'modificarAsignacionRolRegl';
  return this.http.post(direccion, opcion);
 }
}
