import { Component } from '@angular/core';
import { ICentral } from '../clases/cCentral/i-central';
import { IUsuario,GUsuario,MUsuario } from '../clases/cUsuario/iusuario';
import { GPerfil,IPerfil } from '../clases/cPerfil/i-perfil';
import { IRol } from '../clases/cRol/i-rol';
import { SCentralService } from '../clases/cCentral/s-central.service';
import { SUsuarioService } from '../clases/cUsuario/s-usuario.service';
import { SPerfilService } from '../clases/cPerfil/s-perfil.service';
import { SRolService } from '../clases/cRol/s-rol.service';

import {MessageService} from 'primeng/api';
import { MensajesConvenios} from 'src/herramientas/Mensajes/MensajesConvenios';


@Component({
  selector: 'app-ng-usuario',
  templateUrl: './ng-usuario.component.html',
  styleUrls: ['./ng-usuario.component.css'],
  providers: [MessageService]
})
export class NgUsuarioComponent {
  mensaje:MensajesConvenios=new MensajesConvenios
  lstUsuarios!:GUsuario[];
  usuario!: ICentral[];
  roles!:IRol[];
  perfilesUsuario!:GPerfil[];
  existePerfil!:any[]

  titulo:string="";
  nombre:string="";

   usuarioDialog: boolean = false;
   perfilesDialog: boolean = false;
   desactivarDialog:boolean=false;

   submitted: boolean = false;
   disabled: boolean = true;

   
   txtPerId!:string;
   txtcedula!:string;
   txtnombres!:string;
   txtapellido1!:string;
   txtapellido2!:string;
   txtcorreo!:string;
   txtRol!:string;
   txtIdRol!:number;
   txtEstado:boolean=true
   activarPerfil!:boolean
   estado!:boolean//para el json 
   nombreTema!:string//para el json


    blnAdministrador:boolean=false
    blnAnalista:boolean=false
    blnCoordinador:boolean=false
    blnAuditoria:boolean=false

    existeAdmin!:boolean
    existeAnalista!:boolean
    existeCoordinador!:boolean
    existeAuditoria!:boolean
    existe!:any

   //LISTA DE ACTIVO
   lstEstado: Array<any> = [];
   objEstado: any = {}

   constructor(
    private DbCentral:SCentralService,
    private usuarioService:SUsuarioService,
    private rolService:SRolService,
    private  messageService:MessageService,
    private perfilService:SPerfilService

   ){ }

    ngOnInit(){
      this.getUsuarios()
      
    }
     //LLAMADO  DATOS// 

     getRoles(){
      this.rolService.getRoles().subscribe(
        lrol=>{
          this.roles = lrol;
          
        }
      )
    }

    getUsuarios(){
      this.usuarioService.getUsuarios().subscribe(
        luser =>{
          this.lstUsuarios= luser;
        },
      );
    }

    getIdRol(event: any) {
      const objetoSeleccionado = this.roles.find(luser => luser.strnombre === this.txtRol);
      if (objetoSeleccionado) {
        this.txtIdRol = objetoSeleccionado.intid;
        console.log('pilas rol',this.txtIdRol);
      }
    }

    buscarUsuario(){
      this.DbCentral.getDatos(this.txtcedula).subscribe(
        listado=>{
          this.usuario=listado
          this.txtPerId=listado.listado[0].per_id
          console.log(this.txtPerId)
          this.txtnombres=listado.listado[0].per_nombres
          this.txtapellido1=listado.listado[0].per_primerApellido
          this.txtapellido2=listado.listado[0].per_segundoApellido
          this.txtcorreo=listado.listado[0].per_email
          this.txtcedula=listado.listado[0].pid_valor
          if(this.txtcorreo=== null){
            this.txtcorreo="";
          }
         
        }
       
      );
      
    }


    getperfilUser() {
      this.perfilService.getPerfilesId(this.txtPerId).subscribe(
        lperfil => {
          this.perfilesUsuario = lperfil;
          console.log(lperfil);
          console.log('perfiles', lperfil.length);
          if (lperfil.length > 0) {
            for (let i = 0; i < lperfil.length; i++) {
              if (lperfil[i].perfil == 'Administrador') {
                this.blnAdministrador = lperfil[i].blnactivo;
                this.existeAdmin = true;
              }
              if (lperfil[i].perfil == 'Analista') {
                this.blnAnalista = lperfil[i].blnactivo;
                this.existeAnalista = true;
              }
              if (lperfil[i].perfil == 'Coordinador') {
                this.blnCoordinador = lperfil[i].blnactivo;
                this.existeCoordinador = true;
              }
              if (lperfil[i].perfil == 'Auditoria') {
                this.blnAuditoria = lperfil[i].blnactivo;
                this.existeAuditoria = true;
              }
            }
          } else {
            console.log('no hay nada');
          }
        }
      );
    }
    

    asignacion(nombreOp:string){
      switch (nombreOp) {
        case "Administrador":
           
            this.estado=!this.blnAdministrador
            this.nombreTema=nombreOp
            this.txtIdRol=1

          break;
        case "Analista":

          this.estado=!this.blnAnalista
          this.nombreTema=nombreOp
          this.txtIdRol=2


          break;
        case "Coordinador":
          this.estado=!this.blnCoordinador
          this.nombreTema=nombreOp
          this.txtIdRol=3


          break;
        case "Auditoria":

          this.estado=!this.blnAuditoria
          this.nombreTema=nombreOp
          this.txtIdRol=4

          break;
        default:
         console.log('hay un error')
          break;
      }
    }

    //PREPARACION 

