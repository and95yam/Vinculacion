import { Component } from '@angular/core';
import { SConvenioService } from 'src/app/Modulos/Admin-Convenios/Clases/cConvenio/s-convenio.service';
import { SInformeService } from 'src/app/Modulos/Admin-Convenios/Clases/cInforme/s-informe.service';
import { GMiembro } from 'src/app/Modulos/Admin-Convenios/Clases/cMiembro/i-miembro';
import { IInformeConvenio } from 'src/app/Modulos/Admin-Convenios/Clases/cInforme/i-informe';
import { GActividad } from 'src/app/Modulos/Admin-Convenios/Clases/cActividad/i-actividad';
import { IConvenio2 } from 'src/app/Modulos/Admin-Convenios/Clases/cConvenio/i-convenio';
import { IEvaluacion } from 'src/app/Modulos/Admin-Convenios/Clases/cEvaluacion/c-evaluacion';
import { SMiembroService } from 'src/app/Modulos/Admin-Convenios/Clases/cMiembro/s-miembro.service';
import { SActividadService } from 'src/app/Modulos/Admin-Convenios/Clases/cActividad/s-actividad.service';
import { SEvaluacionService } from 'src/app/Modulos/Admin-Convenios/Clases/cEvaluacion/s-evaluacion.service';
import { MessageService } from 'primeng/api';
import { MensajesConvenios } from 'src/herramientas/Mensajes/MensajesConvenios';

@Component({
  selector: 'app-pg-informes-pendientes',
  templateUrl: './pg-informes-pendientes.component.html',
  styleUrls: ['./pg-informes-pendientes.component.css'],
  providers:[MessageService]
})
export class PgInformesPendientesComponent {

  mensaje: MensajesConvenios = new MensajesConvenios;

  informes!:IInformeConvenio[];
  actividad!:GActividad[];
  miembro!:GMiembro[];
  convenio!:IConvenio2[];
  evaluacion!:IEvaluacion[];

  modal:boolean=false;
  modalEvaluar:boolean= false;
  submitted:boolean=false;
  titulo:string="";
  nombre:string="";

  txtTituloInforme:string="";
  txtTituloConvenio:string=""
  txtCoordinador:string="";
  txtIdConvenio:string="";
  txtCiCoordinador:string="";
  txtEmail:string="";
  txtTelefono:string="";
  txtDependencia:string="";
  txtInstitucion:string="";
  txtEspoch:string="ESPOCH"
  txtVigencia:string="";
  txtFechaInicio!:Date;
  txtFechaFin!:Date;
  txtIdInforme:string="";
  txtPeriodo:string="";
  txtBeneficiarioDirecto:string="";
  txtBeneficioDirecto:string="";
  txtBeneficiarioIndirecto:string="";
  txtBeneficioIndirecto:string="";
  txtObjetivo:string="";
  txtResultados:string="";
  txtObservaciones:string="";
  txtAnexo:string="linkAnexo.com"
  txtEstadoInforme:string="";

  opcionesEvaluacion = ['Pendiente','Entregado','Validado'];


  constructor(
    private informeService:SInformeService,
    private miembroService:SMiembroService,
    private actividadService:SActividadService,
    private convenioService:SConvenioService,
    private evaluacionService:SEvaluacionService,
    private messageService:MessageService
  ){}

  ngOnInit(){
    this.listarInformes();
    
  }

  listarInformes(){
    this.informeService.getInformesPendientes().subscribe(
      informe=>{
        this.informes=informe
        console.log(informe);
      }
    )
  }

  listarMiembros(){
    this.miembroService.getMiembros(this.txtIdInforme).subscribe(
      miemb=>{
        
        this.miembro= miemb;
        console.log(miemb)
        
      }
    )
  }

  listarActividades(){
    this.actividadService.getActividades(this.txtIdInforme).subscribe(
      act=>{
        this.actividad=act;
        console.log(act);
      }
    )
  }

  mostrarConvenio() {
    this.convenioService.buscarConvenio(this.txtIdConvenio).subscribe(
      conv => {
        this.convenio = conv;
        this.txtTituloConvenio = conv[0].c_strtituloconvenio;
        this.txtCoordinador= conv[0].c_strnombrescoordinador;
        this.txtObjetivo= conv[0].c_strobjetivoconvenio;
        this.txtCiCoordinador = conv[0].c_strcicoordinador;
        this.txtEmail=conv[0].c_strcorreocoordinador; 
        this.txtTelefono=conv[0].c_strtelefonocoordinador;
        this.txtDependencia= conv[0].c_strnombredependencia; 
        this.txtInstitucion=conv[0].c_strinstitucion; 
        this.txtFechaInicio= conv[0].c_dtfechainicioconvenio;
        this.txtFechaFin= conv[0].c_dtfechafinconvenio;
        //this.txtVigencia=conv[0].c_strvigencia
      }
    );
  }
  

  verInforme(id:IInformeConvenio){
    this.modal=true;
    this.titulo="Informe"
        
    this.txtTituloInforme=id.c_stridinforme;
    this.txtIdConvenio=id.c_stridconvenio;
   
    this.txtIdInforme=id.c_stridinforme
    this.txtPeriodo=id.c_strperiodo;
    this.txtBeneficiarioDirecto=id.c_strbeneficiariodirecto;
    this.txtBeneficioDirecto=id.c_strbeneficiodirecto;
    this.txtBeneficiarioIndirecto=id.c_strbeneficiarioindirecto;
    this.txtBeneficioIndirecto=id.c_strbeneficioindirecto;
    this.txtResultados=id.c_strresultados;
    this.txtEstadoInforme=id.c_strestadoinforme;
    this.txtObservaciones=id.c_strobservaciones;
    this.mostrarConvenio()
    this.listarMiembros();
    this.listarActividades();
  }

  evaluarInforme(){
    this.titulo="Evaluación de informe"
    this.modalEvaluar= true;
  }

  async evaluar(){
      this.nombre="Evaluacion";

      if(!this.txtEstadoInforme){
        this.submitted=true;
        return;
      }

      const evaluacion={
        strEstadoInforme:this.txtEstadoInforme,
        strObservacionesInforme:this.txtObservaciones
      }

      this.evaluacionService.evaluarInforme(this.txtIdInforme,evaluacion).subscribe(
        (Response:any)=>{
          if(Response.message==="informe evaluado"){
            this.messageService.add({ severity:'success',summary: this.nombre+' '+this.mensaje.IngresadoCorrectamente})//corregir mensaje
            this.modalEvaluar=false;
            this.modal=false;
            this.listarInformes();
          }else{
            this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});//corregir mensaje

          }
        },
        (error)=>{
          console.error('Error de la solicitud HTTP:', error);

        }
      )
  }

}
