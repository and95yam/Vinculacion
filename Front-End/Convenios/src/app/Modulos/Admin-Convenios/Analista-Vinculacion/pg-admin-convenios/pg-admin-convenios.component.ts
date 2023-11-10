import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MensajesConvenios } from 'src/herramientas/Mensajes/MensajesConvenios';
import { NgModel } from '@angular/forms';
import { SConvenioService } from '../../Clases/cConvenio/s-convenio.service';
import { IConvenio} from '../../Clases/cConvenio/i-convenio';

@Component({
  selector: 'app-pg-admin-convenios',
  templateUrl: './pg-admin-convenios.component.html',
  styleUrls: ['./pg-admin-convenios.component.css'],
  providers:[MessageService]

})
export class PgAdminConveniosComponent {

  mesaje:MensajesConvenios= new MensajesConvenios;

  ejes: boolean[] = [true, false, true, false];
  labels: string[] = ['Académico', 'Investigación', 'Prácticas', 'Vinculación'];

  loading: boolean = true;
  submitted!: boolean;
  readonlyMode:boolean= false;
  tablaConvenios!:IConvenio[];
  //convenioFull!:IConvenioFull[];
  nuevoModal:boolean=false;
  modalVerConvenio:boolean=false;
  titulo: string ="";
  nombre: string="";
  tiempo!:Date;
  vigencia!:number;
  vigente!:boolean;
  mostrarToolbar!:boolean;
  EstadoEjes!:boolean;
  read!:boolean;


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
  btnVinculacion:boolean=false;
  txtEspoch:string="ESPOCH";
  txtInstitucion:string="";
  txtFechaInicio!:Date;
  txtFechaFin!:Date;
  txtObjetivo:string="";
  txtVigencia!:number;
  txtRazon!:string;

  //txtArchivo:string="";
  txtVigente!:boolean;
  txtAvance!:string;


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
          console.log(convenioTbl)
          this.tablaConvenios.forEach(convenioTbl=>{

            this.tiempo=convenioTbl.dtfechainicioconvenio
            this.vigencia=convenioTbl.strvigencia
            this.calcularVigencia()
            console.log(this.vigente)
            convenioTbl.vigente=this.vigente;

          })
        }
      );

    }


    verConvenio(id: IConvenio) {
      this.modalVerConvenio = true;
      this.mostrarToolbar=true;
      this.titulo = " Información Convenios";
      this.EstadoEjes=true;
      this.read=true;

      this.txtTituloConvenio = id.strtituloconvenio;
      this.txtNombreCoordinador = id.strnombrescoordinador;
      this.txtResolucion = id.stridconvenio;
      this.txtCedula = id.strcicoordinador;
      this.txtEmail = id.strcorreocoordinador;
      this.txtTelefono = id.strtelefonocoordinador;
      this.txtDependencia= id.strnombredependencia;
      this.txtNaturaleza= id.strclasificacionconvenio;
      this.txtClasificacion= id.strclasificacionconvenio;
      this.btnAcademico= id.blnacademico;
      this.btnInvestigacion= id.blninvestigacion;
      this.btnPracticas = id.blnpracticas;
      this.btnVinculacion= id.blnvinculacion;
      this.txtInstitucion = id.strinstitucion;
      this.txtFechaInicio= id.dtfechainicioconvenio;
      this.txtFechaFin= id.dtfechafinconvenio;
      this.txtVigencia= id.strvigencia;
      this.txtRazon= this.calcularRazon(id.intrazonconvenio);
      this.txtVigente = id.vigente;
      this.txtAvance = id.fltavanceconvenio.toString()+'%';

      //this.txtarchivo= id.strarchivoconvenio

    }

    nuevo(){
      this.modalVerConvenio= true;
      this.mostrarToolbar = false;
      this.EstadoEjes=false;
      this.read=false;
      this.titulo= "Agregar Convenio";
      this.limpiarVariables();
    }

    calcularVigencia() {//mandar a clase
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

    limpiarVariables(){//mandar a clase
      this.txtTituloConvenio="";
      this.txtNombreCoordinador="";
      this.txtResolucion="";
      this.txtCedula="";
      this.txtEmail="";
      this.txtTelefono="";
      this.txtDependencia="";
      this.txtNaturaleza="";
      this.txtClasificacion="";
      this.btnAcademico=false;
      this.btnInvestigacion=false;
      this.btnPracticas=false;
      this.btnVinculacion=false;
      this.txtEspoch="ESPOCH";
      this.txtInstitucion="";
      this.txtObjetivo="";
      this.txtRazon="";
    }




}


