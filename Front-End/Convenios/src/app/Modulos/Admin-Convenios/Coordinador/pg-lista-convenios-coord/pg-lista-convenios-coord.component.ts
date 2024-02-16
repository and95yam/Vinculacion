import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';//Temporal
import { SConvenioService } from '../../Clases/cConvenio/s-convenio.service';
import { SPlanificacionService } from '../../Clases/cPlanificacion/s-planificacion.service';
import { IConvenio2 } from '../../Clases/cConvenio/i-convenio';
import { IPlanificacion } from '../../Clases/cPlanificacion/i-planificacion';

@Component({
  selector: 'app-pg-lista-convenios-coord',
  templateUrl: './pg-lista-convenios-coord.component.html',
  styleUrls: ['./pg-lista-convenios-coord.component.css']
})
export class PgListaConveniosCoordComponent {

  dir:DireccionesApi = new DireccionesApi
  ced:any=sessionStorage.getItem('UserCedula')

  convenios!:IConvenio2[]
  planificacion!:IPlanificacion[]
  vigente!:boolean;
  tiempo!:Date;
  vigencia!:number;
  modalVerConvenio:boolean=false;
  modalVerPlanificacion:boolean=false;
  titulo:string=""
  txtVigente:boolean=false

  txtAvance:number=0;
  txtResolucion:string="";
  txtTituloConvenio:string="";
  txtObjetivo:string="";
  txtCedula:string="";
  txtNombreCoordinador:string="";
  txtEmail:string="";
  txtTelefono:string="";
  txtDependencia:string="";
  txtNaturaleza:string="";
  txtClasificacion:string="";
  btnAcademico:boolean=false;
  btnInvestigacion:boolean=false;
  btnPracticas:boolean=false;
  btnVinculacion:boolean=false;
  txtEspoch:string="ESPOCH";
  txtInstitucion:string="";
  txtFechaInicio!:Date;
  txtFechaFin!:Date;
  txtVigencia!:number;
  txtRazon!:string;
  txtSetRazon!:number
  idConvenio!:string;


  constructor(
    private convenioService:SConvenioService,
    private planificacionService:SPlanificacionService,
    private router: Router,

  ){}

  ngOnInit():void{
    this.listaConvenios()


  }

  listaConvenios() {
    this.convenioService.getConvenioCord(this.ced).subscribe(
      conv => {
        this.convenios = conv;
        console.log(conv);
        this.convenios.forEach(conv => {
          this.tiempo = conv.c_dtfechafinconvenio;
          this.vigencia = conv.c_strvigencia;
          this.calcularVigencia();
          console.log(this.vigente);
          conv.vigente = this.vigente;
          this.idConvenio= conv.c_stridconvenio;

        });
      }
    );



  }

  listarPlanificacion(id:IConvenio2){
    this.titulo='Planificación Informes'
    this.modalVerPlanificacion=true;

    this.idConvenio=id.c_stridconvenio;
    console.log(this.idConvenio);
    this.planificacionService.getPlanificaciones(this.idConvenio).subscribe(
      plan =>{
        this.planificacion = plan;
        console.log('imprimiendo Planificacion')

        console.log(plan);
      }
    )
  }



  verConvenio(id: IConvenio2) {
    this.modalVerConvenio = true;
    this.titulo = " Información Convenios";

    this.txtTituloConvenio = id.c_strtituloconvenio;
    this.txtNombreCoordinador = id.c_strnombrescoordinador;
    this.txtResolucion = id.c_stridconvenio;
    this.txtObjetivo= id.c_strobjetivoconvenio;
    this.txtCedula = id.c_strcicoordinador;
    this.txtEmail = id.c_strcorreocoordinador;
    this.txtTelefono = id.c_strtelefonocoordinador;
    this.txtDependencia= id.c_strnombredependencia;
    this.txtNaturaleza= id.c_strnaturalezaconvenio;
    this.txtClasificacion= id.c_strclasificacionconvenio;
    this.btnAcademico= id.c_blnacademico;
    this.btnInvestigacion= id.c_blninvestigacion;
    this.btnPracticas = id.c_blnpracticas;
    this.btnVinculacion= id.c_blnvinculacion;

    this.txtInstitucion = id.c_strinstitucion;
    this.txtFechaInicio= id.c_dtfechainicioconvenio
    this.txtFechaFin=  id.c_dtfechafinconvenio
    this.txtVigencia= id.c_strvigencia;
    this.txtRazon= this.calcularRazon(id.c_intrazonconvenio);
    this.txtVigente = id.vigente;
    //this.txtAvance = id.fltavanceconvenio.toString()+'%';


    //this.txtarchivo= id.strarchivoconvenio
    //console.log(this.txtCedula)
    //this.txtFechaInicioFormat = format(this.txtFechaInicio, 'dd-MM-yyyy');


  }



  calcularVigencia() {
    this.vigente != null;
    const fechaActual = new Date();
    const fecha = new Date(this.tiempo);
    fecha.setFullYear(fecha.getFullYear() + this.vigencia);

    if (fechaActual > fecha) {
      this.vigente = false;
      return false;
    } else {
      this.vigente = true;
      return true;
    }
  }

  calcularRazon(meses:number){//mandar a clase

    switch(meses){
      case 2:
        return 'Bimestral';
        break;
      case 3:
        return 'Trimestral';
        break;
      case 4:
        return 'Quatrimestral';
        break;
      case 6:
        return 'Semestral';
        break;
      case 12:
        return 'Anual';
        break;
      default:
        return meses.toString();
    }
  }

  redirectListaInformes(id: IConvenio2){
    const nuevaPagina = 'PgInformesConvenio';
    const idConvenio = encodeURIComponent(id.c_stridconvenio);
    const url = `${nuevaPagina}?idConvenio=${idConvenio}`;
    window.open(url, '_blank');
    console.log(id.c_stridconvenio);
  }

}
