import { Component } from '@angular/core';
import { SConvenioService } from 'src/app/Modulos/Admin-Convenios/Clases/cConvenio/s-convenio.service';
import { SInformeService } from 'src/app/Modulos/Admin-Convenios/Clases/cInforme/s-informe.service';
import { GMiembro } from 'src/app/Modulos/Admin-Convenios/Clases/cMiembro/i-miembro';
import { IInformeConvenio } from 'src/app/Modulos/Admin-Convenios/Clases/cInforme/i-informe';
import { GActividad } from 'src/app/Modulos/Admin-Convenios/Clases/cActividad/i-actividad';
import { IConvenio2 } from 'src/app/Modulos/Admin-Convenios/Clases/cConvenio/i-convenio';
import { SMiembroService } from 'src/app/Modulos/Admin-Convenios/Clases/cMiembro/s-miembro.service';
import { SActividadService } from 'src/app/Modulos/Admin-Convenios/Clases/cActividad/s-actividad.service';

@Component({
  selector: 'app-pg-informes-validados',
  templateUrl: './pg-informes-validados.component.html',
  styleUrls: ['./pg-informes-validados.component.css']
  

})
export class PgInformesValidadosComponent {


  informes!:IInformeConvenio[];
  actividad!:GActividad[];
  miembro!:GMiembro[];
  convenio!:IConvenio2[];
  

  modal:boolean=false;
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
    private convenioService:SConvenioService
    
    
  ){}

  ngOnInit(){
    this.listarInformes();
    
  }

  listarInformes(){
    this.informeService.getInformesValidados().subscribe(
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

  

  
}
