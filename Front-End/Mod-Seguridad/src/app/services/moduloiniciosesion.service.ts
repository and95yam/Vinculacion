import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { of, Observable } from 'rxjs';

import { environment } from "src/environments/environment";

@Injectable({
   providedIn: 'root'
})
export class ServiciosWebSistema {

   private urlSistemaAdmisiones: string = environment.urlSistemaLocalJs;
   private urlSistemaAdmisionesEdi: string = environment.urlSistemaLocal;
   private urlComprobantes: string = environment.urlComprobantes;
   private urlConvenios: string = environment.vinculacionDns;

   constructor(private http: HttpClient) { }

   //Obtener key
   ObtenerKey(idUsuario: number) {
      const content = {
         username: "sistemaA",
         passwoord: "academico2021.",
         id: idUsuario
      }
      return this.http.post(this.urlSistemaAdmisiones + "rutaAcceso/seguridad/obtenerkey/", content, { headers: { skip: "true" } })
   }

   //Obtener key
   ObtenerTokenKey(datosKey: any, idUsuario: any) {
      var key = datosKey;
      const httpOptions = {
         headers: new HttpHeaders(
            {
               'Content-Type': 'application/json',
               'Authorization': `Basic ${btoa(key)}`,
               'skip': 'true'
            }
         )
      };
      var content = {
         username: "sistemaA",
         passwoord: "academico2021.",
         id: idUsuario
      };
      return this.http.post(this.urlSistemaAdmisiones + "rutaAcceso/seguridad/accesows", content, httpOptions)
   }

   CerrarSessionToken(key: any, idUsuario: any) {
      var header = { headers: new HttpHeaders().set('Authorization', `Basic ${btoa(key)}`) }
      var content = {
         username: "sistemaA",
         passwoord: "academico2021.",
         id: idUsuario
      };
      return this.http.post(this.urlSistemaAdmisiones + "rutaAcceso/seguridad/cierresession", content, header);
   }

   logeado(): Boolean {
      if (!sessionStorage.getItem("tokenKey")) return false;
      return true;
   }

   verificaAuth(): Observable<boolean> {
      const sesion = sessionStorage.getItem("tokenKey");
      if (!sesion) return of(false);
      return of(true);
   }

   getTokenKey() {
      return sessionStorage.getItem("tokenKey");
   }

   ListadoRolesUsuario(strCedula: any) {
      let direccion = this.urlConvenios + '/perfilyRol/' + strCedula ;
      return this.http.get(direccion);
   }

   TokenJsonJava(datos: any) {
      let headers = new Headers();
      var content = {
         token: datos
      };
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.urlComprobantes + 'ServiciosWebPagosBancos/Servicios/TokenJson', content)

   }

   DecoToken(datos: any) {
      let headers = new Headers();
      var content = { token: datos };
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.urlComprobantes + 'ServiciosWebPagosBancos/Servicios/DecoToken', content)
   }

}
