import { Component } from '@angular/core';
import { ICentral } from '../clases/cCentral/i-central';
import { IUsuario,GUsuario,MUsuario } from '../clases/cUsuario/iusuario';
import { IRol } from '../clases/cRol/i-rol';
import { SCentralService } from '../clases/cCentral/s-central.service';
import { SUsuarioService } from '../clases/cUsuario/s-usuario.service';
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



  
   //LISTA DE ACTIVO
   lstEstado: Array<any> = [];
   objEstado: any = {}

   constructor(
    private DbCentral:SCentralService,
    private usuarioService:SUsuarioService,
    private rolService:SRolService,
    private  messageService:MessageService

   ){ }

    ngOnInit(){
      this.getUsuarios()
    }

    getRoles(){
      this.rolService.getRoles().subscribe(
        lrol=>{
          this.roles = lrol;
          console.log(lrol)
        }
      )
    }
    getUsuarios(){
      this.usuarioService.getUsuarios().subscribe(
        luser =>{
          this.lstUsuarios= luser;
          console.log(luser)
        },
      );
    }

    getIdRol(event: any) {
      const objetoSeleccionado = this.roles.find(luser => luser.strnombre === this.txtRol);
      if (objetoSeleccionado) {
        this.txtIdRol = objetoSeleccionado.intid;
        console.log(this.txtIdRol);
      }
    }
    

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

    

}
