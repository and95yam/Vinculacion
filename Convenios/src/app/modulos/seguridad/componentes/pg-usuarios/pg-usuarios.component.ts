import { Component, OnInit } from '@angular/core';
import { ConfirmEventType, ConfirmationService, PrimeNGConfig, MessageService } from 'primeng/api';

import { roles } from '../../modelos/roles';
import { persona } from '../../modelos/persona';
import { personarol } from '../../modelos/personarol';
import { swRolService } from 'src/app/serviciosweb/modulo-seguridad/sw-rol.service';
import { swUsuarioService } from 'src/app/serviciosweb/modulo-seguridad/sw-usuario.service';
import { MensajesModuloSeguridad } from 'src/app/herramientas/Mensajes/MensajesModuloSeguridad.component';

@Component({
   selector: 'app-pg-usuarios',
   templateUrl: './pg-usuarios.component.html',
   styleUrls: ['./pg-usuarios.component.css'],
   providers: [MessageService, ConfirmationService]
})
export class PgUsuariosComponent implements OnInit {
   public loading: boolean = false;
   public dependencia: any = 0;
   usuarioDialog: boolean = false;
   perfilesDialog: boolean = false;
   submitted: boolean = false;
   disabled: boolean = true;

   public lstUsuarios: persona[] = [];
   usuario: persona = {};
   usuarioSeleccionado: persona = {};
   usuarioguardar: any = {};

   //persona rol
   usuariosrol: personarol[] = [];
   usuariorol: personarol = {};
   usuariorolSeleccionado: personarol = {};
   usuariorolguardar: any = {};

   //roles
   roles: roles[] = [];
   rol: any = {};
   estado: any = "2";
   activarroles: any = false;

   //dependencias
   lstTipoDependencia: Array<any> = [];
   tipoDependencia: any = {}

   lstSedes: Array<any> = [];
   lstFacultades: Array<any> = [];
   lstCarreras: Array<any> = [];
   lstDependencias: Array<any> = [];
   objSede: any = {}
   objFacultad: any = {}
   objCarrera: any = {}
   objDependencia: any = {};

   //LISTA DE ACTIVO
   lstEstado: Array<any> = [];
   objEstado: any = {}

   constructor(
      private primengConfig: PrimeNGConfig,
      private swRol: swRolService,
      private swUsuario: swUsuarioService,
      private messageService: MessageService,
      private confirmationService: ConfirmationService,
      private mensajesg: MensajesModuloSeguridad
   ) { }

   ngOnInit(): void {
      this.primengConfig.ripple = true;
      this.listarUsuario();
      this.lstTipoDependencia = [{ id: '1', des: 'ACADÉMICO' }, { id: '2', des: 'ADMINSTRATIVO' }]
      this.lstEstado = [{ label: 'Activo', value: '1' }, { label: 'Inactivo', value: '2' }];
   }

   //ACCIONES USUARIO
   async abrirModalUsuario() {
      this.tipoDependencia = {};
      this.usuario = {};
      this.usuariorol = {};
      this.rol = {};
      this.submitted = false;

      this.lstSedes = [];
      this.lstFacultades = [];
      this.lstCarreras = [];
      this.lstDependencias = [];
      this.objSede = {};
      this.objCarrera = {};
      this.objFacultad = {};
      this.objDependencia = {};
      this.listarRoles();
      this.usuarioDialog = true;

   }

   hideDialog() {
      this.usuarioDialog = false;
      this.perfilesDialog = false;
      this.submitted = false;
   }

   async buscarUsuario() {
      const datos = await new Promise<any>((resolve) => this.swUsuario.BuscarUsuario(this.usuario.per_cedula).subscribe((translated: any) => { resolve(translated) }));
      if (datos.success) {
         if (datos.listado.length) {
            this.usuario.per_id = datos.listado[0].per_id;
            this.usuario.per_cedula = datos.listado[0].pid_valor;
            this.usuario.per_nombres = datos.listado[0].per_nombres;
            this.usuario.per_apellidos = datos.listado[0].per_primerApellido + " " + datos.listado[0].per_segundoApellido;
            this.usuario.per_email = datos.listado[0].per_email;
         }
      } else {
         this.messageService.add({ severity: 'error', summary: this.mensajesg.CabeceraError, detail: datos.msj });
      }
   }

