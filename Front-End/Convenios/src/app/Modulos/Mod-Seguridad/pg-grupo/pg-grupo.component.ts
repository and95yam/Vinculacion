import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MensajesConvenios } from 'src/herramientas/Mensajes/MensajesConvenios';
import { IGrupo,ModGrupo } from '../clases/cGrupo/i-grupo';
import { SGrupoService } from '../clases/cGrupo/s-grupo.service';

@Component({
  selector: 'app-pg-grupo',
  templateUrl: './pg-grupo.component.html',
  styleUrls: ['./pg-grupo.component.css'],
  providers:[MessageService]
})
export class PgGrupoComponent {

  mensaje: MensajesConvenios = new MensajesConvenios;

  grupo!:IGrupo[];
  nuevoModal!:boolean;
  titulo:string="";
  submitted!:boolean;
  nombre:string="";

  txtId!:number;
  txtNombre:string="";
  txtDescripcion:string=""
  intOrden!:number;
  intPadre!:number;
  blnActivo!:boolean

  constructor(
    private grupoServise:SGrupoService,
    private messageService:MessageService,
  ){}

  ngOnInit():void{
    this.listarGrupo();
  }

  listarGrupo(){
    this.grupoServise.getGrupo().subscribe(
      lgrupo=>{
        this.grupo=lgrupo;
        console.log(lgrupo);
      },
    );
  }

  editarGrupo(id:IGrupo){
    this.nuevoModal=true;
    this.titulo="Editar Grupo"
    this.txtId=id.intid;
    this.txtNombre=id.strnombre;
    this.txtDescripcion=id.strdescripcion;
    this.intOrden=id.intorden;
    this.intPadre=id.intpadre;
    this.blnActivo=id.blnactivo;
  }

  nuevoGrupo(){
    this.nuevoModal=true;
    this.titulo="Nuevo Grupo";
    this.txtId=0;
    this.txtNombre="";
    this.txtDescripcion="";
    this.intOrden=0;
    this.intPadre=0;
    this.blnActivo=false;
  }

  async guardarGrupo(){
    this.nombre="Grupo"
     const check= this.checkAccion(this.titulo)

     if(check===true){
      if(!this.txtNombre||!this.txtDescripcion){
        this.submitted=true;
        console.log(this.submitted)
        return;
      }

      const DatosGrupo={

        strnombre:this.txtNombre,
        strdescripcion:this.txtDescripcion,
        intorden:this.intOrden,
        intpadre:this.intPadre,
        blnactivo:this.blnActivo
      }

      this.grupoServise.createGrupo(DatosGrupo).subscribe(
        (response:any)=>{
          console.log(response)
          if(response.message =="Grupo Agregado"){
            this.messageService.add({severity:'success',summary:this.nombre+' '+this.mensaje.IngresadoCorrectamente});
            console.log('Grupo Agregado');//quitar cuando se termine
            this.nuevoModal=false;
            this.listarGrupo();
          }else{
            this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});
          }
        },
        (error)=>{
          console.error('Error de la solicitud HTTP:' , error);
        }
      );
     }else{
       if(check==false){

        if(!this.txtNombre||!this.txtDescripcion){
          this.submitted=true;
          console.log(this.submitted)
          return;
        }

        const EditGrupo={

          strnombre:this.txtNombre,
          strdescripcion:this.txtDescripcion,
          intorden:this.intOrden,
          intpadre:this.intPadre,
          blnactivo:this.blnActivo
        };

        this.grupoServise.updateGrupo(EditGrupo,this.txtId).subscribe(
          (response:any)=>{

            if(response=='Grupo Modificado'){
              this.messageService.add({severity:'success',summary:this.nombre+' '+this.mensaje.ModificadoCorrectamente});
              this.nuevoModal=false;
              this.listarGrupo();

            }else{
              this.messageService.add({severity:'error',summary: this.nombre+' '+this.mensaje.ErrorProceso});
            }
          },
          (error)=>{
            console.error('Error de la solicitud HTTP:' , error);

           }
        );

       }
     }
  }

  checkAccion(text:string){//verificar accion si es agregar o modificar
    if(text==="Nuevo Grupo"){
      console.log('nuevo Grupo');
      return true;

    }else{
      console.log('Mod Grupo');
      return false;
    }
  }
}
