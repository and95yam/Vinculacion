import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng-lts/api';

import { Sesion } from '../../../../shared/interfaces/Seguridad';
import { ColoresService } from 'src/app/herramientas/colors/color';
import { CasClientService } from 'src/app/herramientas/cas/cas-client.service';
import { SessionUsuarioService } from 'src/app/herramientas/cas/session-usuario.service';
import { ServiciosWebSistema } from './../../../../services/moduloiniciosesion.service';

@Component({
   selector: 'app-pg-header',
   templateUrl: './pg-header.component.html',
   styleUrls: ['./pg-header.component.css'],
})
export class PgHeaderComponent implements OnInit {
   @Output() onChangeSession: EventEmitter<Sesion> = new EventEmitter();

   items: MenuItem[] = [];
   ltsPerfiles: Array<any> = [];
   strDatosSession: any = {};
   public idRol: number = 0;

   constructor(
      private ruta: Router,
      private casclient: CasClientService,
      private session: SessionUsuarioService,
      private serviciosWebSistema: ServiciosWebSistema,
   ) { }

   async ngOnInit() {
      this.renderRoles();
   }

   async renderRoles() {
      this.strDatosSession = await this.session.ObtenerDatosSesion();
      this.ltsPerfiles = this.strDatosSession.perfiles;
      let index = this.ltsPerfiles.find(
         (item) => item.rol_id === this.strDatosSession.idRolSeccionado
      );

      this.items = [
         {
            label: index ? index.rol_nombre : '',
            icon: 'pi pi-user',
         },
         {
            label: 'ROLES',
            icon: 'pi pi-id-card',
            items: [],
         },
         {
            label: index.per_nombres || '',
            icon: 'pi pi-user',
            items: [
               {
                  label: 'cerrar sesión',
                  icon: 'pi pi-fw pi-user',
                  command: (event) => {
                     this.casclient.Logout();
                  },
               },
            ],
         },
      ];

      this.ltsPerfiles.map((item) => {
         this.items[1].items?.push({
            label: item.rol_nombre,

            icon: 'pi pi-fw pi-user',
            command: (event) => {
               this.CambiarSession(
                  item.rol_id,
                  item.rol_nombre,
                  item.per_email,
                  item.per_nombres + ' ' + item.per_apellidos
               );
            },
         });
      });
   }

   async CambiarSession(idRolSelec: any, strNombreRol: any, strCorreo: any, strNombreUsuario: any) {
      var token = {
         perfiles: this.strDatosSession.perfiles,
         strCedula: this.strDatosSession.strCedula,
         idUsuario: this.strDatosSession.idUsuario,
         idRolSeccionado: idRolSelec,
         strNombreRolSeccionado: strNombreRol,
         strCorreo: strCorreo,
         strUserNombres: strNombreUsuario,
         strFechaNacimiento: this.strDatosSession.strFechaNacimiento,
         idPeriodoVigente: this.strDatosSession.idPeriodoVigente,
         strPeriodoVigente: this.strDatosSession.strPeriodoVigente,
         strNomenclatura: this.strDatosSession.strNomenclatura,
         idReglamento: this.strDatosSession.idReglamento,
      };
      const Token2 = await new Promise<any>((resolve) =>
         this.serviciosWebSistema.TokenJsonJava(token).subscribe((translated) => {
            resolve(translated);
         })
      );
      sessionStorage.setItem('tokenUsuario', Token2.palabra);

      this.renderRoles();

      this.idRol = idRolSelec;
      if (!Token2.success) return;
      switch (Number(idRolSelec)) {
         case 1:
            await this.ruta.navigate(['/template/seguridad/principalseguridad']);
            break;
         case 2:
            await this.ruta.navigate(['/template/seguridad/principalseguridad']);
            break;
         case 3:
            await this.ruta.navigate(['/template/postulante/histotialInscripciones']);
            break;
         case 4:
            await this.ruta.navigate(['/template/postulante/principalinscripcion/perfil']);
            break;
         case 5:
            await this.ruta.navigate(['/template/seguridad/principalseguridad']);
            break;
         case 6:
            await this.ruta.navigate(['/template/configuracion/configPrincipal']);
            break;
         case 16:
            await this.ruta.navigate(['/template/certificado/certificados']);
            break;
      }

      this.onChangeSession.emit(token);
   }

}