import { Component,ViewChild,ChangeDetectorRef} from '@angular/core';
import {MessageService} from 'primeng/api';
import {MensajesConvenios} from '../../../../../herramientas/Mensajes/MensajesConvenios';
import { ICoordinador } from '../../Clases/cCoordinador/i-coordinador';
import { SCoordinadorService } from '../../Clases/cCoordinador/s-coordinador.service';
import { Cedula } from '../../Clases/cedula';
import { NgModel } from '@angular/forms';
import { SDependenciaService } from '../../Clases/cDependencia/sDependencia.service';
import { cGetDependencia } from '../../Clases/cDependencia/cDependencia';
//import { ElementRef } from '@angular/core';// Accede al elemento json


@Component({
  selector: 'app-pg-datos-coordinador',
  templateUrl: './pg-datos-coordinador.component.html',
  styleUrls: ['./pg-datos-coordinador.component.css'],
  providers: [MessageService]
})
export class PgDatosCoordinadorComponent {
  @ViewChild('txtCiCoordinador') txtCiCoordinadorModel!:NgModel;

   mensaje:MensajesConvenios=new MensajesConvenios;
   cedula:Cedula= new Cedula;
   isGuardarButtonDisabled: boolean = true;
   dependencias!:cGetDependencia[];//para cargar las dependencias
   intIdDependenciaS!:number;


    loading: boolean = true;
    submitted!: boolean;
    readonlyMode: boolean = false;
    coordinador!: ICoordinador[];
    nuevoModal:boolean=false;
    titulo:string ="";
    nombre: string="";
    //los txt de los campos a ingresar van aqui //
    txtCiCoordinador : string ="";
    txtNombres: string="";
    txtCorreo: string="";
    txtTelefono: string="";
    txtdependencia:string="";

  constructor(
    private  coordinadorService:SCoordinadorService,
    private dependenciaService: SDependenciaService,//para seleccionar dependencia
    private  messageService:MessageService,
    private changeDetectorRef:ChangeDetectorRef,
  ){}

  ngOnInit():void{
    this.listarCoordinadores();


  }

  listarCoordinadores(){
    this.coordinadorService.getAllCoordinador().subscribe(
      coord=>{
        this.coordinador=coord;

      }
    );

  }

   validarCedula(){
    const ok = Cedula.validarCedula(this.txtCiCoordinador);
    if(this.txtCiCoordinador.length===10){
      if(ok===false){

        this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.CedularIncorrecta});

        this.isGuardarButtonDisabled = true;
      }else{

        this.isGuardarButtonDisabled = false;
      }
    }

   }

  nuevo(){
    this.nuevoModal=true;
    this.titulo="Agregar Coordinador";
    this.isGuardarButtonDisabled=true;
    this.txtCiCoordinador="";
    this.txtNombres="";
    this.txtCorreo="";
    this.txtTelefono="";
    this.txtdependencia="";
    this.submitted=false;
    this.cargarDependencia();

  }

  editarCoordinador(id:ICoordinador){

    this.nuevoModal=true;
    this.titulo="Editar Coordinador";
    this.readonlyMode=true;
    this.isGuardarButtonDisabled=false;

    this.submitted=false;
    this.txtCiCoordinador=id.strcicoordinador;
    this.txtNombres=id.strnombrescoordinador;
    this.txtCorreo=id.strcorreocoordinador;
    this.txtTelefono=id.strtelefonocoordinador;
    this.txtdependencia=id.strnombredependencia;
    this.cargarDependencia();
    this.getIdDependencia(this.txtdependencia);

  }

  cargarDependencia(){

    this.dependenciaService.getAll().subscribe(
      dep => {
        this.dependencias = dep;

        this.changeDetectorRef.detectChanges();
      }
    );

  }

  //REVISAR POR SI ACASO EN UN FUTURO ESTA FUNCION //

 /* seleccionarDependencia(event: { value: { intiddependencia: number; }; }){
    this.intIdDependenciaS =event.value.intiddependencia;
    console.log(this.intIdDependenciaS)
  }*/

  getIdDependencia(event:any){

    const objetoSeleccionado = this.dependencias.find(dep=>dep.strnombredependencia === this.txtdependencia);
    if(objetoSeleccionado){
      this.intIdDependenciaS=objetoSeleccionado.intiddependencia;
      console.log(this.intIdDependenciaS);

    }
  }



  async guardarCoordinador(){
    this.nombre="Coordinador";
    const resp =this.checkAccion(this.titulo);

    if (resp=== true){//Agregar coordinador

      if(!this.txtCiCoordinador||!this.txtNombres||!this.txtCorreo||!this.txtTelefono||!this.txtdependencia){
        this.submitted=true;
        return;
      }

      const nuevoCoordinador ={
        strcicoordinador:this.txtCiCoordinador,
        intiddependencia:this.intIdDependenciaS,
        strnombrescoordinador:this.txtNombres,
        strcorreocoordinador:this.txtCorreo,
        strtelefonocoordinador:this.txtTelefono
      };

      this.coordinadorService.createCoordinador(nuevoCoordinador).subscribe(
        (response:any)=>{
          if(response.message=="coordinador creado"){
            this.messageService.add({severity:'success',summary:this.nombre+' '+this.mensaje.IngresadoCorrectamente});
            console.log('Coordinador Agregado');//quitar cuando se termine
            this.nuevoModal=false;
            this.listarCoordinadores();
          }else{
            this.messageService.add({ severity: 'error', summary: this.nombre+' '+this.mensaje.ErrorProceso});

          }
        },
        (error)=>{
          console.error('Error de la solicitud HTTP:' , error);
        }
      );

    }else{
      if( resp === false){//Modificar coordinador
        console.log('se modifica coordinador');

        if(!this.txtCiCoordinador||!this.txtNombres||!this.txtCorreo||!this.txtTelefono||!this.txtdependencia){
          this.submitted=true;
          return;
        }

        const editCoordinador ={
          strcicoordinador:this.txtCiCoordinador,
          intiddependencia:this.intIdDependenciaS,
          strnombrescoordinador:this.txtNombres,
          strcorreocoordinador:this.txtCorreo,
          strtelefonocoordinador:this.txtTelefono
        };

        this.coordinadorService.updateCoordinador(editCoordinador,this.txtCiCoordinador).subscribe(
          (response:any)=>{

            if(response=="coordinador actualizado"){
              this.messageService.add({severity:'success',summary:this.nombre+' '+this.mensaje.ModificadoCorrectamente});
              this.nuevoModal=false;
              this.listarCoordinadores();
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

  checkAccion(text:string){//verificar accion si es agregar o modificar
    if(text==="Agregar Coordinador"){
      console.log('nuevo coordinador');
      return true;

    }else{
      console.log('Mod coordinador');
      return false;
    }
  }




}
