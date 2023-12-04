import { Component } from '@angular/core';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';//Temporal
import { SConvenioService } from '../../Clases/cConvenio/s-convenio.service';
import { IConvenio } from '../../Clases/cConvenio/i-convenio';

@Component({
  selector: 'app-pg-lista-convenios-coord',
  templateUrl: './pg-lista-convenios-coord.component.html',
  styleUrls: ['./pg-lista-convenios-coord.component.css']
})
export class PgListaConveniosCoordComponent {

  dir:DireccionesApi = new DireccionesApi
  ced:string=this.dir.cedula1

  convenios!:IConvenio[]

  constructor(
    private convenioService:SConvenioService
  ){}

  ngOnInit():void{
    this.listaConvenios()
    console.log(this.ced)
  }

  listaConvenios(){
    this.convenioService.getConvenioCord(this.ced).subscribe(
      conv=>{
        this.convenios=conv
        console.log(conv)
      }
    );
  }
}
