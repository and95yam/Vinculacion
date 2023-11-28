import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MensajesConvenios } from 'src/herramientas/Mensajes/MensajesConvenios';
import { NgModel } from '@angular/forms';
import { IConvenio} from '../../Clases/cConvenio/i-convenio';
import { addConvenio } from '../../Clases/cConvenio/i-convenio';
import { ICoordinador } from '../../Clases/cCoordinador/i-coordinador';
import { IInstitucion } from '../../Clases/cInstitucion/i-institucion';
import { SConvenioService } from '../../Clases/cConvenio/s-convenio.service';
import { SCoordinadorService } from '../../Clases/cCoordinador/s-coordinador.service';
import { SInstitucionService } from '../../Clases/cInstitucion/s-institucion.service';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { format } from 'date-fns';


@Component({
  selector: 'app-pg-admin-convenios',
  templateUrl: './pg-admin-convenios.component.html',
  styleUrls: ['./pg-admin-convenios.component.css'],
  providers:[MessageService]

})
export class PgAdminConveniosComponent {

  mensaje:MensajesConvenios= new MensajesConvenios;

  ejes: boolean[] = [true, false, true, false];
  labels: string[] = ['Académico', 'Investigación', 'Prácticas', 'Vinculación'];

  loading: boolean = true;
  submitted!: boolean;
  readonlyMode:boolean= false;
  tablaConvenios!:IConvenio[];
  datosCoordinador!:ICoordinador[];
  filtroCoordinador!: any[];
  datosInstitucion!:IInstitucion[];
  datosConvenio!:addConvenio[];
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
  read2!:boolean;
  visibleEditar!:boolean;
  activarResolucion!:boolean;


  //Pendientes poner los txt de datos a ingresar//
  txtTituloConvenio:string="";
  txtNombreCoordinador:string="";
  txtResolucion:string="";
  txtCedula:string="";
  txtCedulaFiltro!:string;
  txtEmail:string="";
  txtTelefono:string="";
  txtDependencia:string="";
  txtIdDependencia!:number
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
  txtIdInstitucion!:number;

  txtArchivo:string="aqui va el link";
  txtVigente!:boolean;
  txtAvance!:string;
  txtAvanceNum:number=0;
  txtFechaInicioFormat:string="";
  txtfechaFinFormat:string ="";


  opcionesNaturaleza = ['Marco', 'Especifico'];

    opcionesClasificacion =['Nacional','Internacional'];

    opcionesRazon=[ 'Bimestral','Trimestral','Cuatrimestral', 'Semestral','Anual'];

  constructor(
    private convenioService:SConvenioService,
    private messageService:MessageService,
    private changeDetectorRef:ChangeDetectorRef,
    private sCoordinadorService:SCoordinadorService,
    private sInstitucionService:SInstitucionService,
    //private datepipe:DatePipe
  ){}

    ngOnInit(){
      this.listarTablaConvenios();
      this.getInstituciones();
    }

   listarTablaConvenios(){
      this.convenioService.getConvenioTabla().subscribe(
        convenioTbl=>{
          this.tablaConvenios=convenioTbl;
          console.log(convenioTbl)
          this.tablaConvenios.forEach(convenioTbl=>{

            this.tiempo=convenioTbl.dtfechainicioconvenio
            this.vigencia=convenioTbl.strvigencia
            this.calcularVigencia()
           // console.log(this.vigente)
            convenioTbl.vigente=this.vigente;

          })
        }
      );

    }

