import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-usuario',
  templateUrl: './ng-usuario.component.html',
  styleUrls: ['./ng-usuario.component.css']
})
export class NgUsuarioComponent {
  

   public loading: boolean = false;
   public dependencia: any = 0;
   usuarioDialog: boolean = false;
   perfilesDialog: boolean = false;
   submitted: boolean = false;
   disabled: boolean = true;

   public lstUsuarios:any[]=[]// persona[] = [];
   usuario:any={}// persona = {};
   usuarioSeleccionado:any={}// persona = {};
   usuarioguardar: any = {};

   //persona rol
   usuariosrol:any[]=[]// personarol[] = [];
   usuariorol:any={}// personarol = {};
   usuariorolSeleccionado:any={}// personarol = {};
   usuariorolguardar: any = {};

   //roles
   roles:any[]=[]// roles[] = [];
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
    //this.listarRoles();
    this.usuarioDialog = true;

 }

}
