import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { auditoria, servicioG } from '../../modelos/generales';
import { swRolService } from 'src/app/serviciosweb/modulo-seguridad/sw-rol.service';
import { SessionUsuarioService } from 'src/app/herramientas/cas/session-usuario.service';
import { MensajesModuloSeguridad } from 'src/app/herramientas/Mensajes/MensajesModuloSeguridad.component';

@Component({
   selector: 'app-pg-roles',
   templateUrl: './pg-roles.component.html',
   styleUrls: ['./pg-roles.component.css'],
   providers: [MessageService, ConfirmationService]
})
export class PgRolesComponent implements OnInit {

   estados: any[] = [];
   listaRoles: any[] = [];
   modalRoles: boolean = false;
   txtCodigo: number = 0;
   txtNombre: string = "";
   tituloModal: string = "";
   txtDescripcion: string = "";
   loading: boolean = true;
   user: string = "";
   txtEstado: string = "";
   strDatosSession: any = {};
   rolnombre: string = "";

   constructor(
      private session: SessionUsuarioService,
      private messageService: MessageService,
      private swRol: swRolService,
      private mensajesg: MensajesModuloSeguridad
   ) { }

   async ngOnInit() {
      this.strDatosSession = await this.session.ObtenerDatosSesion();
      this.user = this.strDatosSession.perfiles[0].per_id;
      this.rolnombre = this.strDatosSession.perfiles[0].strNombreRolSeccionado;
      this.estados = [
         { label: 'Activo', value: 1 },
         { label: 'Inactivo', value: 2 }
      ];
     // this.listarRoles();
   }

   async listarRoles() {
      const valores = { estado: 0 };
      const datos = await new Promise<any>((resolve) => this.swRol.ListarRoles(valores).subscribe((translated: any) => { resolve(translated) }));
      if (datos.success) {
         this.listaRoles = datos.listado;
      } else {
         this.listaRoles = [];
      }
      this.loading = false;
   }

   nuevoRol() {
      this.modalRoles = true;
      this.txtCodigo = 0;
      this.txtNombre = "";
      this.txtDescripcion = "";
      this.txtEstado = "";
      this.tituloModal = "Ingresar Rol";
   }

   async guardarRol() {
      var roles: any = [];
      roles.push({ "nombre": this.txtNombre, "descripcion": this.txtDescripcion, "estado": this.txtEstado });
      if (this.txtDescripcion == "" || this.txtNombre == "") {
         this.messageService.add({ severity: 'error', summary: this.mensajesg.CabeceraError, detail: this.mensajesg.CamposVacios });
      } else if (this.txtCodigo == 0) {
         const auditoria: auditoria = {
            codigous: this.user,
            clase: 'Roles',
            proceso: this.txtDescripcion,
            descripcion: 'Se insertó el rol ' + this.txtNombre + ' desde el rol de ' + this.rolnombre
         }
         const datos: servicioG = {
            opcionBus: 5,
            opcion: 2,
            buscar: this.txtNombre,
            estado: "1",
            auditoria: auditoria,
            listado: roles
         }
         const valores = await new Promise<any>((resolve) => this.swRol.InsertarRol(datos).subscribe((translated: any) => { resolve(translated) }));
         if (valores.success) {
            this.messageService.add({ severity: 'success', summary: this.mensajesg.CabeceraExitoso, detail: this.mensajesg.IngresadoCorrectamente });
            this.listarRoles();
            this.modalRoles = false;
         } else {
            this.messageService.add({ severity: 'error', summary: this.mensajesg.CabeceraError, detail: valores.msj });
         }
      } else {
         const auditoria: auditoria = {
            codigous: this.user,
            clase: 'Roles',
            proceso: this.txtDescripcion,
            descripcion: 'Se modificó el rol ' + this.txtNombre + ' desde el rol de ' + this.rolnombre
         }
         const datos: servicioG = {
            opcionBus: 5,
            opcion: 2,
            buscar: this.txtNombre,
            estado: this.txtEstado,
            auditoria: auditoria,
            listado: roles
         }
         const valores = await new Promise<any>((resolve) => this.swRol.ModificarRol(datos, this.txtCodigo).subscribe((translated: any) => { resolve(translated) }));
         if (valores.success) {
            this.messageService.add({ severity: 'success', summary: this.mensajesg.CabeceraExitoso, detail: this.mensajesg.ModificadoCorrectamente });
            this.listarRoles();
            this.modalRoles = false;
         } else {
            this.messageService.add({ severity: 'error', summary: this.mensajesg.CabeceraError, detail: valores.msj });
         }
      }
   }

   editarRol(rol: any) {
      this.tituloModal = "Modificar Rol";
      this.txtCodigo = rol.rol_id;
      this.txtNombre = rol.rol_nombre;
      this.txtDescripcion = rol.rol_descripcion;
      this.txtEstado = rol.rol_estado;
      this.modalRoles = true;
   }

}
