import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MensajesConvenios } from 'src/herramientas/Mensajes/MensajesConvenios';
import { NgModel } from '@angular/forms';
import { SConvenioService } from '../../Clases/cConvenio/s-convenio.service';
import { IConvenioTabla } from '../../Clases/cConvenio/i-convenio';


@Component({
  selector: 'app-pg-admin-convenios',
  templateUrl: './pg-admin-convenios.component.html',
  styleUrls: ['./pg-admin-convenios.component.css'],
  providers:[MessageService]
})
export class PgAdminConveniosComponent {

  mesaje:MensajesConvenios= new MensajesConvenios;


  loading: boolean = true;
  submitted!: boolean;
  readonlyMode:boolean= false;
  tablaConvenios!:IConvenioTabla[];
  nuevoModal:boolean=false;
  modalVerConvenio:boolean=false;
  titulo: string ="";
  nombre: string="";
  tiempo!:Date;
  vigencia!:number;
  vigente!:boolean;


  //Pendientes poner los txt de datos a ingresar//
  txtTituloConvenio:string="";
  txtNombreCoordinador:string="";
  txtResolucion:string="";
  txtCedula:string="";
  txtEmail:string="";
  txtTelefono:string="";
  txtDependencia:string="";
  txtNaturaleza:string="";
  txtClasificacion:string="";
  btnAcademico:boolean=false;
  btnInvestigacion:boolean=false;
  btnPracticas:boolean=false;
  btnVinculacion:boolean=true;
  txtEspoch:string="ESPOCH";
  txtInstitucion:string="";
  txtFechaInicio:string="";
  txtFechaFin:string="";
  txtVigencia!:number;
  txtRazon!:number;
  //txtArchivo:string="";


  constructor(
    private convenioTablaService:SConvenioService,
    private messageService:MessageService,
    private changeDetectorRef:ChangeDetectorRef
  ){}

    ngOnInit(){
      this.listarTablaConvenios();


    }

    listarTablaConvenios(){
      this.convenioTablaService.getConvenioTabla().subscribe(
        convenioTbl=>{
          this.tablaConvenios=convenioTbl;

          this.tablaConvenios.forEach(convenioTbl=>{

            this.tiempo=convenioTbl.c_dtfechainicioconvenio
            this.vigencia=convenioTbl.c_strvigencia
            this.calcularVigencia()
            //console.log(this.vigente)
            convenioTbl.c_vigente=this.vigente;
            //console.log(convenioTbl)
          })


        }
      );

    }

    calcularVigencia() {
      this.vigente!=null
      const fechaActual = new Date();
      const fecha = new Date(this.tiempo);
      fecha.setFullYear(fecha.getFullYear() + this.vigencia);

      if (fechaActual > fecha) {
        this.vigente=false;
        return false;

      }else{
         this.vigente= true;
         return true;
      }

    }

    verConvenio(){
      this.modalVerConvenio=true;
      this.titulo= " Información Convenios";
    }


}
