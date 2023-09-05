import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
   providedIn: 'root'
})
export class swUsuarioService {
   private UrlSis: string = environment.urlSistemaVinculacion+'rutaSeguridad/';
   private UrlSisCAN: string = environment.urlSistemaLocal;
   private UrlSisCAN2: string = environment.urlSistemaLocalJs;
   private UrlSisCentralizada: string = environment.urlCentralizada;

   constructor(private http: HttpClient) {

   }
   //LISTADO DE USUARIOS ACTIVOS
   ListarUsuarios(opcion:any,parametro:any) {
      let direccion = this.UrlSis + 'getDatos/'+opcion+'/'+parametro+'';
      return this.http.get(direccion);
   }
   //LITSADO DE PERFILES DE USUARIO
   ListarPerfilesUsuario(opcion:any,per_cedula: any) {
      let direccion = this.UrlSis +  'getDatos/'+opcion+'/'+per_cedula+'';
      return this.http.get(direccion);
   }
   //INGRESAR USUARIO

   UsuarioCrud(usuario: any) {
      let direccion = this.UrlSis+ 'postDatos';
      return this.http.post(direccion, usuario);
   }
   UsuarioModCrud(usuario: any) {
      let direccion = this.UrlSis+ 'putDatos';
      return this.http.post(direccion, usuario);
   }
   //LISTADO DEPENDENCIAS
   ListadoDependencias(valor1: any, valor2: any) {
      let direccion = this.UrlSisCAN + 'rutaAdmision/getListaPA/1/' + valor1 + '/' + valor2;
      return this.http.get(direccion);
   }

   //LISTADO DE DEPENDENCIAS ADMINISTRATIVAS
   ListadoDependenciasAdministrativos() {
      let direccion = this.UrlSisCAN2 + 'rutaAcceso/seguridad/obtenerdependencias';
      return this.http.get(direccion);
   }

   //BUSCAR USUARIO
   BuscarUsuario(cedula: any) {
      let direccion = this.UrlSisCentralizada + 'obtenerpersona/' + cedula;
      return this.http.get(direccion);
   }

}
