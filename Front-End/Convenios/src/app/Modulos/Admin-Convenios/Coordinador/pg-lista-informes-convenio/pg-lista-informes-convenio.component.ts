import { Component,ViewChild,ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import { SInformeService } from '../../Clases/cInforme/s-informe.service';
import { SConvenioService } from '../../Clases/cConvenio/s-convenio.service';
import { SMiembroService } from '../../Clases/cMiembro/s-miembro.service';//Servicio que llama a miembros
import { SActividadService } from '../../Clases/cActividad/s-actividad.service';// servicio actividades
import { SPlanificacionService } from '../../Clases/cPlanificacion/s-planificacion.service';//servicio planificacion
import { IPlanificacion } from '../../Clases/cPlanificacion/i-planificacion';
import { IActividad,GActividad } from '../../Clases/cActividad/i-actividad';//interface actividad
import { GMiembro} from '../../Clases/cMiembro/i-miembro';//Interface miembro
import { IInformeConvenio} from '../../Clases/cInforme/i-informe';//interface datos informe
import { IConvenio, IConvenioInforme } from '../../Clases/cConvenio/i-convenio';//interface datos convenio
import { SDependenciaService } from '../../Clases/cDependencia/sDependencia.service';//servicio que llama a dependencia
import { cGetDependencia } from '../../Clases/cDependencia/cDependencia';//interface dependencia
import { MessageService } from 'primeng/api';
import { MensajesConvenios } from 'src/herramientas/Mensajes/MensajesConvenios';
import { pl } from 'date-fns/locale';
import { Cedula } from '../../Clases/cedula';

@Component({
  selector: 'app-pg-lista-informes-convenio',
  templateUrl: './pg-lista-informes-convenio.component.html',
  styleUrls: ['./pg-lista-informes-convenio.component.css'],
  providers: [MessageService]

})
export class PgListaInformesConvenioComponent {
@ViewChild('txtCiEquipo') txtCiEquipoModel!:NgModel;

  cedula:Cedula= new Cedula;//Instancia de clase cedula

  mensaje: MensajesConvenios = new MensajesConvenios;

  informesConvenio!: IInformeConvenio[];
  convenioInf!:IConvenioInforme[];
  datosMiembro!:GMiembro[];
  datosActividad!:GActividad[];
  datosPlanificacion!:IPlanificacion[];
  datosDependencia!:cGetDependencia[];

  txtIdConvenio!:string;
  loading:boolean=true;
  submitted!:boolean;
  titulo: string="";
  nombre:string="";
  nuevoModal:boolean=false;
  modalEquipo:boolean=false;
  modalActividad:boolean=false;
  isGuardarButtonDisabled:boolean=true;

  controlVerCampos:boolean=true;
  controlIngresoCampos:boolean=true;
  controlEquipoyActividad:boolean=true;
  tituloEquipo:string="Agregar Miembro Equipo";
  tituloActividad:string="Agregar Actividad";
  

  txtTituloInforme:string="";
  txtTituloConvenio:string=""
  txtCoordinador:string="";
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
  txtAnexo:string="";
  blnFirmado: boolean=true;
  readonlyMode:boolean =false;
  opcionesPeriodo: any[]=[];// arreglo para cargar los periodos de los convenios 
  opcionesDependencia: any[]=[];//arreglo para cargar las dependencias 
  

  //Variables Equipo
  txtNombreDependencia:string=""
  txtIdDependencia!:number
  txtCiEquipo:string="";
  txtNombreEquipo:string="";
  txtActividadEquipo:string="";

  //Variables Actividad

  constructor(
    private messageService:MessageService, 
    private route: ActivatedRoute,
    private informeconvenioService:SInformeService,
    private convenioService:SConvenioService,
    private miembroService:SMiembroService,
    private actividadService:SActividadService,
    private planificacionService:SPlanificacionService,
    private dependenciaService:SDependenciaService,
    private changeDetectorRef:ChangeDetectorRef,
   
  ){}

  ngOnInit(){
    this.getIdConvenio();
    this.listarInformes();
    
  }

 
  getIdConvenio(){
    this.route.queryParams.subscribe(params=>{
      const idConvenio = params['idConvenio'];
      this.txtIdConvenio=idConvenio;
      console.log('parte 2:',this.txtIdConvenio);
    })
  }

  listarInformes(){
    this.informeconvenioService.getListaInformes(this.txtIdConvenio).subscribe(
      informes=>{
        this.informesConvenio = informes;
        console.log(informes);
      }
    )
  }

  verInforme(id:IInformeConvenio){
    this.nuevoModal=true;
    this.controlVerCampos=true;
    this.controlIngresoCampos=true;
    this.controlEquipoyActividad=false;
    
    this.titulo="Informe";
    this.txtIdConvenio=id.c_stridconvenio;
    this.txtIdInforme=id.c_stridinforme;
    this.txtCiCoordinador=id.c_strcicoordinador;
    this.txtPeriodo=id.c_strperiodo;
    
    this.listarConvenioInforme();
    this.listarMiembros();
    this.listarActividad();
    this.txtBeneficiarioDirecto=id.c_strbeneficiariodirecto
    this.txtBeneficioDirecto=id.c_strbeneficiodirecto
    this.txtBeneficiarioIndirecto= id.c_strbeneficiarioindirecto
    this.txtBeneficioIndirecto= id.c_strbeneficioindirecto
    this.txtResultados= id.c_strresultados
    this.txtObservaciones= id.c_strobservaciones
    this.blnFirmado=id.c_blnfirmado

  }


  listarConvenioInforme(){
    this.convenioService.getConvenioInforme(this.txtIdConvenio).subscribe(
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

  listarMiembros(){
    this.miembroService.getMiembros(this.txtIdInforme).subscribe(
      miembro=>{
        this.datosMiembro=miembro;
        console.log(miembro)
      }
    )
  }

  listarActividad(){
    this.actividadService.getActividades(this.txtIdInforme).subscribe(
      actividad=>{
          this.datosActividad=actividad;
          console.log(actividad)
      }
    )
  }

  listarPlanificacion() {
    this.planificacionService.getPlanificaciones(this.txtIdConvenio).subscribe(
      plan => {
        this.datosPlanificacion = plan;
        this.opcionesPeriodo = this.datosPlanificacion.map(planificacion => planificacion.c_strperiodo);
        
      }
    );

    
  }

  cargarDependencia() {
    this.dependenciaService.getAll().subscribe(
      dep => {
        this.datosDependencia = dep;
        this.opcionesDependencia = this.datosDependencia.map(dependencia => dependencia.strnombredependencia);
        
        
      }
    );
  }
  
  
  getIdDependencia(event:any){
   
    const objetoSeleccionado = this.datosDependencia.find(dep=>dep.strnombredependencia === this.txtNombreDependencia);
    
    if(objetoSeleccionado){
      this.txtIdDependencia=objetoSeleccionado.intiddependencia;
      console.log('id',this.txtIdDependencia)
    }
    
  }
  
  validarCedula(){
    const ok = Cedula.validarCedula(this.txtCiEquipo);
    if(this.txtCiEquipo.length===10){
      if(ok===false){
        console.log('cedula incorrecta')
        this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.CedularIncorrecta});

        this.isGuardarButtonDisabled = true;
      }else{
        console.log('cedula ok')
       this.isGuardarButtonDisabled = false;
       this.messageService.add({ severity: 'error', summary: this.nombre+'si funciona chugcha '+this.mensaje.CedularIncorrecta});
      }
    }

   }
  
  

  nuevoInforme(){
    this.nuevoModal=true;
    this.titulo="Agregar Informe";
    this.controlVerCampos=false;
    this.controlIngresoCampos=false
    this.controlEquipoyActividad=true;
    this.datosMiembro=[];
    this.datosActividad=[];
    this.listarConvenioInforme();
    this.listarPlanificacion();
    this.txtBeneficiarioDirecto="";
    this.txtBeneficioDirecto="";
    this.txtBeneficiarioIndirecto= "";
    this.txtBeneficioIndirecto= "";
    this.txtResultados= "";
    this.submitted=false;
  }

  nuevoEquipo(){
    this.modalEquipo=true;
    this.cargarDependencia();
    this.isGuardarButtonDisabled=true;
  }

  nuevaActividad(){
    this.modalActividad=true;
  }

}