   guardarUsuario() {
      this.usuarioguardar = {};
      if (this.tipoDependencia.id == 1) {
         this.dependencia = this.objCarrera.carid;
      }
      if (this.tipoDependencia.id == 2) {
         this.dependencia = this.objDependencia.depId;
      }
      this.usuarioguardar = {
         "opcion": "1",
         "auditoria": {
            "codigous": this.usuario.per_id,
            "clase": "persona",
            "proceso": "InsertarPersona",
            "descripcion": "Se insertó el usuario " + this.usuario.per_id
         },
         "listado": [
            {
               "per_id": this.usuario.per_id,
               "per_nombres": this.usuario.per_nombres,
               "per_apellidos": this.usuario.per_apellidos,
               "per_email": this.usuario.per_email,
               "per_cedula": this.usuario.per_cedula,
               "per_estado": "1",
               "rol_id": this.rol.rol_id,
               "prol_dependencia": this.dependencia,
               "tipo": this.tipoDependencia.id

            }
         ]
      }
      console.log(this.usuarioguardar);
      this.fnGuardarUsuario(this.usuarioguardar);
   }

   editarUsuario(usuario: any) {
      this.perfilesDialog = true;
      this.usuario = {};
      this.usuario = usuario;
      this.activarroles = false;
      this.listarRolesPersona();
   }

   eliminarUsuario(usuario: any) {
      this.usuario = {};
      this.usuarioguardar = {};
      this.usuario = usuario;
      this.usuarioguardar = {
         "opcion": "1",
         "tipo": "1",
         "auditoria": {
            "codigous": this.usuario.per_id,
            "clase": "persona",
            "proceso": "ActualizarPersona",
            "descripcion": "Se actualizó el usuario " + this.usuario.per_id
         },
         "listado": [
            {
               "per_id": this.usuario.per_id,
               "per_estado": "2",
               "rol_id": "1"
            }
         ]
      }
      this.confirmeliminarUsuario();
   }

   confirmeliminarUsuario() {
      this.confirmationService.confirm({
         message: '¿Esta seguro/a de desactivar el usuario ' + this.usuario.per_nombres + ' ' + this.usuario.per_apellidos + '?',
         header: 'Confirmación',
         icon: 'pi pi-exclamation-triangle',
         accept: () => {
            this.fnDesactivarUsuario(this.usuarioguardar);
         },
         acceptLabel: 'Si, estoy seguro/a',
         reject: (type: any) => {
            switch (type) {
               case ConfirmEventType.REJECT:
                  this.messageService.add({ severity: 'error', summary: 'Rechazada', detail: 'Ha sido rechazada la acción' });
                  break;
               case ConfirmEventType.CANCEL:
                  this.messageService.add({ severity: 'warn', summary: 'Cancelada', detail: 'Ha sido cancelada la acción' });
                  break;
            }
         }
      });
   }

   async listarUsuario() {
      const opcion=3;
      const activo=3;
      const datos = await new Promise<any>((resolve) => this.swUsuario.ListarUsuarios(opcion,activo).subscribe((translated: any) => { resolve(translated) }));
      if (datos.success) {
         this.lstUsuarios = datos.listado;
      } else {
         this.lstUsuarios = [];
      }
   }

   async fnGuardarUsuario(usuario: any) {
      const datos = await new Promise<any>((resolve) => this.swUsuario.UsuarioCrud(usuario).subscribe((translated: any) => { resolve(translated) }));
      if (datos.success) {
         this.listarUsuario();
         if(usuario.opcion==2)
         {
            this.listarRolesPersona();
         }
      
         this.hideDialog();
         this.messageService.add({ severity: 'success', summary: this.mensajesg.CabeceraExitoso, detail: this.mensajesg.IngresadoCorrectamente });
      } else {
         this.messageService.add({ severity: 'error', summary: this.mensajesg.CabeceraError, detail: datos.msj });
      }
   }

   async fnGuardarUsuarioRol(usuario: any) {
      const datos = await new Promise<any>((resolve) => this.swUsuario.UsuarioModCrud(usuario).subscribe((translated: any) => { resolve(translated) }));
      if (datos.success) {
         this.listarRolesPersona();
         this.activarroles = false;
         this.messageService.add({ severity: 'success', summary: this.mensajesg.CabeceraExitoso, detail: datos.msj });
      } else {
         this.messageService.add({ severity: 'error', summary: this.mensajesg.CabeceraError, detail: datos.msj });
      }
   }

   async fnDesactivarUsuario(usuario: any) {
      const datos = await new Promise<any>((resolve) => this.swUsuario.UsuarioModCrud(usuario).subscribe((translated: any) => { resolve(translated) }));
      if (datos.success) {
         this.listarUsuario();
         this.messageService.add({ severity: 'success', summary: this.mensajesg.EliminadoCorrectamente, detail: this.mensajesg.IngresadoCorrectamente });
      } else {
         this.messageService.add({ severity: 'error', summary: this.mensajesg.CabeceraError, detail: datos.msj });
      }
   }

   //ACCIONES ROLES
   async listarRoles() {
      const valor = 1;
      const datos = await new Promise<any>((resolve) => this.swRol.ListarRoles(valor).subscribe((translated: any) => { resolve(translated) }));
      if (datos.success) {
         this.roles = datos.listado;
      } else {
         this.roles = [];
      }
      console.log(this.roles);
   }

