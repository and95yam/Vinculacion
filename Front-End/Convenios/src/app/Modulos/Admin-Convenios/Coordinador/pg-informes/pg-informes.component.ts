import { Component } from '@angular/core';
import { SInformeService } from '../../Clases/cInforme/s-informe.service';
import { SConvenioService } from '../../Clases/cConvenio/s-convenio.service';
import { IInforme } from '../../Clases/cInforme/i-informe';
import { IConvenioInforme } from '../../Clases/cConvenio/i-convenio';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';//temporal por las cedulas y roles


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
    private convenioService:SConvenioService
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

  VerInforme(id:IInforme){
    this.modalVerInforme=true;
    this.titulo="Informe"
    this.idInforme=id.c_stridconvenio;
    console.log(this.idInforme)//borrar
    this.listarConvenioInforme();
    
    this.txtTituloInforme=id.c_stridinforme;
   // this.txtCoordinador=id2.strnombrescoordinador;
    this.txtIdConvenio=id.c_stridconvenio;
   // this.txtCiCoordinador=id2.strcicoordinador;
    //this.txtEmail=id2.strcorreocoordinador;
    //this.txtTelefono=id2.strtelefonocoordinador
    //this.txtDependencia=id2.strnombredependencia;
    //this.txtInstitucion=id2.strinstitucion;
    //this.txtVigencia=id2.strvigencia; (arreglar)
    //this.txtFechaInicio=id2.dtfechainicioconvenio
    //this.txtFechaFin=id2.dtfechafinconvenio
    this.txtIdInforme=id.c_stridinforme
    this.txtPeriodo=id.c_strperiodo;
    this.txtBeneficiarioDirecto=id.c_strbeneficiariodirecto;
    this.txtBeneficioDirecto=id.c_strbeneficiodirecto;
    this.txtBeneficiarioIndirecto=id.c_strbeneficiarioindirecto;
    this.txtBeneficioIndirecto=id.c_strbeneficioindirecto;
   // this.txtObjetivo=id2.strobjetivoconvenio;
    this.txtResultados=id.c_strresultados;
    this.txtObservaciones=id.c_strobservaciones;

    
  }

}
