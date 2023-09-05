import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng-lts/api';
import { MensajesModuloSeguridad } from 'src/app/herramientas/Mensajes/MensajesModuloSeguridad.component';
import { SwAsignacionRolService } from 'src/app/serviciosweb/modulo-seguridad/sw-asignacion-rol.service';
import { swRolService } from 'src/app/serviciosweb/modulo-seguridad/sw-rol.service';
import { auditoria } from '../../modelos/generales';

@Component({
  selector: 'app-pg-asignacion-opciones',
  templateUrl: './pg-asignacion-opciones.component.html',
  styleUrls: ['./pg-asignacion-opciones.component.css']
})
export class PgAsignacionOpcionesComponent implements OnInit {

  estados: any[] = [];
  listaOpcion: any[] = [];
  modalOpcion: boolean = false;
  tituloModal: string = "";
  loading: boolean = true;
  user: string = "";
  rolnombre: string = "";
  strDatosSession: any = {};
  listaopcionesmenu: any[] = [];
  listaopcioneshijos: any = [];
  listaopcionespadre: any = [];
  txtRol: string = "";
  txtOpPadre: string = "";
  txtOpHijo: string = "";
  txtRolA: string = "";
  txtOpPadreA: string = "";
  txtOpHijoA: string = "";
  txtInsertar: boolean = false;
  txtModificar: boolean = false;
  txtEliminar: boolean = false;
  txtEstado: number = 1;
  txtOrden: string = "";
  listaroles: any = [];
  txtCodigo: number = 0;
  tipo: number = 0;
  topcion: number = 3;
  constructor(
    private swAsignacionRolR: SwAsignacionRolService,
    private swRol: swRolService,
    private messageService: MessageService,
    private mensajesg: MensajesModuloSeguridad,
    
    private confirmationService: ConfirmationService,) { }

  ngOnInit(): void {
    this.listarAsignacionRol();
  }

  
  nuevoOpcion() {
    this.modalOpcion = true;
    this.txtRol = "";
    this.txtRolA = "";
    this.txtInsertar = false;
    this.txtModificar = false;
    this.txtEliminar = false;
    this.txtOpHijo = "1";
    this.txtOpPadre = "";
    this.txtOpHijoA = "";
    this.txtOpPadreA = "";
    this.txtEstado = 1;
    this.txtCodigo = 0;
    this.tipo = 0;
    this.topcion = 3;
    this.tituloModal = "Asignación de Roles";
    this.listarOpcionPadres();
    //this.listarOpcionHijos();
    this.listarRoles();
 }

 async listarRoles() {
  const datos = await new Promise<any>((resolve) => this.swRol.ListarRoles(1).subscribe((translated: any) => { resolve(translated) }));
  if (datos.success) {
     this.listaroles = datos.listado;
  } else {
     this.listaroles = [];
  }
 }

 async listarOpcionPadres() {
  const datos = await new Promise<any>((resolve) => this.swRol.ListarRoles(1).subscribe((translated: any) => { resolve(translated) }));
  if (datos.success) {
     this.listaroles = datos.listado;
  } else {
     this.listaroles = [];
  }
 }
  editarOpcion(opc:any){
    this.tituloModal = "Modificar Asignación de Rol - Opción";
      this.txtCodigo = 1;
      if (opc.rolop_insertar == 1) {
         this.txtInsertar = true;
      } else {
         this.txtInsertar = false;
      }
      if (opc.rolop_modificar == 1) {
         this.txtModificar = true;
      } else {
         this.txtModificar = false;
      }
      if (opc.rolop_eliminar == 1) {
         this.txtEliminar = true;
      } else {
         this.txtEliminar = false;
      }
      this.tipo = 1;
      this.topcion = 4;
      this.txtOrden = opc.rolop_orden;
      this.txtEstado = opc.rolop_estado;
      this.txtRol = opc.rol_id;
      this.txtOpPadre = opc.idpadre;
      this.txtOpHijo = opc.opc_id;
      this.txtRolA = opc.rol_id;
      this.txtOpPadreA = opc.idpadre;
      this.txtOpHijoA = opc.opc_id;
      this.modalOpcion = true;
      this.listarOpcionPadres();
      //this.listarOpcionHijos();
      this.listarRoles();
  }

  async guardarPadreOp() {
    var lis = [];
    if (this.txtOpPadre == "" || this.txtOpHijo == "" || this.txtRol == "" || this.txtOrden == "") {
       this.messageService.add({ severity: 'error', summary: this.mensajesg.CabeceraError, detail: this.mensajesg.CamposVacios });
    } else {
       var auditoria: auditoria;
       if (this.txtCodigo == 0) {
          auditoria = {
             codigous: this.user,
             clase: 'rolopcion',
             proceso: 'rolopcion',
             descripcion: 'Se insertó la opción ' + this.txtOpHijo + ' en el encabezado ' + this.txtOpPadre + ' y en el rol ' + this.txtRol
          }
       } else {
          auditoria = {
             codigous: this.user,
             clase: 'rolopcion',
             proceso: 'rolopcion',
             descripcion: 'Se modificó la opción ' + this.txtOpHijoA + ' en el encabezado ' + this.txtOpPadreA + ' y en el rol ' + this.txtRolA + ' a la opción ' + this.txtOpHijo + ' en el encabezado ' + this.txtOpPadre + ' y en al rol ' + this.txtRol
          }
       }
       var ins, up, del;
       if (this.txtInsertar) {
          ins = 1;
       } else {
          ins = 0;
       }

       if (this.txtModificar) {
          up = 1;
       } else {
          up = 0;
       }

       if (this.txtEliminar) {
          del = 1;
       } else {
          del = 0;
       }

       const listado = {
          rolId: this.txtRolA,
          rolIdNew: this.txtRol,
          opcIdPadre: this.txtOpPadreA,
          opcIdPadreNew: this.txtOpPadre,
          opcId: this.txtOpHijoA,
          opcIdNew: this.txtOpHijo,
          estado: this.txtEstado,
          insertar: ins,
          modificar: up,
          eliminar: del,
          orden: this.txtOrden
       }
       lis.push(listado);
       const opcion = {
          opcion: 1,
          auditoria: auditoria,
          listado: lis
       }
       const datos = await new Promise<any>((resolve) => this.swAsignacionRolR.IngresarAsignacionRol(opcion).subscribe((translated: any) => { resolve(translated) }));
       if (datos.success) {
          this.messageService.add({ severity: 'success', summary: this.mensajesg.CabeceraExitoso, detail: this.mensajesg.IngresadoCorrectamente });
          this.listarAsignacionRol();
          this.modalOpcion = false;
       } else {
          this.messageService.add({ severity: 'error', summary: this.mensajesg.CabeceraError, detail: datos.msj });
       }
    }
 }

  async listarAsignacionRol() {
    const opcion=1;
    const datos = await new Promise<any>((resolve) => this.swAsignacionRolR.ListarAsignacionRolReg(opcion).subscribe((translated: any) => { resolve(translated) }));
    if (datos.success) {
       this.listaopcionesmenu = datos.listado;
    } else {
       this.listaopcionesmenu = [];
    }
    this.loading=false;
 }


}
