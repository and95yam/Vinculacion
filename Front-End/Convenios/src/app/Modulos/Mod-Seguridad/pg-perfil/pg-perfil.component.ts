import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MensajesConvenios } from 'src/herramientas/Mensajes/MensajesConvenios';
import { SPerfilService } from '../clases/cPerfil/s-perfil.service';
import { IPerfil,GPerfil,MPerfil } from '../clases/cPerfil/i-perfil';

@Component({
  selector: 'app-pg-perfil',
  templateUrl: './pg-perfil.component.html',
  styleUrls: ['./pg-perfil.component.css'],
  providers:[MessageService]
})
export class PgPerfilComponent {

  mensaje: MensajesConvenios = new MensajesConvenios;

  getPerfil!:GPerfil[]
  nuevoModal!:boolean;
  titulo:string="";
  submitted!:boolean;
  nombre:string="";
  edit:boolean=false

  txtUsrid!:number;
  txtRolId!:string;
  txtCodRol!:number;
  blnActivo!:boolean;
  txtAsignado!:number;
  txtModificado!:number;
  txtNombretema!:string;
  blnDef!:boolean;

  constructor(
    private perfilService:SPerfilService,
    private messageService:MessageService,
  ){}

  ngOnInit():void{
    this.listarPerfiles()
  }

    listarPerfiles(){
      this.perfilService.getPerfiles().subscribe(
        perf=>{
          this.getPerfil=perf
          console.log('perfil', perf)
        }
      );
    }

    nuevoPerfil(){
      this.nuevoModal=true;
      this.edit=true;
      this.txtUsrid=0;
      this.txtRolId="";
      this.blnActivo=false;
      this.txtAsignado=0;
      this.txtNombretema="";
      this.blnDef=false;
    }

    editarPerfil(id:GPerfil){
      this.nuevoModal=true;
      this.edit=false
      this.txtUsrid=id.id_usuario;
      this.txtRolId=id.codigo_rol;
      this.blnActivo=id.blnactivo;
      this.txtAsignado=id.lngasignadopor;
      this.txtNombretema=id.perfil;
      this.blnDef=id.blndefault;
    }
    
    async guardarPerfil(){
        this.nombre="perfil"

        if(this.edit===true){

           /* if(!this.txtUsrid||!this.txtRolId||!this.blnActivo||!this.txtAsignado||!this.blnDef){
              this.submitted=true;
              return;
            }*/

            const addPerfil={
              lngusr_id:this.txtUsrid,
              introl_id:this.txtRolId,
              blnactivo:this.blnActivo,
              lngasignadopor:this.txtAsignado,
              strnombretema:this.txtNombretema,
              blndefault:this.blnDef
            }
          
          this.perfilService.createperfil(addPerfil).subscribe(
            (Response:any)=>{
              if(Response.message==='Perfil Agregado'){
                this.messageService.add({severity:'success',summary:this.nombre+' '+this.mensaje.IngresadoCorrectamente});
                this.nuevoModal=false;
                this.listarPerfiles();
              }else{
                this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});

              }
            },
            (error)=>{
              console.error('Error de la solicitud HTTP:' , error);

            }
          );  
        }else{
           // aqui va el editar 

        }
    }
}
