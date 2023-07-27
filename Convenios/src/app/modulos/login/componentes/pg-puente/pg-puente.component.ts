import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CasClientService } from 'src/app/herramientas/cas/cas-client.service';
import { ServiciosWebSistema } from '../../../../services/moduloiniciosesion.service';
import { SessionUsuarioService } from 'src/app/herramientas/cas/session-usuario.service';

@Component({
   selector: 'app-pg-puente',
   templateUrl: './pg-puente.component.html',
   styleUrls: ['./pg-puente.component.css']
})
export class PgPuenteComponent implements OnInit {
   private idUsuario: any = 0;
   private strCedula: any = "";

   isProcess: boolean = true;

   constructor(
      private casclient: CasClientService,
      private ruta: Router,
      private serviciosWebSistema: ServiciosWebSistema,
      private wsSession: SessionUsuarioService,
   ) { }

   async ngOnInit() {
      if (!this.casclient.getLogin()) {
         console.log('Estoy sin Login');
         this.casclient.saveTicket();
         await this.casclient.verificaLogin().then();
      }
      if (this.casclient.isAuthenticated() && this.casclient.getLogin()) {
         console.log('Estoy con Login');
         await this.InicioSession();
      }
   }

   async InicioSession() {
      this.idUsuario = sessionStorage.getItem('perId');
      this.strCedula = sessionStorage.getItem('cedula');
      await this.obtenerTokenKey(this.idUsuario);
      await this.ListadoPerfiles();
   }

   async obtenerTokenKey(usuarioid: any) {
      const datosKey = await new Promise<any>((resolve) => this.serviciosWebSistema.ObtenerKey(usuarioid).subscribe((translated) => { resolve(translated); }));
      sessionStorage.setItem('key', datosKey.key);
      const datosTokenServicios = await new Promise<any>((resolve) => this.serviciosWebSistema.ObtenerTokenKey(datosKey.key, usuarioid).subscribe((translated) => { resolve(translated); }));
      sessionStorage.setItem('tokenKey', datosTokenServicios.acceso);
   }

   async CerrarSessionToken(idUsuario: any) {
      const datos = await new Promise<any>((resolve) =>
         this.serviciosWebSistema
            .CerrarSessionToken(sessionStorage.getItem('key'), idUsuario)
            .subscribe((translated) => {
               resolve(translated);
            })
      );
   }

   getRoles = (params: string) => {
      if (params != '') {
         this.ruta.navigate(['/template'])
      } else {
         this.ruta.navigate(['/unauthorized']);
      }
   };

   async ListadoPerfiles() {
      const datos = await new Promise<any>((resolve) => this.serviciosWebSistema.ListadoRolesUsuario(this.strCedula).subscribe((translated) => { resolve(translated); }));
        if (datos.success) {
         if (datos.listado.length > 0) {
            var token = {
               perfiles: datos.listado,
               strCedula: this.strCedula,
               idUsuario: this.idUsuario,
               idRolSeccionado: datos.listado[0].rol_id,
               strNombreRolSeccionado: datos.listado[0].rol_nombre,
               strCorreo: datos.listado[0].per_email,
               strUserNombres: datos.listado[0].per_nombres + ' ' + datos.listado[0].per_apellidos,
                    }
            const Token2 = await new Promise<any>((resolve) => this.serviciosWebSistema.TokenJsonJava(token).subscribe((translated) => { resolve(translated); }));
            //TODO: Ojo refactorizado con constantes globales.
            if (!Token2 || !Token2.success) {
               this.ruta.navigate(['/public/sinacceso']);
               return;
            }
            sessionStorage.setItem('tokenUsuario', Token2.palabra);
            sessionStorage.setItem('clientName', 'Centralizada');
            this.wsSession.redirect(datos.listado[0].rol_id);
         }
      } else {
         this.ruta.navigate(['/public/sinacceso'])
      }
   }

}


