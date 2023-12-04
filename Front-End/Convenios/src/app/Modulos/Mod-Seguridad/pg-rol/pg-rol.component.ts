import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MensajesConvenios } from 'src/herramientas/Mensajes/MensajesConvenios';
import { IRol } from '../clases/cRol/i-rol';
//import { addRol } from '../clases/cRol/i-rol';
import { SRolService } from '../clases/cRol/s-rol.service';

@Component({
  selector: 'app-pg-rol',
  templateUrl: './pg-rol.component.html',
  styleUrls: ['./pg-rol.component.css'],
  providers:[MessageService]
})
export class PgRolComponent {

  mensaje: MensajesConvenios = new MensajesConvenios;

  rol!: IRol[];
  nuevoModal!:boolean;
  titulo:string="";
  submitted!:boolean;
  nombre:string="";

  txtid!:number;
  txtCodigo:string="";
  txtNombre:string="";
  txtDescripcion:string="";
  blnActivo!:boolean;
  intOrden!:number;

  constructor(
    private rolService:SRolService,
    private messageService:MessageService,
  ){}

  ngOnInit():void{
    this.listarRoles();
  }

  listarRoles() {
    this.rolService.getRoles().subscribe(
      lrol => {
        this.rol = lrol;
        console.log(lrol);
      },

    );

  }

  editarRol(id:IRol){
    this.nuevoModal=true;
    this.titulo="Editar Rol"
    this.txtid=id.intid;
    this.txtCodigo=id.strcodigo;
    this.txtNombre=id.strnombre;
    this.txtDescripcion=id.strdescripcion;
    this.blnActivo=id.blnactivo;
    this.intOrden=id.intorden;
  }

  nuevoRol(){
    this.nuevoModal=true;
    this.titulo="Nuevo Rol";
    this.txtid=0;
    this.txtCodigo="";
    this.txtNombre="";
    this.txtDescripcion="";
    this.blnActivo=false;
    this.intOrden=0;
  }

  async guardarRol(){
    this.nombre="Rol";
     const check = this.checkAccion(this.titulo)

     if(check===true){

      if(!this.txtCodigo||!this.txtNombre||!this.txtDescripcion||!this.intOrden){
        this.submitted=true;
        console.log(this.submitted)
        return;
      }
      const datosRol={

        strcodigo:this.txtCodigo,
        strnombre:this.txtNombre,
        strdescripcion:this.txtDescripcion,
        blnactivo:this.blnActivo,
        intorden:this.intOrden
      };

      this.rolService.createRol(datosRol).subscribe(
        (response:any)=>{
          console.log(response);
          console.log(response.message)
          if(response.message=="Creado"){
            this.messageService.add({severity:'success',summary:this.nombre+' '+this.mensaje.IngresadoCorrectamente});
            console.log('Rol Agregado');//quitar cuando se termine
            this.nuevoModal=false;
            this.listarRoles();
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

        if(!this.txtCodigo||!this.txtNombre||!this.txtDescripcion||!this.intOrden){
          this.submitted=true;
          console.log(this.submitted)
          return;
        }

        const editaRol={

          strcodigo:this.txtCodigo,
          strnombre:this.txtNombre,
          strdescripcion:this.txtDescripcion,
          blnactivo:this.blnActivo,
          intorden:this.intOrden
        };

        this.rolService.updateRol(editaRol,this.txtid).subscribe(
          (response:any)=>{

            if(response=="acutualizado"){
              this.messageService.add({severity:'success',summary:this.nombre+' '+this.mensaje.ModificadoCorrectamente});
              this.nuevoModal=false;
              this.listarRoles();
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
    if(text==="Nuevo Rol"){
      console.log('nuevo rol');
      return true;

    }else{
      console.log('Mod rol');
      return false;
    }
  }
}
