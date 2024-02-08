import { Component } from '@angular/core';
import { ICentral } from '../clases/cCentral/i-central';
import { SCentralService } from '../clases/cCentral/s-central.service';

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

   txtcedula!:string;
   txtnombres!:string;
   txtapellido1!:string;
   txtapellido2!:string;
   txtcorreo!:string;


   public lstUsuarios:any[]=[]// persona[] = [];
   usuario!: ICentral[];
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

   constructor(
    private DbCentral:SCentralService

   ){ }

   async abrirModalUsuario() {
    this.tipoDependencia = {};
    this.usuario = [];
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

 buscarUsuario(){
  this.DbCentral.getDatos(this.txtcedula).subscribe(
    listado=>{
      this.usuario=listado
      console.log(listado.listado[0].per_nombres)
      this.txtnombres=listado.listado[0].per_nombres
      this.txtapellido1=listado.listado[0].per_primerApellido
      this.txtcorreo=listado.listado[0].per_email
    }
    
  );
  
 }

}
