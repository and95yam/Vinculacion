import { Component } from '@angular/core';
import { SInformeService } from '../../Clases/cInforme/s-informe.service';
import { SConvenioService } from '../../Clases/cConvenio/s-convenio.service';
import { SMiembroService } from '../../Clases/cMiembro/s-miembro.service';//obtiene los miembros 
import { SActividadService } from '../../Clases/cActividad/s-actividad.service';
import { IMiembro,GMiembro } from '../../Clases/cMiembro/i-miembro';
import { IActividad,GActividad } from '../../Clases/cActividad/i-actividad';
import { IInforme } from '../../Clases/cInforme/i-informe';
import { IConvenioInforme } from '../../Clases/cConvenio/i-convenio';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';//temporal por las cedulas y roles
import { ImplicitReceiver } from '@angular/compiler';


@Component({
  selector: 'app-pg-informes',
  templateUrl: './pg-informes.component.html',
  styleUrls: ['./pg-informes.component.css']
})
export class PgInformesComponent {

  dir:DireccionesApi = new DireccionesApi
  ced:string=this.dir.cedula1
  idInforme:string="";

  informe!:IInforme[];
  convenioInf!:IConvenioInforme[];
  miembroInforme!:GMiembro[];
  actividadInforme!:GActividad[];
  idSelectedInforme:string="";// da el id del informe seleccionado



  modalVerInforme:boolean=false;
  titulo:string="";

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



  constructor(
    private informeService:SInformeService,
    private convenioService:SConvenioService,
    private miembroInformeService:SMiembroService,
    private actividadInformeService:SActividadService
  ){}

  ngOnInit():void{
    this.listarInformes();
  }

  listarInformes(){
      this.informeService.getInformeCoord(this.ced).subscribe(
        inf=>{
          this.informe= inf
          console.log(inf)
        }
      )
  }

  

  listarConvenioInforme(){
    this.convenioService.getConvenioInforme(this.idInforme).subscribe(
      conv=>{
        this.convenioInf=conv
        console.log(conv)
        this.txtTituloConvenio=conv[0].strtituloconvenio
        this.txtCoordinador=conv[0].strnombrescoordinador;
        this.txtCiCoordinador=conv[0].strcicoordinador;
        this.txtEmail=conv[0].strcorreocoordinador;
        this.txtTelefono=conv[0].strtelefonocoordinador
        this.txtDependencia=conv[0].strnombredependencia;
        this.txtInstitucion=conv[0].strinstitucion;
        //this.txtVigencia=id2.strvigencia; (arreglar)
        this.txtFechaInicio=conv[0].dtfechainicioconvenio
        this.txtFechaFin=conv[0].dtfechafinconvenio
        this.txtObjetivo=conv[0].strobjetivoconvenio;


      }
    )
  }

  listarMiembrosInforme(){
    this.miembroInformeService.getMiembros(this.idSelectedInforme).subscribe(
      miemb=>{
        
        this.miembroInforme= miemb;
        
        console.log(miemb)
      }
    )
  }

  listarActividades(){
    this.actividadInformeService.getActividades(this.idSelectedInforme).subscribe(
      act=>{
        this.actividadInforme=act;
        console.log(act)//borrar
      }
    )
  }

  VerInforme(id:IInforme){
    this.modalVerInforme=true;
    this.titulo="Informe"
    this.idInforme=id.c_stridconvenio;
    console.log(this.idInforme)//borrar
    this.listarConvenioInforme();
    
    this.idSelectedInforme=id.c_stridinforme
    console.log(this.idSelectedInforme);

    console.log('miembros');
    this.listarMiembrosInforme();// manda miembros del equipo en el informe
    console.log('actividades')
    this.listarActividades();

    this.txtTituloInforme=id.c_stridinforme;
    this.txtIdConvenio=id.c_stridconvenio;
   
    this.txtIdInforme=id.c_stridinforme
    this.txtPeriodo=id.c_strperiodo;
    this.txtBeneficiarioDirecto=id.c_strbeneficiariodirecto;
    this.txtBeneficioDirecto=id.c_strbeneficiodirecto;
    this.txtBeneficiarioIndirecto=id.c_strbeneficiarioindirecto;
    this.txtBeneficioIndirecto=id.c_strbeneficioindirecto;
    this.txtResultados=id.c_strresultados;
    this.txtObservaciones=id.c_strobservaciones;

    


  }

}
