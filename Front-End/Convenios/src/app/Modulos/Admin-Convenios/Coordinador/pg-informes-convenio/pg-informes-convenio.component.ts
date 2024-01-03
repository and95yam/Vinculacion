import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SCoordinadorService } from '../../Clases/cCoordinador/s-coordinador.service';
import { IConvenio3 } from '../../Clases/cConvenio/i-convenio';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';
import { SConvenioService } from '../../Clases/cConvenio/s-convenio.service';

@Component({
  selector: 'app-pg-informes-convenio',
  templateUrl: './pg-informes-convenio.component.html',
  styleUrls: ['./pg-informes-convenio.component.css']
})
export class PgInformesConvenioComponent {

  dir: DireccionesApi = new DireccionesApi;
  dirConvenio=this.dir.datosConvenio

  infoConvenio!:IConvenio3[];
  txtIdConvenio!:string;
  tituloConvenio!:string;
  blnVigente!:boolean;
  txtNaturaleza!:string;
  txtClasificacion!:string;
  blnAcademico!:boolean;
  blnInvestigacion!:boolean;
  blnVinculacion!:boolean;
  blnPracticas!:boolean;
  dtFechaInicio!:Date;
  dtFechaFin!:Date;
  txtRazon!:string;
  txtInstitucion!:string;


  constructor(
    private route: ActivatedRoute,
    private convenioService:SConvenioService
    
  ){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const idConvenio = params['idConvenio'];
      this.txtIdConvenio=idConvenio;
      console.log(this.txtIdConvenio);
      this.datosConvenio();
    });
  }

 datosConvenio(){
    this.convenioService.getConvenioId(this.txtIdConvenio).subscribe(
      (conv)=>{
        this.infoConvenio=conv;
        if(this.infoConvenio.length>0){
          this.tituloConvenio=this.infoConvenio[0].c_strtituloconvenio;
          this.txtNaturaleza=this.infoConvenio[0].c_strnaturalezaconvenio;
          this.txtClasificacion=this.infoConvenio[0].c_strclasificacionconvenio;
          this.blnAcademico=this.infoConvenio[0].c_blnacademico;
          this.blnInvestigacion=this.infoConvenio[0].c_blninvestigacion;
          this.blnPracticas=this.infoConvenio[0].c_blnpracticas;
          this.blnVinculacion=this.infoConvenio[0].c_blnvinculacion;
          this.dtFechaInicio=this.infoConvenio[0].c_dtfechainicioconvenio;
          this.dtFechaFin=this.infoConvenio[0].c_dtfechafinconvenio;
          this.txtInstitucion=this.infoConvenio[0].c_strinstitucion;
        }
      }
    )
 }
  
}
