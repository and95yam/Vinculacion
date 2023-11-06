import { Component } from '@angular/core';
import { IInstitucion } from '../../Clases/cInstitucion/i-institucion';
import { IInstitucion2} from '../../Clases/cInstitucion/i-institucion';
import { SInstitucionService } from '../../Clases/cInstitucion/s-institucion.service';
import { MessageService } from 'primeng/api';
import { MensajesConvenios } from 'src/herramientas/Mensajes/MensajesConvenios';

@Component({
  selector: 'app-pg-institucion',
  templateUrl: './pg-institucion.component.html',
  styleUrls: ['./pg-institucion.component.css'],
  providers:[MessageService]
})
export class PgInstitucionComponent {

  mensaje: MensajesConvenios = new MensajesConvenios;

  institucion!: IInstitucion[];
  loading:boolean=true;
  submitted!:boolean;
  titulo: string="";
  nombre:string="";

  nuevoModal:boolean = false;
  txtCodigoInstitucion: number=0;
  txtInstitucion!:string;

  constructor(
    private institucionService:SInstitucionService,
    private messageService:MessageService
  ){}

  ngOnInit():void{
    this.listarInstitucioines();
  }

  listarInstitucioines(){
    this.institucionService.getAllI().subscribe(
      inst=>{
        this.institucion = inst

      }
    );
  }

  nuevaInstitucion(){
    this.nuevoModal=true;
    this.titulo="Agregar Institución";
    this.txtCodigoInstitucion=0;
    this.txtInstitucion="";
    this.submitted=false;
  }

  editarInstitucion(id:IInstitucion){
    this.nuevoModal=true;
    this.titulo="Modificar Institución";
    this.txtCodigoInstitucion=id.intidinstitucion;
    this.txtInstitucion=id.strinstitucion;
    this.submitted=false;

  }
  async GuardarInstitucion(){
    this.nombre="Institución";
    if(this.txtCodigoInstitucion==0){

      if(!this.txtInstitucion){
        this.submitted=true;
        return;
      }

      const nuevaInstitucion={
        strinstitucion:this.txtInstitucion
      };

      this.institucionService.createI(nuevaInstitucion).subscribe(
        (response:any)=>{
          if( response.message =="institucion creada"){
            this.messageService.add({ severity:'success',summary: this.nombre+' '+this.mensaje.IngresadoCorrectamente})//corregir mensaje
            this.nuevoModal=false;
            this.listarInstitucioines();
          }else{
            this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});//corregir mensaje

          }
        },
        (error)=>{
          console.error('Error de la solicitud HTTP:', error);

        }
      );

    }else{
        if(!this.txtCodigoInstitucion|| !this.txtInstitucion){
          this.submitted=true;
          return;
        }

        const editInstitucion={
          intidinstitucion:this.txtCodigoInstitucion,
          strinstitucion:this.txtInstitucion
        }

        this.institucionService.updateI(editInstitucion,this.txtCodigoInstitucion).subscribe(
          (response:any)=>{
            if(response =="institucion actualizada"){
              this.messageService.add({ severity: 'success', summary: this.nombre+' '+this.mensaje.ModificadoCorrectamente});// corregir mensaje
              this.nuevoModal= false;
              this.listarInstitucioines();

            }else{
              this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});//corregir mensaje
            }
          },
          (error)=>{
            console.error('Error de la solicitud HTTP:', error);

          }
        );
    }
  }
}
