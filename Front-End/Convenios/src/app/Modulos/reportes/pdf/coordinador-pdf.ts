import { ICoordinador } from '../../../Modulos/Admin-Convenios/Clases/cCoordinador/i-coordinador'
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs=pdfFonts.pdfMake.vfs;

export class CoordinadorPdf {
  coordinador!: ICoordinador[];

  generarPDF() {
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

}