    getCoordinadores(){// trae un objeto con los datos de los coordinadores
      this.sCoordinadorService.getAllCoordinador().subscribe(
        datosCord=>{
          this.datosCoordinador=datosCord;
         // console.log(datosCord);
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

    verConvenio(id: IConvenio) {
      this.modalVerConvenio = true;
      this.mostrarToolbar=true;
      this.titulo = " Información Convenios";
      this.EstadoEjes=true;
      this.read=true;
      this.read2=true;// no permite editar datos coordinador
      this.visibleEditar=true;
      this.activarResolucion=true;

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
      this.txtFechaInicio= id.dtfechainicioconvenio
      this.txtFechaFin=  id.dtfechafinconvenio
      this.txtVigencia= id.strvigencia;
      this.txtRazon= this.calcularRazon(id.intrazonconvenio);
      this.txtVigente = id.vigente;
      this.txtAvance = id.fltavanceconvenio.toString()+'%';


      //this.txtarchivo= id.strarchivoconvenio
      //console.log(this.txtCedula)
      //this.txtFechaInicioFormat = format(this.txtFechaInicio, 'dd-MM-yyyy');


    }

    nuevo(){
      this.titulo= 'Agregar Convenio';

      this.modalVerConvenio= true;
      this.mostrarToolbar = false;
      this.EstadoEjes=false;
      this.read=false;
      this.read2=true;// para que los datos del coordinador sean de solo lectura
      this.visibleEditar=true;
      this.activarResolucion=false;

      this.limpiarVariables();// reemplaza a poner todas las variables XD
      this.getCoordinadores();

    }

    modificarConvenio(id: IConvenio){
      this.titulo='Modificar Convenio';

      this.modalVerConvenio=true;
      this.mostrarToolbar = false;
      this.EstadoEjes=false;
      this.read=false;
      this.read2=true;//para que los datos del coordinador sean de solo lectura
      this.visibleEditar=false;
      this.activarResolucion=true;

      this.txtTituloConvenio = id.strtituloconvenio;
      this.txtNombreCoordinador = id.strnombrescoordinador;
      this.txtResolucion = id.stridconvenio;
      this.txtObjetivo= id.strobjetivoconvenio;
      this.txtCedula = id.strcicoordinador;
      this.txtEmail = id.strcorreocoordinador;
      this.txtTelefono = id.strtelefonocoordinador;
      this.txtIdDependencia=id.intiddependencia//id dependencia
      this.txtDependencia= id.strnombredependencia;
      this.txtNaturaleza= id.strnaturalezaconvenio;
      this.txtClasificacion= id.strclasificacionconvenio;
      this.btnAcademico= id.blnacademico;
      this.btnInvestigacion= id.blninvestigacion;
      this.btnPracticas = id.blnpracticas;
      this.btnVinculacion= id.blnvinculacion;
      this.txtIdInstitucion=id.intidinstitucion;//id institucion
      this.txtInstitucion = id.strinstitucion;

      //this.txtFechaInicio= id.dtfechainicioconvenio
      //this.txtFechaFin=  id.dtfechafinconvenio
      //this.txtVigencia= id.strvigencia;
      this.txtRazon= this.calcularRazon(id.intrazonconvenio);
      //this.txtCedulaFiltro=id.strcicoordinador;
      this.getCoordinadores();

      console.log('id dependencia',this.txtIdDependencia);
      console.log('id institucion',this.txtIdInstitucion);

      console.log(this.txtCedulaFiltro)
    }


    async GuardarConvenio(){
      this.nombre = "Convenio";
      const resp = this.checkAccion(this.titulo);




      if (resp === true) {

        this.txtFechaInicioFormat = format(this.txtFechaInicio, 'yyyy-MM-dd');
        this.txtfechaFinFormat = format(this.txtFechaFin, 'yyyy-MM-dd');

        console.log(this.txtFechaInicioFormat);
        console.log(this.txtfechaFinFormat);

        console.log(this.txtFechaInicioFormat);
        console.log(this.txtfechaFinFormat);

        if (!this.txtResolucion ||  !this.txtTituloConvenio || !this.txtNaturaleza || !this.txtClasificacion || !this.txtObjetivo || !this.txtSetRazon ) {

          this.submitted=true;
          console.log(this.submitted)
          return;

        }

        const nuevoConvenio={
          stridconvenio:this.txtResolucion,
          strcicoordinador:this.txtCedula,
          strtituloconvenio:this.txtTituloConvenio,
          strnaturalezaconvenio:this.txtNaturaleza,
          strclasificacionconvenio:this.txtClasificacion,
          strobjetivoconvenio:this.txtObjetivo,
          dtfechainicioconvenio: this.txtFechaInicioFormat,
          dtfechafinconvenio: this.txtfechaFinFormat,
          intrazonconvenio:this.txtSetRazon,
          fltavanceconvenio:this.txtAvanceNum,
          strarchivoconvenio:this.txtArchivo,
          intiddependencia:this.txtIdDependencia,
          intidinstitucion:this.intIdInstitucion,
          blnacademico:this.btnAcademico,
          blninvestigacion:this.btnInvestigacion,
          blnpracticas:this.btnPracticas,
          blnvinculacion:this.btnVinculacion

         };


        this.convenioService.createConvenio(nuevoConvenio).subscribe(
          (response: any) => {
            console.log('Imprimiendo convenios')
            console.log(nuevoConvenio)
            console.log(response.message);
            console.log("respuesta");
            console.log(response);
            if (response.message == "convenio ingresado") {
              this.messageService.add({ severity: 'success', summary: this.nombre + ' ' + this.mensaje.IngresadoCorrectamente });
              console.log("convenio Agregado");  // quitar cuadno termine
              this.modalVerConvenio = false;
              this.listarTablaConvenios();
            } else {
              this.messageService.add({ severity: 'error', summary: this.nombre + ' ' + this.mensaje.ErrorProceso });
            }
          },
          (error) => {
            console.error('Error de la solicitud HTTP:', error);
          }
        );
      }else{
        console.log('parte 2')

        if(resp===false){

          /*if (!this.txtResolucion ||  !this.txtTituloConvenio || !this.txtNaturaleza || !this.txtClasificacion || !this.txtObjetivo || !this.txtSetRazon ) {

            this.submitted=true;
            console.log(this.submitted)
            return;

          }*/

          const editConvenio={

            strcicoordinador:this.txtCedula,
            strtituloconvenio:this.txtTituloConvenio,
            strnaturalezaconvenio:this.txtNaturaleza,
            strclasificacionconvenio:this.txtClasificacion,
            strobjetivoconvenio:this.txtObjetivo,
            strarchivoconvenio:this.txtArchivo,
            intiddependencia:this.txtIdDependencia,
            intidinstitucion:this.txtIdInstitucion,
            blnacademico:this.btnAcademico,
            blninvestigacion:this.btnInvestigacion,
            blnpracticas:this.btnPracticas,
            blnvinculacion:this.btnVinculacion

          };

          this.convenioService.updateConvenio(editConvenio,this.txtResolucion).subscribe(
            (response:any)=>{
                console.log(response)
                console.log('convenio')
                console.log(editConvenio)

              if (response=="Convenio Actualizado"){
                this.messageService.add({severity:'success',summary:this.nombre+' '+this.mensaje.ModificadoCorrectamente});
                this.modalVerConvenio=false;
                this.listarTablaConvenios();
              }else{
                this.messageService.add({severity:'error',summary: this.nombre+' '+this.mensaje.ErrorProceso});

              }

            },
              (error)=>{
                console.error('Error de la solicitud HTTP:' , error);

              }
          );
        }
      }
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

    controlCadenaCedula(event: any) {//controla que no se ingresen mas de 10 digitos
      if (event.target.value.length > 10) {
        this.txtCedula = event.target.value.slice(0, 10);
      }
    }

    onCoordinadorSelect(event: any) {//funcion que asigna valores automaticamente dependiendo del numero de cedula

      if (event) {
        this.txtNombreCoordinador = event.strnombrescoordinador;
        this.txtEmail = event.strcorreocoordinador;
        this.txtTelefono = event.strtelefonocoordinador;
        this.txtDependencia = event.strnombredependencia;
        this.txtIdDependencia= event.intiddependencia;
        this.txtCedula= event.strcicoordinador;

       console.log(this.txtIdDependencia);
       console.log('Valor de txtCedula:', this.txtCedula);


      }
    }

    getIdInstitucion(event:any){
      const objetoSeleccionado = this.datosInstitucion.find(datosInst=>datosInst.strinstitucion===this.txtInstitucion);
      if(objetoSeleccionado){
        this.intIdInstitucion=objetoSeleccionado.intidinstitucion
        console.log(this.intIdInstitucion)
      }
    }





    checkAccion(text:string){//verificar accion si es agregar o modificar
      if(text==="Agregar Convenio"){

        return true;

      }else{
        console.log('Mod convenio');
        return false;
      }
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

    asignarRazon( opcionesRazon: string) {
      const razon=opcionesRazon
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


      console.log(this.txtSetRazon);
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
      this.txtCedulaFiltro="";
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
      this.intIdInstitucion=0;
      this.txtIdDependencia=0
      this.submitted=false;
      this.txtFechaInicio=new Date()
      this.txtFechaFin= new Date()
    }



}


