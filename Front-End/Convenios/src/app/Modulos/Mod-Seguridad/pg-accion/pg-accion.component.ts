import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MensajesConvenios } from 'src/herramientas/Mensajes/MensajesConvenios';
import { SAccionService } from '../clases/cAccion/s-accion.service';
import { IAccion } from '../clases/cAccion/i-accion';

@Component({
  selector: 'app-pg-accion',
  templateUrl: './pg-accion.component.html',
  styleUrls: ['./pg-accion.component.css'],
  providers:[MessageService]
})
export class PgAccionComponent {
  mensaje: MensajesConvenios = new MensajesConvenios;

  accion!: IAccion[];
  nuevoModal!:boolean;
  titulo:string="";
  submitted!:boolean;
  nombre:string="";
  visible!:boolean;

  txtid!:number;
  txtTitulo:string="";
  txtDescripcion:string="";
  txtUrl:string="";
  blnActivo:boolean=false;
  txtSeudonimo:string="";

  constructor(
    private accionService:SAccionService,
    private messageService:MessageService,
  ){}

  ngOnInit(){
    this.listarAcciones();
  }

  listarAcciones(){
    this.accionService.getAcciones().subscribe(
      lacc=>{
        this.accion=lacc;
        console.log(lacc);
      }
    )
  }

  nuevaAccion(){
    this.nuevoModal=true;
    this.titulo="Nueva Accion"
    this.visible=false;
    this.txtTitulo="";
    this.txtDescripcion="";
    this.txtUrl=""
    this.blnActivo=false;
    this.txtSeudonimo="";
  }

  editAccion(id:IAccion){
    this.nuevoModal=true;
    this.titulo="Editar Acción"
    this.visible=true;
    this.txtid=id.intid;
    this.txtTitulo=id.strtitulo;
    this.txtDescripcion=id.strdescripcion;
    this.txtUrl=id.strurl
    this.blnActivo=id.blnactivo
    this.txtSeudonimo=id.strseudonimo;
  }

  async guardarAccion(){// tomar en cuenta que no se puede repetir el url
     this.nombre="accion";
     const check = this.checkAccion(this.titulo)

     if( check===true){

        if(!this.txtTitulo||!this.txtDescripcion||!this.txtUrl||!this.txtSeudonimo){
          this.submitted=true;
          return;
        }

        const addAccion={

          strtitulo:this.txtTitulo,
          strdescripcion:this.txtDescripcion,
          strurl:this.txtUrl,
          blnactivo:this.blnActivo,
          strseudonimo:this.txtSeudonimo
        };

        this.accionService.createAccion(addAccion).subscribe(
          (response:any)=>{

            if(response.message=="Accion agregada"){
              this.messageService.add({severity:'success',summary:this.nombre+' '+this.mensaje.IngresadoCorrectamente});
              console.log('accion agregada');
              this.nuevoModal=false;
              this.listarAcciones();
            }else{
              if(response.message=="llave duplicada viola restricción de unicidad «accion_strurl_ukey»"){
                this.messageService.add({ severity: 'error', summary: this.mensaje.ErrorLink});
              }
              this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});

            }
          },
          (error)=>{
            console.error('Error de la solicitud HTTP:' , error);
          }
          );

     }else{
        if(check===false){

          if(!this.txtTitulo||!this.txtDescripcion||!this.txtUrl||!this.txtSeudonimo){
            this.submitted=true;
            return;
          }

          const modAccion={

            strtitulo:this.txtTitulo,
            strdescripcion:this.txtDescripcion,
            strurl:this.txtUrl,
            blnactivo:this.blnActivo,
            strseudonimo:this.txtSeudonimo
          };

           this.accionService.updateAccion(modAccion,this.txtid).subscribe(
            (response:any)=>{
              if(response=="Accion modificada"){
                this.messageService.add({severity:'success',summary:this.nombre+' '+this.mensaje.ModificadoCorrectamente});
                this.nuevoModal=false;
                this.listarAcciones();
              }else{
                this.messageService.add({severity:'error',summary: this.nombre+' '+this.mensaje.ErrorProceso});

              }
            },
            (error)=>{
              console.error('Error de la solicitud HTTP:' , error);

             }
           )
        }
     }
  }

  checkAccion(text:string){//verificar accion si es agregar o modificar
    if(text==="Nueva Accion"){
      console.log('nuevo accion');
      return true;

    }else{
      console.log('Mod accion');
      return false;
    }
  }



}
