import { Component } from '@angular/core';
import { SInformeService } from '../../Clases/cInforme/s-informe.service';
import { IInforme } from '../../Clases/cInforme/i-informe';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';//temporal por las cedulas y roles


@Component({
  selector: 'app-pg-informes',
  templateUrl: './pg-informes.component.html',
  styleUrls: ['./pg-informes.component.css']
})
export class PgInformesComponent {

  dir:DireccionesApi = new DireccionesApi
  ced:string=this.dir.cedula1

  informe!:IInforme[];

  constructor(
    private informeService:SInformeService
  ){}

  ngOnInit():void{
    this.listarInformes();
  }

  listarInformes(){
      this.informeService.getInformeCoord(this.ced).subscribe(
        inf=>{
          this.informe= inf
          console.log(inf)
        }
      )
  }



}