   async listarRolesPersona() {
      const opcion=4;
      const datos = await new Promise<any>((resolve) => this.swUsuario.ListarPerfilesUsuario(opcion,this.usuario.per_cedula).subscribe((translated: any) => { resolve(translated) }));
      if (datos.success) {
         this.usuariosrol = datos.listado;
      } else {
         this.usuariosrol = [];
      }
   }

   eliminarRol(usuariorol: any) {
      this.usuariorolguardar = {};
      this.usuariorol = usuariorol;
      this.usuariorolguardar = {
         "opcion": "1",
         "tipo":"2",
         "auditoria": {
            "codigous": this.usuario.per_id,
            "clase": "personarol",
            "proceso": "personarol",
            "descripcion": "se insertó el personarol " + this.usuario.per_id
         },
         "listado": [
            {

               "per_id": this.usuario.per_id,
               "rol_id": this.usuariorol.rol_id,
               "per_estado": "2"
               
            }
         ]
      }
      this.fnGuardarUsuarioRol(this.usuariorolguardar);
   }

   activarRol(usuariorol: any) {
      this.usuariorolguardar = {};
      this.usuariorol = usuariorol;
      this.usuariorolguardar = {
         "opcion": "1",
         "tipo": "2",
         "auditoria": {
            "codigous": this.usuario.per_id,
            "clase": "personarol",
            "proceso": "personarol",
            "descripcion": "se insertó el personarol " + this.usuario.per_id
         },
         "listado": [
            {
               "per_id": this.usuario.per_id,
               "rol_id": this.usuariorol.rol_id,
               "per_estado": "1"
               
            }
         ]
      }
      this.fnGuardarUsuarioRol(this.usuariorolguardar);
   }

   guardarRol() {
      this.usuariorol = {};
      if (this.tipoDependencia.id == 1) {
         this.dependencia = this.objCarrera.carid;
      }
      if (this.tipoDependencia.id == 2) {
         this.dependencia = this.objDependencia.depId;
      }
      this.usuariorolguardar = {
         "opcion": "2",
         "auditoria": {
            "codigous": this.usuario.per_id,
            "clase": "personarol",
            "proceso": "personarol",
            "descripcion": "se insertó el personarol " + this.usuario.per_id
         },
         "listado": [
            {
               "per_id": this.usuario.per_id,
               "rol_id": this.rol.rol_id,
               "per_estado": "1",
               "prol_dependencia": this.dependencia,
               "tipo": this.tipoDependencia.id
            }
         ]
      }
      this.fnGuardarUsuario(this.usuariorolguardar);
   }

   cerrarRol() {
      this.activarroles = false;
   }

   abrirRoles() {
      this.tipoDependencia = {};
      this.usuariorol = {};
      this.rol = {};
      this.lstSedes = [];
      this.lstFacultades = [];
      this.lstCarreras = [];
      this.lstDependencias = [];
      this.objSede = {};
      this.objCarrera = {};
      this.objFacultad = {};
      this.activarroles = true;
      this.objDependencia = {};
      this.listarRoles();
   }

   async ListarSedes() {
      const datos = await new Promise<any>((resolve) => this.swUsuario.ListadoDependencias(1, 1).subscribe((translated: any) => { resolve(translated) }));
      if (datos.success) {
         this.lstSedes = datos.listado;
      } else {
         this.lstSedes = [];
      }
   }

   async ListarFacultades(newValue: any) {
      const datos = await new Promise<any>((resolve) => this.swUsuario.ListadoDependencias(4 + "-" + this.objSede.sedid, 1).subscribe((translated: any) => { resolve(translated) }));
      if (datos.success) {
         this.lstFacultades = datos.listado;
      } else {
         this.lstFacultades = [];
      }
   }
   async ListarCarreras(newValue: any) {
      const datos = await new Promise<any>((resolve) => this.swUsuario.ListadoDependencias(5 + "-" + this.objSede.sedid + "-" + this.objFacultad.facid, 1).subscribe((translated: any) => { resolve(translated) }));
      if (datos.success) {
         this.lstCarreras = datos.listado;
      } else {
         this.lstCarreras = [];
      }
   }

   async ListarDependencias() {
      const datos = await new Promise<any>((resolve) => this.swUsuario.ListadoDependenciasAdministrativos().subscribe((translated: any) => { resolve(translated) }));
      if (datos.success) {
         this.lstDependencias = datos.listado[0];
      } else {
         this.lstDependencias = [];
      }
   }

   async ListarDependenciasTipo() {
      if (this.tipoDependencia.id == 1) {
         await this.ListarSedes();
      }
      if (this.tipoDependencia.id == 2) {
         await this.ListarDependencias();
      }
   }

}
