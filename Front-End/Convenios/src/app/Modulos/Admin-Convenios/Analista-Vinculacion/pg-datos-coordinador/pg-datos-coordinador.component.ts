import { Component,ViewChild,ChangeDetectorRef} from '@angular/core';
import {MessageService} from 'primeng/api';
import {MensajesConvenios} from '../../../../../herramientas/Mensajes/MensajesConvenios';
import { ICoordinador } from '../../Clases/cCoordinador/i-coordinador';
import { SCoordinadorService } from '../../Clases/cCoordinador/s-coordinador.service';
import { Cedula } from '../../Clases/cedula';
import { NgModel } from '@angular/forms';
import { SDependenciaService } from '../../Clases/cDependencia/sDependencia.service';
import { cGetDependencia } from '../../Clases/cDependencia/cDependencia';
import {CoordinadorPdf} from '../../../reportes/pdf/coordinador-pdf';//capas no
//import { ElementRef } from '@angular/core';// Accede al elemento json
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs=pdfFonts.pdfMake.vfs;

import * as xlsx from 'xlsx';


@Component({
  selector: 'app-pg-datos-coordinador',
  templateUrl: './pg-datos-coordinador.component.html',
  styleUrls: ['./pg-datos-coordinador.component.css'],
  providers: [MessageService]
})
export class PgDatosCoordinadorComponent {
  @ViewChild('txtCiCoordinador') txtCiCoordinadorModel!:NgModel;

   mensaje:MensajesConvenios=new MensajesConvenios;//instancia de clase mensajes
   cedula:Cedula= new Cedula;//Instancia de clase cedula
   pdf:CoordinadorPdf= new CoordinadorPdf;// instancia para generar pdf
   isGuardarButtonDisabled: boolean = true;//desactivar boton guardar
   dependencias!:cGetDependencia[];//para cargar las dependencias
   intIdDependenciaS!:number;// objeto que tiene todas las dependencias


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
    this.readonlyMode= false;
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

  generarPDF() {// proximamente clase
    // Definir el contenido del PDF
    const data =[];
    data.push(['CÉDULA', 'NOMBRES', 'CORREO', 'TELÉFONO', 'DEPENDENCIA']);

    for ( const dato of  this.coordinador){
      data.push([
        dato.strcicoordinador,
        dato.strnombrescoordinador,
        dato.strcorreocoordinador,
        dato.strtelefonocoordinador,
        dato.strnombredependencia,

      ]);
    }

    const documentDefinition: any = {
      content: [
        { text: 'Reporte de Coordinadores', style: 'header' },
        { text: '\n' },
        {
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 'auto', 'auto', 'auto'],
            body: data, // Usar la matriz de datos aquí
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          fillColor: '#3498db',
          color: 'white'
        }
      }
    };

    pdfMake.createPdf(documentDefinition).download('reporte_coordinadores.pdf');
  }


  generarXlsx() {
    if (this.coordinador && this.coordinador.length > 0) {
      const datos: any[][] = this.coordinador.map(item => [
        item.strcicoordinador,
        item.strnombrescoordinador,
        item.strcorreocoordinador,
        item.strtelefonocoordinador,
        item.strnombredependencia,
      ]);

      const worksheet = xlsx.utils.aoa_to_sheet([['CEDULA', 'NOMBRES', 'CORREO', 'TELEFONO', 'DEPENDENCIA'], ...datos]);
      const workbook = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(workbook, worksheet, 'Reporte de Coordinadores');

      // Genera el archivo XLSX en formato base64
      const xlsxData = xlsx.write(workbook, { bookType: 'xlsx', type: 'base64' });

      // Convierte el archivo XLSX en un Blob
      const blobData = this.base64toBlob(xlsxData, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

      // Crea un objeto URL y un enlace para descargar el archivo
      const blobUrl = window.URL.createObjectURL(blobData);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = 'reporte_coordinadores.xlsx';
      a.click();
      window.URL.revokeObjectURL(blobUrl);
    } else {
      console.log('No hay datos de coordinadores para generar el archivo XLSX.');
    }
  }

  base64toBlob(base64: string, mimeType: string) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  }





}