    async nuevoUsuario() {
      this.getRoles()
      this.usuario = [];
      this.submitted = false;
      //this.listarRoles(); 
      //this.usuarioDialog = true;
      this.usuarioDialog=true;


        this.txtPerId=""
        this.txtcedula=""
        this.txtnombres=""
        this.txtapellido1=""
        this.txtapellido2=""
        this.txtcorreo=""
        this.txtRol=""
        this.txtIdRol=0
    }

    desactivar(id:GUsuario){
      this.titulo=" ¿Desea Desactivar el  Usuario?"
      this.desactivarDialog=true;
      this.txtcedula=id.c_cedulausuario
      this.txtEstado=!id.c_estado;
      this.txtIdRol=id.c_idrol;
      console.log(id.c_cedulausuario);
      
    }

    gestionPerfiles(id:GUsuario){

      this.titulo= "Gestion Perfiles"
      this.nombre = 'Perfil'
      this.perfilesDialog=true;
      this.txtPerId=id.c_perid
      this.activarPerfil=id.c_estado
      this.txtIdRol=id.c_idrol;
      console.log(this.txtIdRol)


      for (let i = 1; i <= 4; i++) {
        this.checkPerfil(i);
      }
      
      this.getperfilUser()
      
      

    }

    async reiniciarControl(){
        this.perfilesDialog=false
        
    }

   

    modPerfil(){
      console.log('Funciona')
      console.log(this.activarPerfil)
    }



  //CALCULOS 



    checkPerfil(perf:number){
      
      this.perfilService.checkPerfil(this.txtPerId,perf).subscribe(
        cp=>{
          this.existePerfil= cp;
          this.existe=cp[0].blnactivo
            console.log('a ver aqui',cp[0].blnactivo)

              if(cp[0].blnactivo==='0'||cp[0].blnactivo===0){
                console.log('no tiene perfil')

                this.verificarPerfil(perf)

              }
              
        }
      )
    }

    verificarPerfil(perf:number){

      switch (perf) {
        case 1:
          console.log('Admin');
          this.blnAdministrador=false;
          this.existeAdmin=false
          break;
        case 2:
          console.log('Analista');
          this.blnAnalista=false
          this.existeAnalista=false;
          break;
        case 3:
          console.log('Coordinador');
          this.blnCoordinador=false
          this.existeCoordinador
          break;

        case 4:
          console.log('Auditoria');
          this.blnAuditoria=false
          this.existeAuditoria=false
        break;

        default:
          console.log('Error');
          break;
      }
    }


    

  
    //OPERACIONES 


   async guardarUsuario(){
    this.nombre="Usuario";
      console.log('entra',this.txtcedula)
     /* if(!this.txtnombres||!this.txtapellido1||!this.txtRol){
        this.submitted=true;
        return
      }*/

      const nuevoUsuario ={
        perid:this.txtPerId,
        cedulaUsuario:this.txtcedula,
        nombreUsuario:this.txtnombres,
        primerApellido:this.txtapellido1,
        segundoApellido:this.txtapellido2,
        correo:this.txtcorreo,
        estado:this.txtEstado,
        idrol:this.txtIdRol

      }

      

      this.usuarioService.addUsuario(nuevoUsuario).subscribe(
        
        (Response:any)=>{
           
          console.log('respuesta',Response)
          if(Response.message==="Usuario Creado"){
            this.messageService.add({severity:'success',summary:this.nombre+' '+this.mensaje.IngresadoCorrectamente});
            this.usuarioDialog=false;
            this.getUsuarios();
          }else{
            this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});

          }
        },
        (error)=>{
          console.error('Error de la solicitud HTTP:' , error);
        }
      );
   } 

   

     async desactivarUsuario(){
    this.nombre ="Usuario"

      const desactivar={
        c__estado:this.txtEstado,
        c__idrol:this.txtIdRol
      }

      this.usuarioService.modUsuario(desactivar,this.txtcedula).subscribe(
        
        (Response:any)=>{
          
          if(Response.message==="Actualizado"){

            this.messageService.add({severity:'success',summary:this.nombre+' '+this.mensaje.IngresadoCorrectamente});
            this.desactivarDialog=false;
            this.getUsuarios();

          }else{
            this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});

          }
        },
        (error)=>{
          console.error('Error de la solicitud HTTP:' , error);
        }
        
      );
   }

   async perfilAdmin(nombreOp:string){
      
    if (this.existeAdmin===false||this.existeAnalista==false||this.existeCoordinador==false||this.existeAuditoria==false){
      console.log('creando registro')
      console.log(nombreOp)

      this.asignacion(nombreOp)

      const nPerfil ={
        lngusr_id: this.txtPerId,
        introl_id: this.txtIdRol,
        blnactivo:this.estado,
        lngasignadopor: null,
        strnombretema:this.nombreTema,
        blndefault:!this.blnAdministrador
      }

      this.perfilService.createperfil(nPerfil).subscribe(
        (Response:any)=>{

          if(Response.message==='Perfil Agregado'){
            this.messageService.add({severity:'success',summary:this.nombre+' '+this.mensaje.ExitoProceso});
          }else{
            this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});
          }


        },(error)=>{
          console.error('Error de la solicitud HTTP:' , error);
        }
      )
      
    }else{
      
      console.log('editar Registro')
      this.asignacion(nombreOp)

      const ePerfil={
        estado:this.estado
      }

      this.perfilService.modificarPerfil(ePerfil,this.txtPerId,this.txtIdRol).subscribe(
        (Response:any)=>{

          if(Response.message==='modificado'){
            this.messageService.add({severity:'success',summary:this.nombre+' '+this.mensaje.ExitoProceso});
          }else{
            this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});
          }
        },(error)=>{
          console.error('Error de la solicitud HTTP:' , error);
        }
      )

      
      
    }
  }
    

}
