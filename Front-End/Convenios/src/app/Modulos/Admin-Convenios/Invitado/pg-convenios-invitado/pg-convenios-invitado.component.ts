import { Component } from '@angular/core';
import { IConvenio3} from '../../Clases/cConvenio/i-convenio';
import { SConvenioService } from '../../Clases/cConvenio/s-convenio.service';

@Component({
  selector: 'app-pg-convenios-invitado',
  templateUrl: './pg-convenios-invitado.component.html',
  styleUrls: ['./pg-convenios-invitado.component.css']
})
export class PgConveniosInvitadoComponent {

  datosConvenios!:IConvenio3[];

  modal:boolean=false;
  titulo:string="";



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
  txtIdInstitucion!:number;



  constructor(
    private convenioService:SConvenioService,
  ){}

  ngOnInit(){
    this.listarConvenios();
  }

  listarConvenios(){
    this.convenioService.getConvenioInvitado().subscribe(
      convenios=>{
        this.datosConvenios=convenios
        console.log(convenios);
      }
    )
  }

 verConvenio(id:IConvenio3){
  this.modal=true
  this.titulo="Informacion Convenio"
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
  
 }
  
}
