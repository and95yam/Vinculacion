import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ROLES } from 'src/app/shared/utils/Constantes';
import { Sesion } from 'src/app/shared/interfaces/Seguridad';
import { ServiciosWebSistema } from '../../services/moduloiniciosesion.service';

@Injectable({
   providedIn: 'root',
})
export class SessionUsuarioService {

   private config: { version?: string } = {};

   constructor(
      private ruta: Router,
      private serviciosWebSistema: ServiciosWebSistema,

      private httpClient: HttpClient
   ) { }

   //Datos Seesion
   public async ObtenerDatosSesion() {
    //  await this.VerificacionActualizacionVersion();
      let Datos: Sesion = {} as Sesion;
      const TokenDeco = await new Promise<any>((resolve) =>
         this.serviciosWebSistema
            .DecoToken(sessionStorage.getItem('tokenUsuario'))
            .subscribe((translated:any) => {
               resolve(translated);
            })
      );
      if (TokenDeco.success) {
         Datos = {
            perfiles: TokenDeco.Usuario.perfiles,
            strCedula: TokenDeco.Usuario.strCedula,
            idUsuario: TokenDeco.Usuario.idUsuario,
            idRolSeccionado: TokenDeco.Usuario.idRolSeccionado,
            strNombreRolSeccionado: TokenDeco.Usuario.strNombreRolSeccionado,
            strCorreo: TokenDeco.Usuario.strCorreo,
            strUserNombres: TokenDeco.Usuario.strUserNombres,
            strFechaNacimiento: TokenDeco.Usuario.strFechaNacimiento,
            idPeriodoVigente: TokenDeco.Usuario.idPeriodoVigente,
            strPeriodoVigente: TokenDeco.Usuario.strPeriodoVigente,
            strNomenclatura: TokenDeco.Usuario.strNomenclatura,
            idReglamento: TokenDeco.Usuario.idReglamento,
         };
      }
      return Datos;
   }

   public RemoverDatosCas() {
      window.sessionStorage.removeItem('clientName');
      window.sessionStorage.removeItem('name');
   }

   async obtenerTokenKey(usuarioid: any) {
      const datos = await new Promise<any>((resolve) =>
         this.serviciosWebSistema.ObtenerKey(usuarioid).subscribe((translated) => {
            resolve(translated);
         })
      );
      sessionStorage.setItem('key', datos.key);
      const datos1 = await new Promise<any>((resolve) =>
         this.serviciosWebSistema
            .ObtenerTokenKey(datos.key, usuarioid)
            .subscribe((translated) => {
               resolve(translated);
            })
      );
      if (datos1.success) {
         const datos2 = await new Promise<any>((resolve) => this.serviciosWebSistema.ObtenerTokenKey(datos.key, usuarioid).subscribe((translated) => { resolve(translated); }));
         sessionStorage.setItem('tokenKey', datos2.acceso);
      }
   }

   async CerrarSessionToken(idUsuario: any) {
      const datos = await new Promise<any>((resolve) => this.serviciosWebSistema.CerrarSessionToken(sessionStorage.getItem('key'), idUsuario).subscribe((translated) => { resolve(translated); }));
   }

   getRoles = (params: string) => {
      if (params != '') {
         this.ruta.navigate(['/template']);
      } else {
         this.ruta.navigate(['/unauthorized']);
      }
   };

   async ListadoPerfiles(strCedula: string, idUsuario: string, objPersona: any) {
      const datos = await new Promise<any>((resolve) => this.serviciosWebSistema.ListadoRolesUsuario(1002).subscribe((translated) => { resolve(translated); }));
      console.log(datos);
      /*if (datos.success) {
         if (datos.listado.length > 0) {
            var token = {
               perfiles: datos.listado,
               strCedula: strCedula,
               idUsuario: idUsuario,
               idRolSeccionado: datos.listado[0].rol_id || 3,
               strNombreRolSeccionado: datos.listado[0].rol_nombre || 'Aspirante',
               strCorreo: datos.listado[0].per_email || objPersona.per_email,
               strUserNombres: datos.listado[0].per_nombres + ' ' + datos.listado[0].per_apellidos || objPersona.per_nombres + ' ' + objPersona.per_apellidos,
               strFechaNacimiento: objPersona.per_fechaNacimiento == null ? "2022-10-10" : objPersona.per_fechaNacimiento.replace('T05:00:00.000Z', ''),
            };
            const Token2 = await new Promise<any>((resolve) => this.serviciosWebSistema.TokenJsonJava(token).subscribe((translated) => { resolve(translated); }));
            if (!Token2 || !Token2.success) {
               this.ruta.navigate(['/public/sinacceso']);
               return;
            }
            sessionStorage.setItem('tokenUsuario', Token2.palabra);
            sessionStorage.setItem('clientName', 'Centralizada');
            this.redirect(datos.listado[0].rol_id);
         }
      } else {
         this.ruta.navigate(['/public/sinacceso']);
      }*/
   }

   redirect(rol: number) {
     console.log(rol);

     if(rol==6){
      this.ruta.navigate(['/template/seguridad/principalseguridad']);
     }
      /*switch (rol) {
         case 6: //root (superadmin)
            this.ruta.navigate(['/template/seguridad/principalseguridad']);
            break;
         case ROLES.ADMIN: //admin
            this.ruta.navigate(['/template/seguridad/principalseguridad']);
            break;
         case ROLES.ASPIRANTE: //aspirante
            this.ruta.navigate(['/template/postulante/histotialInscripciones']);
            break;
         case ROLES.COORDINADOR: //coordinador
            this.ruta.navigate(['/template/configuracion/configPrincipal']);
            break;
         case ROLES.DIRECTOR: //director
            this.ruta.navigate(['/template/certificado/certificados'])
            break;
        /* default:
            this.ruta.navigate(["/public/sinacceso"]);
            break;
      }*/
   }

   //Verificar Version Actulizacion
   VerificacionActualizacionVersion() {
      this.config = require('./../../../assets/config.json');
      const headers = new HttpHeaders()
         .set('Cache-Control', 'no-cache')
         .set('Pragma', 'no-cache');
      this.httpClient.get<{ version: string }>("/assets/config.json", { headers }).subscribe(config => {
         var versionWeb = config.version
         // console.log(versionWeb)
         if (config.version != this.config.version) {
            console.log('Actualizacion de Version')
            location.reload;
         } else {
            // console.log('No Actualizacion de Version')
         }
      });
   }

}
