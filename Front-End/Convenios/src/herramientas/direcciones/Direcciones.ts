import { Injectable } from '@angular/core';

@Injectable()

export class DireccionesApi{
  host:string ="http://localhost:3020/wsconvenios"
  dependencia: string =this.host+"/convenio/dependencia";
  coordinador: string = this.host + "/convenio/coordinador";
  institucion: string = this.host + "/convenio/institucion";
  convenioTabla: string = this.host + "/convenio_tabla";
  datosConvenio: string = this.host + "/convenio";
  convenioCordinador: string = this.host + "/convenio_coordinador";
  planificacion: string = this.host + "/planificacion";
  informe: string = this.host + "/informe";
  informeCoordinador: string = this.host + "/informe_coordinador";
  informeDatos: string = this.host + "/informe_datos";
  convenioInforme: string = this.host + "/convenio_informe";
  convenioInvitado: string = this.host + "/convenio_invitado";
  miembroInforme: string = this.host + "/miembro";
  actividadInforme: string = this.host + "/actividad";
  informesDeConvenios: string = this.host + "/informe_convenio";
  informeMensual: string = this.host + "/informeMensual";
  informePendiente: string = this.host + "/informesPediente";
  informeValidado: string = this.host + "/informeValidado";
  evaluacionInforme: string = this.host + "/evaluar";

  PaginaInicio:string="https://localhost:4200/PgInicio"


  //Modulo seguridad
  rol: string = this.host + "/rol";
  accion: string = this.host + "/accion";
  funcion: string = this.host + "/funcion";
  perfil: string = this.host + "/perfil";
  perfilRol: string = this.host + "/perfilyrol";
  perfilRol2: string = this.host + "/perfilyrol2";
  perfilPerID: string = this.host + "/perfilPerId";
  gestionPerfil: string = this.host + "/gestionPerfil";
  /*rol: string ="http://localhost:3000/rol";
  accion: string="http://localhost:3000/accion"
  funcion:string="http://localhost:3000/funcion"
  perfil:string="http://localhost:3000/perfil"
  perfilRol:string="http://localhost:3000/perfilyrol"
  perfilRol2:string="http://localhost:3000/perfilyrol2"
  perfilPerID:string="http://localhost:3000/perfilPerId"
  gestionPerfil:string="http://localhost:3000/gestionPerfil"
  grupo:string="http://localhost:3000/grupo"
  usuario:string="http://localhost:3000/usuario"*/
  grupo: string = this.host + "/grupo";
  usuario: string = this.host + "/usuario";
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

 // ONE DRIVE

 API_ONEDRIVE: string= 'https://apiarchivos.espoch.edu.ec/wsrepositorio/rutaRepositorio/'

}
