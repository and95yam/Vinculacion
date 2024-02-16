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
  PaginaInicio:string="https://localhost:4200/PgInicio"

  //Modulo seguridad
  rol: string ="http://localhost:3000/rol";
  accion: string="http://localhost:3000/accion"
  funcion:string="http://localhost:3000/funcion"
  perfil:string="http://localhost:3000/perfil"
  perfilRol:string="http://localhost:3000/perfilyrol"
  perfilPerID:string="http://localhost:3000/perfilPerId"

  grupo:string="http://localhost:3000/grupo"
  usuario:string="http://localhost:3000/usuario"
  bdCentralizada:string="https://centralizada2.espoch.edu.ec/rutadinardap/obtenerpersona/"

  //Enviroment Cas

  CASLOGIN:string= 'https://seguridad.espoch.edu.ec/cas/login?'
  CASLOGOUT:string= 'https://seguridad.espoch.edu.ec/cas/logout?'
  CASVALIDATE:string= 'https://seguridad.espoch.edu.ec/cas/p3/serviceValidate?'
  REDIRECT_URI: string='https://localhost:4200/PgCas'
  REDIRECT_URIINDEX:string= 'https://localhost:4200/'
  REDIRECT_URL_SINCESSO:string='https://localhost:4200/sinacceso'
  LOGOUT_REDIRECT:string= 'https://localhost:4200/logout'
  ERRORCAS_REDIRECT:string= 'https://localhost:4200/errorcas'
  LOGOUT_CORREO: string='https://login.microsoftonline.com/common/oauth2/logout?'
  VALIDATENODEJS:string= 'https://precas.espoch.edu.ec/ServicioWebComprobantes/ServiciosComprobantes/ValidateCas/'

 
}
