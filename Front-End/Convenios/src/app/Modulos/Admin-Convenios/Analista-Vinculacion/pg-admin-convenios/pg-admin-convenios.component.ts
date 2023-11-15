import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MensajesConvenios } from 'src/herramientas/Mensajes/MensajesConvenios';
import { NgModel } from '@angular/forms';
import { IConvenio} from '../../Clases/cConvenio/i-convenio';
import { ICoordinador } from '../../Clases/cCoordinador/i-coordinador';
import { IInstitucion } from '../../Clases/cInstitucion/i-institucion';
import { SConvenioService } from '../../Clases/cConvenio/s-convenio.service';
import { SCoordinadorService } from '../../Clases/cCoordinador/s-coordinador.service';
import { SInstitucionService } from '../../Clases/cInstitucion/s-institucion.service';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';


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
  datosCoordinador!:ICoordinador[];
  filtroCoordinador!: any[];
  datosInstitucion!:IInstitucion[];
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
  intIdInstitucion!:number;
  read!:boolean;


  //Pendientes poner los txt de datos a ingresar//
  txtTituloConvenio:string="";
  txtNombreCoordinador:string="";
  txtResolucion:string="";
  txtCedula:string="";
  txtCedulaFiltro!:string;
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
  txtSetRazon!:number

  //txtArchivo:string="";
  txtVigente!:boolean;
  txtAvance!:string;

    opcionesNaturaleza =[//probablemente clase

       { naturaleza:"Marco"},
       { naturaleza:"Especifico"},
  ];

    opcionesClasificacion =[//probablemente clase

    { clasificacion:"Nacional"},
    { clasificacion:"Internacional"},
  ];

    opcionesRazon=[
        {razon:"Bimestral"},
        {razon:"Trimestral"},
        {razon:"Cuatrimestral"},
        {razon:"Semestral"},
        {razon:"Anual"},
    ];

  constructor(
    private convenioTablaService:SConvenioService,
    private messageService:MessageService,
    private changeDetectorRef:ChangeDetectorRef,
    private sCoordinadorService:SCoordinadorService,
    private sInstitucionService:SInstitucionService
  ){}

    ngOnInit(){
      this.listarTablaConvenios();
      this.getInstituciones();
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
      this.txtObjetivo= id.strobjetivoconvenio;
      this.txtCedula = id.strcicoordinador;
      this.txtEmail = id.strcorreocoordinador;
      this.txtTelefono = id.strtelefonocoordinador;
      this.txtDependencia= id.strnombredependencia;
      this.txtNaturaleza= id.strnaturalezaconvenio;
      this.txtClasificacion= id.strclasificacionconvenio;
      this.btnAcademico= id.blnacademico;
      this.btnInvestigacion= id.blninvestigacion;
      this.btnPracticas = id.blnpracticas;
      this.btnVinculacion= id.blnvinculacion;
      this.txtInstitucion = id.strinstitucion;
      this.txtFechaInicio= new Date(id.dtfechainicioconvenio);
      this.txtFechaFin=  new Date(id.dtfechafinconvenio);
      this.txtVigencia= id.strvigencia;
      this.txtRazon= this.calcularRazon(id.intrazonconvenio);
      this.txtVigente = id.vigente;
      this.txtAvance = id.fltavanceconvenio.toString()+'%';

      //this.txtarchivo= id.strarchivoconvenio
      console.log(this.txtCedula)
    }

    nuevo(){
      this.modalVerConvenio= true;
      this.mostrarToolbar = false;
      this.EstadoEjes=false;
      this.read=false;
      this.titulo= "Agregar Convenio";
      this.limpiarVariables();
      this.getCoordinadores();


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

    asignarRazon( opcion:{razon: string}) {
      const razon=opcion.razon
     // console.log(razon)
      switch (razon) {
        case 'Bimestral':
          this.txtSetRazon = 2;
          break;

        case 'Trimestral':
          this.txtSetRazon = 3;
          break;

        case 'Cuatrimestral':
          this.txtSetRazon = 4;
          break;

        case 'Semestral':
          this.txtSetRazon = 6;
          break;

        case 'Anual':
          this.txtSetRazon = 12;
          break;

        default:
          this.txtSetRazon = 1;
      }


      //console.log(this.txtSetRazon);
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
      this.txtFechaInicio=new Date()
      this.txtFechaFin= new Date()
    }

    getCoordinadores(){// trae un objeto con los datos de los coordinadores
      this.sCoordinadorService.getAllCoordinador().subscribe(
        datosCord=>{
          this.datosCoordinador=datosCord;

        }
      )
    }

    getInstituciones(){
      this.sInstitucionService.getAllI().subscribe(
        datosInst=>{
          this.datosInstitucion=datosInst;
          this.changeDetectorRef.detectChanges();
        }
      )
    }

    filtrarCedula(event: AutoCompleteCompleteEvent) {// funcion que despliega todas las cedulas como opciones
      let filtered: any[] = [];
      let query = event.query;

      for (let i = 0; i < this.datosCoordinador.length; i++) {
        let coordinador = this.datosCoordinador[i];
        if (coordinador.strcicoordinador.indexOf(query) === 0) {
          filtered.push(coordinador);
        }
      }

      this.filtroCoordinador = filtered;
    }

    onCoordinadorSelect(event: any) {//funcion que asigna valores automaticamente dependiendo del numero de cedula

      if (event) {
        this.txtNombreCoordinador = event.strnombrescoordinador;
        this.txtEmail = event.strcorreocoordinador;
        this.txtTelefono = event.strtelefonocoordinador;
        this.txtDependencia = event.strnombredependencia;

      }
    }

    getIdInstitucion(event:any){
      const objetoSeleccionado = this.datosInstitucion.find(datosInst=>datosInst.strinstitucion===this.txtInstitucion);
      if(objetoSeleccionado){
        this.intIdInstitucion=objetoSeleccionado.intidinstitucion
        console.log(this.intIdInstitucion)
      }
    }



}


