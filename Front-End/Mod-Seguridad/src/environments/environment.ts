// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  env: 'Desarrollo',
  CASLOGIN: 'https://seguridad.espoch.edu.ec/cas/login?',
  CASLOGOUT: 'https://seguridad.espoch.edu.ec/cas/logout?',
  CASVALIDATE: 'https://seguridad.espoch.edu.ec/cas/p3/serviceValidate?',
  REDIRECT_URI: 'https://localhost:8080/cas',
  LOGOUT_REDIRECT: 'https://localhost:8080',
  LOGOUT_CORREO: 'https://login.microsoftonline.com/common/oauth2/logout?',
  VALIDATEJAVA: 'https://servicioscomprobante.espoch.edu.ec/ServicioWebComprobantes/ServiciosComprobantes/ValidateCas/',


  //SERVICES
  urlSistemaLocal: 'https://pruebas.espoch.edu.ec/wsadmision/', //Servicios Edison Node js
  urlSistemaLocalJs: 'https://pruebasw.espoch.edu.ec:3008/', // Servicios Admision  Nodejs
  urlDinardap: 'https://pruebasw.espoch.edu.ec:3006/rutadinardap', // Servicios Admision  Nodejs
  //urlCentral: 'https://pruebasw.espoch.edu.ec:3006/rutaCentral', // Servicios Admision  Nodejs
  urlCentral: 'https://centralizada2.espoch.edu.ec/rutaCentral', //TODO: Servicios Admision  Nodejs
  urlComprobantes: 'https://swordenespago.espoch.edu.ec/', //Servicios Comprobantes
  urlTalentoHumano: 'https://swtalentohumano.espoch.edu.ec/', //servicios Talento Humano
  urlSeguimientoGraduado: 'https://swgraduados.espoch.edu.ec/', //Servicios Seguimiento Graduado
  urlEmail: 'https://emailrelay.espoch.edu.ec/', // Servicio Envio de Correo
  urlCentralizada: 'https://centralizada2.espoch.edu.ec/rutadinardap/', // Servicios Admision Laurita Nodejs
  userPostulante: '',
  passPostulante: '',
  claveCorreoOneDrive: 'Adm1s1onN1v3l@c1On',

  idAppOndrive: '4',
  urlOneDrie: 'https://pruebas.espoch.edu.ec/wsrepositorio/rutaRepositorio/',
  urlSistemaFirmaLocal: 'https://pruebas.espoch.edu.ec/wsfirmaec/', //Servicios Edison Node js
  urlSistemaVinculacion: 'https://pruebasw.espoch.edu.ec:3011/wsVinculacion/', //Servicios Edison Node js

  vinculacionDns: 'http://localhost:3000'

};


