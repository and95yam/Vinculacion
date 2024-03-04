import { Component,ViewChild,ChangeDetectorRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import { SInformeService } from '../../Clases/cInforme/s-informe.service';
import { SConvenioService } from '../../Clases/cConvenio/s-convenio.service';
import { SMiembroService } from '../../Clases/cMiembro/s-miembro.service';//Servicio que llama a miembros
import { SActividadService } from '../../Clases/cActividad/s-actividad.service';// servicio actividades
import { SPlanificacionService } from '../../Clases/cPlanificacion/s-planificacion.service';//servicio planificacion
import { IPlanificacion } from '../../Clases/cPlanificacion/i-planificacion';
import { IActividad,GActividad,EActividad } from '../../Clases/cActividad/i-actividad';//interface actividad
import { GMiembro} from '../../Clases/cMiembro/i-miembro';//Interface miembro
import { AddInforme, IInforme, IInformeConvenio} from '../../Clases/cInforme/i-informe';//interface datos informe
import { IConvenio, IConvenio2, IConvenioInforme } from '../../Clases/cConvenio/i-convenio';//interface datos convenio
import { SDependenciaService } from '../../Clases/cDependencia/sDependencia.service';//servicio que llama a dependencia
import { cGetDependencia } from '../../Clases/cDependencia/cDependencia';//interface dependencia
import { MessageService } from 'primeng/api';
import { MensajesConvenios } from 'src/herramientas/Mensajes/MensajesConvenios';
import { pl } from 'date-fns/locale';
import { Cedula } from '../../Clases/cedula';
import { OneDriveService } from 'src/app/Modulos/plantillas/oneDrive/one-drive.service';
import { SafeResourceUrl } from '@angular/platform-browser';

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
  submittedEquipo!:boolean;
  submittedActividad!:boolean;
  submittedPeriodo!:boolean;
  titulo: string="";
  nombre:string="";
  nuevoModal:boolean=false;
  modalEquipo:boolean=false;
  modalActividad:boolean=false;
  modalBorrar:boolean=false;
  isGuardarButtonDisabled:boolean=true;
  alto:string='350px';
  ancho:string='500px'
  equipoAgregado:boolean = false;//control agregar equipo
  actividadAgregada:boolean = false;// control agregar actividades 
  accionInforme:boolean=false//control informe si es agregar o editar 
  txtConfirmacion:string=""//para borrar equipo o actividad

  controlVerCampos:boolean=true;
  controlIngresoCampos:boolean=true;
  controlEquipoyActividad:boolean=true;//posible borrar
  tituloEquipo:string="";
  tituloActividad:string="";
  verAccion:boolean=true;
  soloLectura:boolean=true;
  
  
 //Variables Datos Convenio
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
  txtObjetivo:string="";

  
  
  readonlyMode:boolean =false;
  opcionesPeriodo: any[]=[];// arreglo para cargar los periodos de los convenios 
  opcionesDependencia: any[]=[];//arreglo para cargar las dependencias 
   
  //Estado convenio
   blnFirmado: boolean=true;
   txtEstado!:string;

  //Variables Informe 
  txtPeriodo:string="";
  txtBeneficiarioDirecto:string="";
  txtBeneficioDirecto:string="";
  txtBeneficiarioIndirecto:string="";
  txtBeneficioIndirecto:string="";
  txtResultados:string="";
  txtObservaciones:string="";
  txtAnexo:string="";
  

  //Variables Equipo
  txtNombreDependencia:string=""
  txtIdDependencia!:number
  txtCiEquipo:string="";
  txtNombreEquipo:string="";
  txtActividadEquipo:string="";

  //Variables Actividad

  txtNumActividad:number=0;
  txtActividad:string="";
  dtFechaInicioActividad!:Date;
  dtFechaFinActividad!:Date;
  verFecha:boolean=true;
  verFecha2:boolean=true;


  //Variables ONE DRIVE 

  safePdfUrl:SafeResourceUrl | undefined;
  archivoSubir!:File
  txtArchivo:string="";
  modalVerArchivo:boolean=false

  //para eliminar informe
  idInforme!:string
  botonVisible!:boolean

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
    private oneDrive:OneDriveService,
   
  ){}

  ngOnInit(){
    this.getIdConvenio();
    this.listarInformes();
    
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
    this.verAccion=false;
    this.nuevoModal=true;
    this.controlVerCampos=true;
    this.controlIngresoCampos=true;
    this.controlEquipoyActividad=false;
    this.accionInforme=true;
    
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

  nuevoInforme(){
    this.nuevoModal=true;
    this.verAccion=true;
    this.titulo="Agregar Informe";
    this.controlVerCampos=false;
    this.accionInforme=false;
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

  editarInforme(id:IInformeConvenio){
    this.nuevoModal=true; 
    if(id.c_strestadoinforme==="Validado"){
      this.messageService.add({ severity:'error',summary: this.mensaje.EditarValidado})
      this.nuevoModal=false
    }else{
    this.verAccion=true;
    this.titulo="Editar Informe"
    this.controlVerCampos=false;
    
    this.accionInforme=true;
    this.controlIngresoCampos=false;

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
    this.txtObservaciones=id.c_strobservaciones

    }
    
    
    
   
  }

  async GenerarInforme(){

    const crearInforme={
      strPeriodo:this.txtPeriodo,
      strBeneficiarioDirecto:"",
      strBeneficioDirecto:"",
      strBeneficiarioIndirecto:"", 
      strBeneficioIndirecto:"", 
      strResultados:"",
      strObservaciones:"",
      strAnexo:""
    };

    this.informeconvenioService.createInforme(crearInforme,this.txtIdConvenio).subscribe(
      (response:any)=>{console.log(response.message)}

    )
  }



  async guardarInforme(){

      var aux = this.txtFechaInicio.toString().split(/[" " :-]/);
      this.txtArchivo = '/CONVENIOS/' +aux[2]+'/'+ this.txtInstitucion.replace(" " ,'')+ '/'+ this.txtIdInforme.replace(" " ,'') +'.pdf';//Se define ruta del archivo
      console.log('archivo',this.txtArchivo)

   this.nombre="Informe";
   
    if(this.titulo="Agregar Informe"){

      //console.log('entra a funcion')
      if(!this.txtBeneficiarioDirecto||!this.txtBeneficioDirecto||!this.txtResultados){
        
        if(this.equipoAgregado==false && this.actividadAgregada==false){
        if(this.equipoAgregado==false){
          this.messageService.add({ severity:'error',summary: this.mensaje.EquipoNoIngresada})
        }
        if(this.actividadAgregada==false){
          this.messageService.add({ severity:'error',summary: this.mensaje.ActividadNoIngresada})
        }
      }
        
        
        console.log('entra a funcion')
        
        this.submitted=true;
        console.log(this.submitted);
        return;
      }

      

      const nuevoInforme={
        strPeriodo:this.txtPeriodo,
        strBeneficiarioDirecto:this.txtBeneficiarioDirecto,
        strBeneficioDirecto:this.txtBeneficioDirecto,
        strBeneficiarioIndirecto:this.txtBeneficiarioIndirecto, 
        strBeneficioIndirecto:this.txtBeneficioIndirecto, 
        strResultados:this.txtResultados,
        strObservaciones:this.txtObservaciones,
        strAnexo:this.txtArchivo

      };

      console.log(nuevoInforme);

      this.informeconvenioService.editInforme(nuevoInforme,this.txtIdInforme,this.txtIdConvenio).subscribe(
          
        (response:any)=>{
          console.log('entra aqui x2');
          console.log(response.message);
          if(response.message =="informe actualizado"){
            this.messageService.add({ severity:'success',summary: this.nombre+' '+this.mensaje.IngresadoCorrectamente})//corregir mensaje
            this.nuevoModal=false;
            this.listarInformes();

          }else{
            this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});//corregir mensaje
  
          }
        },
        (error)=>{
          console.error('Error de la solicitud HTTP:', error);
  
        }
      );
                

      
    }
      
  }
  /*************************************** MIEMBRO ********************************/
  listarMiembros(){
    this.miembroService.getMiembros(this.txtIdInforme).subscribe(
      miembro=>{
        this.datosMiembro=miembro;
      }
    )
  }

  nuevoEquipo(){
    this.modalEquipo=true;
    this.soloLectura=false;
    this.cargarDependencia();
    this.tituloEquipo="Agregar Miembro Equipo"; 
    this.isGuardarButtonDisabled=true;
    this.submittedEquipo=false;
    this.txtCiEquipo="";
    this.txtNombreEquipo="";
    this.txtActividadEquipo="";
    if( this.titulo==="Agregar Informe"){
      this.GenerarInforme();
    }
    
  }

  editarEquipo(id:GMiembro){
    this.modalEquipo=true; 
    this.soloLectura=true;
    this.controlEquipoyActividad=true;
    
    this.tituloEquipo="Editar Miembro Equipo"; 
    this.cargarDependencia();
    this.isGuardarButtonDisabled=false;
    this.submittedEquipo=false;
    this.txtNombreDependencia=id.c_strnombredependencia;
    this.txtIdDependencia=id.c_intiddependencia;
    this.txtCiEquipo=id.c_strciequipo;
    this.txtNombreEquipo=id.c_strnombreequipo;
    this.txtActividadEquipo=id.c_stractividadequipo;

    
  }
   
  eliminarEquipo(id:GMiembro){
    this.modalBorrar=true;
    this.nombre='miembro';
    this.titulo='Eliminar Miembro'
    this.txtConfirmacion="¿Desea eliminar este miembro del equipo?"
    this.txtCiEquipo=id.c_strciequipo;
  }


  async guardarEquipo(){
    this.nombre="Miembro";

    if(this.tituloEquipo==="Agregar Miembro Equipo"){

      if(!this.txtNombreDependencia||!this.txtCiEquipo||!this.txtActividadEquipo){
        this.submittedEquipo=true;
        console.log('prueba funcionando',this.submittedEquipo)
        return;
      }

      const nuevoMiembro={
        intIdDependencia:this.txtIdDependencia,
        strCiEquipo:this.txtCiEquipo,
        strNombreEquipo:this.txtNombreEquipo,
        strActividadEquipo:this.txtActividadEquipo
      };
  
       this.miembroService.createMiembros(nuevoMiembro,this.txtIdInforme).subscribe(
        
        (response:any)=>{
          console.log(response.message);
          if(response.message == "Miembro Agregado"){
            this.messageService.add({ severity:'success',summary: this.nombre+' '+this.mensaje.IngresadoCorrectamente})//corregir mensaje
            this.modalEquipo=false;
            this.equipoAgregado=true;
            this.listarMiembros();
          }else{
            this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});//corregir mensaje
  
          }
        },
        (error)=>{
          console.error('Error de la solicitud HTTP:', error);
  
        }
       );

    }else{
          if(this.tituloEquipo==="Editar Miembro Equipo"){

            console.log('Editar')
              if(!this.txtNombreEquipo||!this.txtActividadEquipo){
                this.submittedEquipo=true;
                console.log('prueba funcionando',this.submittedEquipo)
                return;
              }

            const editMiembro={

              intIdDependencia:this.txtIdDependencia,
              strCiEquipo:this.txtCiEquipo,
              strNombreEquipo:this.txtNombreEquipo,
              strActividadEquipo:this.txtActividadEquipo
            }

            this.miembroService.editMiembros(editMiembro,this.txtIdInforme,this.txtCiEquipo).subscribe(
              (response:any)=>{
                if(response.message==="miembro actualizado"){
                  this.messageService.add({ severity:'success',summary: this.nombre+' '+this.mensaje.ModificadoCorrectamente})//corregir mensaje
                  this.modalEquipo=false;
                  this.listarMiembros();
                }else{
                  this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});//corregir mensaje
                }
              },
              (error)=>{
                console.error('Error de la solicitud HTTP:', error);
    
              }
            );

          }
    }
    
  }

  /*************************************** ACTIVIDAD ********************************/
  listarActividad(){
    this.actividadService.getActividades(this.txtIdInforme).subscribe(
      actividad=>{
          this.datosActividad=actividad;
          console.log(actividad)
      }
    )
  }

  nuevaActividad(){
    this.modalActividad=true;
    this.tituloActividad="Agregar Actividad"
    this.txtNumActividad++
    this.submittedActividad=false;
    this.txtActividad="";
    this.verFecha=true;
    this.verFecha2=true;
    

  }

  cerrarActividad(){
    this.modalActividad=false;
    this.txtNumActividad--;
  }

  calendario(){
    this.alto='600px'
  }

  editarActividad(id:GActividad){

    this.nombre='actividad'
    this.modalActividad=true;
    this.verFecha=false;
    this.verFecha2=false;
    this.tituloActividad='Editar Actividad';
    this.txtNumActividad=id.c_intnumactividad;
    this.txtActividad=id.c_stractividad;
    this.dtFechaInicioActividad=id.c_dtfechainicioactividad;
    this.dtFechaFinActividad=id.c_dtfechafinactividad;
  }
  
  eliminarActividad(id:GActividad){
    this.modalBorrar=true;
    this.nombre='Actividad';
    this.titulo='Eliminar Actividad'
    this.txtConfirmacion="¿Desea eliminar esta actividad?"
    this.txtNumActividad=id.c_intnumactividad;
    
  }

  async guardarActividad(){
    this.nombre="Actividad"

    if(this.tituloActividad==="Agregar Actividad"){

        if(!this.txtActividad||!this.dtFechaInicioActividad ||!this.dtFechaFinActividad ){
          this.submittedActividad=true;
          return;
        }

        const nuevoActividad={
          intNumActividad:this.txtNumActividad,
          strActividad:this.txtActividad,
          dtFechaInicioActividad:this.dtFechaInicioActividad,
          dtFechaFinActividad:this.dtFechaFinActividad
        };

       this.actividadService.createActividad(nuevoActividad,this.txtIdInforme).subscribe(
           
          (response:any)=>{
            console.log(response.message); 
            if(response.message == "Actividad Agregada"){
              this.messageService.add({ severity:'success',summary: this.nombre+' '+this.mensaje.IngresadoCorrectamente})
              this.modalActividad=false;
              this.actividadAgregada=true; 
              this.titulo="Agregar Informe";
              //this.txtNumActividad=this.txtNumActividad+1;
              this.listarActividad();
              
            }else{
              this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});
            }
          },
          (error)=>{
            console.error('Error de la solicitud HTTP:', error);
          }
       ); 
    }else{
            if(this.tituloActividad==='Editar Actividad'){

              console.log('entra a editar')

              if(!this.txtActividad||!this.dtFechaInicioActividad ||!this.dtFechaFinActividad ){
                this.submittedActividad=true;
                return;
              }

              const editActividad={
                stractividad:this.txtActividad,
                dtfechainicioactividad:this.dtFechaInicioActividad,
                dtfechafinactividad:this.dtFechaFinActividad
              };

              console.log(editActividad)

              this.actividadService.editActividad(editActividad,this.txtIdInforme,this.txtNumActividad).subscribe(
                

                (response:any)=>{
                  
                  if(response.message==='actividad actualizada'){
                    this.messageService.add({ severity:'success',summary: this.nombre+' '+this.mensaje.IngresadoCorrectamente})
                    this.modalActividad=false;
                    this.listarActividad();
                  }else{
                    this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});
                  }
                },
                (error)=>{
                  console.error('Error de la solicitud HTTP:', error);
                }
              );
            }
    }

  }

  /*************************************** OTRAS FUNCIONES ********************************/

  
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
       
      }
    }
  }

  getIdDependencia(event:any){
   
    const objetoSeleccionado = this.datosDependencia.find(dep=>dep.strnombredependencia === this.txtNombreDependencia);
    
    if(objetoSeleccionado){
      this.txtIdDependencia=objetoSeleccionado.intiddependencia;
      console.log('id',this.txtIdDependencia)
    }
    
  }

  

  cargarDependencia() {
    this.dependenciaService.getAll().subscribe(
      dep => {
        this.datosDependencia = dep;
        this.opcionesDependencia = this.datosDependencia.map(dependencia => dependencia.strnombredependencia);
        
        
      }
    );
  }

  getIdConvenio(){
    this.route.queryParams.subscribe(params=>{
      const idConvenio = params['idConvenio'];
      this.txtIdConvenio=idConvenio;
      console.log('parte 2:',this.txtIdConvenio);
    })
  }

  
  
  listarPlanificacion() {
    this.planificacionService.getPlanificaciones(this.txtIdConvenio).subscribe(
      plan => {
        this.datosPlanificacion = plan;
        this.opcionesPeriodo = this.datosPlanificacion.map(planificacion => planificacion.strperiodo);
        
      }
    );
  }

  crearIdInforme(){
    this.txtIdInforme=this.txtIdConvenio+'_'+this.txtPeriodo;
    console.log(this.txtIdInforme)
  }

  async borrar(){
      if(this.titulo==='Eliminar Miembro'){
        console.log('convenio',this.txtIdInforme,'ci equipo',this.txtCiEquipo)
          this.miembroService.deleteMiembro(this.txtIdInforme,this.txtCiEquipo).subscribe(
            (response:any)=>{
                  console.log(response)
              if(response.message === 'miembro eliminado'){
                this.messageService.add({ severity:'success',summary: this.nombre+' '+this.mensaje.EliminadoCorrectamente})
                this.modalBorrar=false;
                this.listarMiembros();
              }
            }
          )

      }else{
          if( this.titulo==='Eliminar Actividad'){
              this.actividadService.deleteActividad(this.txtIdInforme,this.txtNumActividad).subscribe(
                (response:any)=>{
                  if(response.message==='Actividad ELiminada'){
                    this.messageService.add({ severity:'success',summary: this.nombre+' '+this.mensaje.EliminadoCorrectamente})
                    this.modalBorrar=false;
                    this.listarActividad();
                  }
                }
              )
          }else{
            if(this.titulo==='Eliminar Informe'){
              //pendiente construir servicio
            }
          }
      }
  }

  eliminarInforme(id:IInforme){
    this.modalBorrar=true
    this.titulo="Eliminar Informe"
    this.txtConfirmacion='¿Realmente desea eliminar este informe?'
    this.botonVisible=true
    console.log('entra')
    if(id.c_strestadoinforme==="Validado"){
      this.txtConfirmacion="No se puede eliminar un informe validado"
      this.botonVisible=false
      console.log('no deja ')
    }
    this.idInforme=id.c_stridinforme
    
  }

  //SUBIR ANEXO INFORME ONE DRIVE 

  async uploadFile(){
      
    if(!this.archivoSubir){
      console.log('no hay archivo')
      return
    }

    const jwt = await this.oneDrive.getjwt();

    if(!jwt|| jwt === null){
      console.log('no se obtuvo el token')
      return
    }
    const{token}=jwt;

    const requestData:any ={ 
      TokenData:token,
      file: this.archivoSubir,
      fileName: 'nombre'
    }

    const result = await this.oneDrive.upload(requestData,this.txtArchivo)
    console.log('resultado', result)
  }

  seleccionarArchivo(archivo:any){
    this.archivoSubir=archivo.currentFiles[0]
  }

  async downloadFile(id:IInformeConvenio){
    this.modalVerArchivo=true
    console.log(id.c_stranexo)
    const nombreArchivo =id.c_stranexo.split('/');
    
    
    
    const respuesta = await this.oneDrive.download(id.c_stranexo,nombreArchivo[4])
    if(!respuesta || !respuesta.success) {
      return;
    }
    console.log("final",respuesta);
    
    this.safePdfUrl = respuesta.data;
      
     
  }

}




