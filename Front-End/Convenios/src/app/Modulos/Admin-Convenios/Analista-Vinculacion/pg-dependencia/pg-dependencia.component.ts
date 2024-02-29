import { Component } from '@angular/core';
import { CDependencia } from '../../Clases/cDependencia/cDependencia';
import { SDependenciaService } from '../../Clases/cDependencia/sDependencia.service';
import { cDependenciaCreate } from '../../Clases/cDependencia/cDependencia';
import {MessageService} from 'primeng/api';
import {MensajesConvenios} from '../../../../../herramientas/Mensajes/MensajesConvenios';





@Component({
  selector: 'app-pg-dependencia',
  templateUrl: './pg-dependencia.component.html',
  styleUrls: ['./pg-dependencia.component.css'],
  providers: [MessageService]
})
export class PgDependenciaComponent {

  mensaje: MensajesConvenios = new MensajesConvenios;

  dependencia!: CDependencia[];
 // listaDependencias: any[]=[];
  loading: boolean = true;
  submitted!: boolean;



  nuevoModal: boolean = false;
  txtNombreDependencia: string ="";
  txtCodigoDependencia: number=0;
  txtTipoDependencia: string ="";
  titulo: string ="";
  nombre:string="";
  verCodigo: boolean= false; 




  constructor(
    private dependenciaService: SDependenciaService,
    private messageService: MessageService,


    ) { }

  tipo =[
    {name:"Académica"},
    {name:"Administrativa"},
  ];

  ngOnInit(): void {
    this.listarDependencias();
  }



  listarDependencias(){
    this.dependenciaService.getAll().subscribe(
      dep => {
        this.dependencia = dep;

      }
    );
  }

  Nuevo(){
    this.nuevoModal=true;
    
    this.txtNombreDependencia="";
    this.txtTipoDependencia="";
    this.txtCodigoDependencia=0;
    this.titulo="Agregar Dependencia";
    this.submitted = false;

  }

  EditarDependencia(id:CDependencia){
    this.nuevoModal=true;
    
    this.titulo="Editar Dependencia"
    this.txtCodigoDependencia=id.intiddependencia;
    this.txtNombreDependencia=id.strnombredependencia;
    this.txtTipoDependencia=id.strtipodependencia;
    this.submitted = false;

  }

  async GuardarDependencia() {
    this.nombre="Dependencia"
    if(this.txtCodigoDependencia==0){

        if (!this.txtNombreDependencia || !this.txtTipoDependencia) {
          this.submitted = true;
          return;
        }

        const nuevaDependencia = {
          strnombredependencia: this.txtNombreDependencia,
          strtipodependencia: this.txtTipoDependencia
        };

        this.dependenciaService.create(nuevaDependencia).subscribe(
          (response: any) => {
            if (response.message =="dependencia creada") {
              this.messageService.add({ severity: 'success', summary: this.nombre+' '+ this.mensaje.IngresadoCorrectamente});

              console.log('Dependencia creada con éxito');
              this.nuevoModal = false;
              this.listarDependencias();
            } else {

              this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});
            }
          },
          (error) => {
            console.error('Error de la solicitud HTTP:', error);
          }
        );

    }else{

      if(!this.txtCodigoDependencia || !this.txtNombreDependencia ||!this.txtTipoDependencia){
        this.submitted=true;
        return;
      }

      const EditDependencia ={
        intiddependencia:this.txtCodigoDependencia,
        strnombredependencia: this.txtNombreDependencia,
        strtipodependencia: this.txtTipoDependencia
      }

      this.dependenciaService.update(EditDependencia,this.txtCodigoDependencia).subscribe(
          (response:any)=>{
            if(response.message=='Dependencia actualizada exitosamente'){
              this.messageService.add({ severity: 'success', summary: this.nombre+' '+this.mensaje.ModificadoCorrectamente});

              this.nuevoModal = false;
              this.listarDependencias();
            }else{
              this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});
            }
          },
            (error)=>{
               console.error('Error de la solicitud HTTP:', error);
            }

      );



    }




  }

}
