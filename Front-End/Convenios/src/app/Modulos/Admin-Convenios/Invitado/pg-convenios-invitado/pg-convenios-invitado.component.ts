import { Component } from '@angular/core';
import { IConvenio} from '../../Clases/cConvenio/i-convenio';
import { SConvenioService } from '../../Clases/cConvenio/s-convenio.service';

@Component({
  selector: 'app-pg-convenios-invitado',
  templateUrl: './pg-convenios-invitado.component.html',
  styleUrls: ['./pg-convenios-invitado.component.css']
})
export class PgConveniosInvitadoComponent {

  datosConvenios!:IConvenio[];

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

 verConvenio(id:IConvenio){
  this.modal=true
 }
  
}
