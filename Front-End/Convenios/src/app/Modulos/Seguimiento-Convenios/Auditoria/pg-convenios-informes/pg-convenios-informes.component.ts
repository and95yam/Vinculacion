import { Component } from '@angular/core';
import { IConvenio3 } from 'src/app/Modulos/Admin-Convenios/Clases/cConvenio/i-convenio';
import { SConvenioService } from 'src/app/Modulos/Admin-Convenios/Clases/cConvenio/s-convenio.service';
import { OneDriveService } from 'src/app/Modulos/plantillas/oneDrive/one-drive.service';
import { SafeResourceUrl } from '@angular/platform-browser';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs=pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pg-convenios-informes',
  templateUrl: './pg-convenios-informes.component.html',
  styleUrls: ['./pg-convenios-informes.component.css']
})
export class PgConveniosInformesComponent {
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

  //Variables One Drive 

  safePdfUrl:SafeResourceUrl | undefined;
  modalVerArchivo:boolean=false;


  constructor(
    private convenioService:SConvenioService,
    private oneDrive:OneDriveService
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

 redirectListaInformes(id: IConvenio3){
  const nuevaPagina = 'PgInformesConvenio';
  const idConvenio = encodeURIComponent(id.c_stridconvenio);
  const url = `${nuevaPagina}?idConvenio=${idConvenio}`;
  window.open(url, '_blank');
  console.log(id.c_stridconvenio);
}

//ONE DRIVE 

async downloadFile(id:IConvenio3){
  this.modalVerArchivo=true;
  const nombreArchivo =id.c_strarchivoconvenio.split('/');
  
  console.log(id.c_strarchivoconvenio)
  const respuesta = await this.oneDrive.download(id.c_strarchivoconvenio,nombreArchivo[4])
  if(!respuesta || !respuesta.success) {
    return;
  }
  console.log("final",respuesta);
  
  this.safePdfUrl = respuesta.data;
    
   
}

//Reporte Informes 

generarPDFid(dato: IConvenio3) {
  // Definir el contenido del PDF
  const documentDefinition: any = {
    pageOrientation: 'portrait', // Cambiar a orientación vertical
    header: {
      text: 'Información de Convenio', style: 'header' ,bold:true
      //image: 'path_to_header_image', // Ruta de la imagen para la cabecera
      //width: 100, // Ancho de la imagen
      //alignment: 'center' // Alineación de la imagen
    },
    footer: {
      //image: 'path_to_footer_image', // Ruta de la imagen para el pie de página
      //width: 100, // Ancho de la imagen
      //alignment: 'center' // Alineación de la imagen
    },
    background: [
      {
        //image: 'assets/imagenes/espoch.jpg',
        // Ruta de la imagen de marca de agua
        //width: 400, // Ancho de la imagen de marca de agua
        //opacity: 0.5 // Opacidad de la imagen de marca de agua*/
      }
    ], 
    content: [
      { text: 'Información General', style: 'header' },
      
      
      { text: '\n' },
      {
        layout: 'noBorders',
        table: {
          widths: ['20%', '80%'],
          body: [
            [{ text: 'Resolución N:', bold: true }, { text: dato.c_stridconvenio }],
            [{ text: 'Título Convenio:', bold: true }, { text: dato.c_strtituloconvenio }],
            [{ text: 'Objetivo:', bold: true }, { text: dato.c_strobjetivoconvenio }],
            [{ text: 'Coordinador:', bold: true }, { text: dato.c_strnombrescoordinador }],
            [{ text: 'Email:', bold: true }, { text: dato.c_strcorreocoordinador }],
            [{ text: 'Teléfono:', bold: true }, { text: dato.c_strtelefonocoordinador }],
            [{ text: 'Naturaleza:', bold: true }, { text: dato.c_strnaturalezaconvenio }],
            [{ text: 'Clasificación:', bold: true }, { text: dato.c_strclasificacionconvenio }],
            [{
              text: 'Ejes:',
              bold: true
            },
            {
              table: {
                body: [
                  [
                    { text: dato.c_blnacademico ? 'Académico' : '', border: [false, false, true, true] },
                    { text: dato.c_blninvestigacion ? 'Investigación' : '', border: [false, false, true, true] },
                    { text: dato.c_blnpracticas ? 'Prácticas' : '', border: [false, false, true, true] },
                    { text: dato.c_blnvinculacion ? 'Vinculación' : '', border: [false, false, false, true] }
                  ]
                ]
              }
            }
            ],

            [{ text: 'Instituciones:', bold: true }, 
            {text:''}],
            [{ text: 'ESPOCH:', bold: true }, { text: dato.c_strinstitucion }],
            [{ text: 'Fecha Inicio:', bold: true }, { text: dato.c_dtfechainicioconvenio }],
            [{ text: 'Fecha Fin:', bold: true }, { text: dato.c_dtfechafinconvenio }],
            [{ text: 'Vigencia:', bold: true }, { text: dato.c_strvigencia }],
            
           
          ]
        }
      },
      { text: '\n' },
      
      { text: '\n' },
      {
        canvas: [
          {
            type: 'line',
            x1: 0, y1: 5,
            x2: 595 - 2 * 40, y2: 5,
            lineWidth: 1
          }
        ]
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

  pdfMake.createPdf(documentDefinition).download('informacion_convenio.pdf');
}

}
