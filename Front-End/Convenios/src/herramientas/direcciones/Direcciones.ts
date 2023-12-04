import { Injectable } from '@angular/core';

@Injectable()

export class DireccionesApi{

  dependencia: string ="http://localhost:3000/convenio/dependencia";
  coordinador: string="http://localhost:3000/convenio/coordinador";
  insititucion: string="http://localhost:3000/convenio/institucion";
  convenioTabla: string="http://localhost:3000/convenio_tabla";
  datosConvenio:string="http://localhost:3000/convenio";
  convenioCordinador:string="http://localhost:3000/convenio_coordinador"
  //Modulo seguridad
  rol: string ="http://localhost:3000/rol";
  accion: string="http://localhost:3000/accion"
  funcion:string="http://localhost:3000/funcion"

  grupo:string="http://localhost:3000/grupo"


  cedula1:string="0955416755"
  cedula2:string="0955416755"
  cedula3:string="0605018993"
}
