import { Injectable } from '@angular/core';

@Injectable()

export class DireccionesApi{

  dependencia: string ="http://localhost:3000/convenio/dependencia";
  coordinador: string="http://localhost:3000/convenio/coordinador";
  insititucion: string="http://localhost:3000/convenio/institucion";
  convenioTabla: string="http://localhost:3000/convenio_tabla";
  datosConvenio:string="http://localhost:3000/convenio";
  convenioCordinador:string="http://localhost:3000/convenio_coordinador";
  planificacion:string="http://localhost:3000/planificacion";
  informe:string="http://localhost:3000/informe";
  informeCoordinador:string="http://localhost:3000/informe_coordinador";
  informeDatos:string="http://localhost:3000/informe_datos";
  convenioInforme:string="http://localhost:3000/convenio_informe";
  convenioInvitado:string="http://localhost:3000/convenio_invitado"
  miembroInforme:string="http://localhost:3000/miembro";
  actividadInforme:string='http://localhost:3000/actividad';
  informesDeConvenios:string='http://localhost:3000/informe_convenio';
  informeMensual:string="http://localhost:3000/informeMensual"
  informePendiente:string="http://localhost:3000/informesPediente"
  informeValidado:string="http://localhost:3000/informeValidado"
  evaluacionInforme:string="http://localhost:3000/evaluar"

  //Modulo seguridad
  rol: string ="http://localhost:3000/rol";
  accion: string="http://localhost:3000/accion"
  funcion:string="http://localhost:3000/funcion"
  perfil:string="http://localhost:3000/perfil"
  perfilRol:string="http://localhost:3000/perfilyrol"

  grupo:string="http://localhost:3000/grupo"


  cedula1:string="1727090225"
  cedula2:string="1001833647"
  cedula3:string="0605018993"
}
