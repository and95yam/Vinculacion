import { Injectable } from '@angular/core';

@Injectable()

export class DireccionesApi{

  dependencia: string ="http://localhost:3000/convenio/dependencia";
  coordinador: string="http://localhost:3000/convenio/coordinador";
  insititucion: string="http://localhost:3000/convenio/institucion";
  convenioTabla: string="http://localhost:3000/convenio_tabla";
  datosConvenio:string="http://localhost:3000/convenio";

}
