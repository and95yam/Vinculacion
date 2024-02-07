import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';



import { HttpService } from './http.service';
//import * as x2js from 'xml2js';

declare var URL: any;
var redirect = '';

@Injectable({
  providedIn: 'root'
})
export class CasClient {
  public cadena!: string[];

  link: DireccionesApi = new DireccionesApi; 
  url:string= this.link.actividadInforme;

  constructor(
    private http: HttpService,
   
  ) { }

  public Redirect() {
    redirect = this.link.CASLOGIN + 'service=' + encodeURIComponent(this.link.REDIRECT_URI);
    window.open(redirect, '_self');
  }

  public LogoutCas() {
    var Autenticacion = sessionStorage.getItem('clientName');
    var logout = '';
    if (Autenticacion == 'Institucional') {
      sessionStorage.clear();
      logout =
        this.link.LOGOUT_CORREO +
        'post_logout_redirect_uri=' +
        encodeURIComponent(this.link.CASLOGOUT) +
        'service=' +
        encodeURIComponent(this.link.LOGOUT_REDIRECT);
      window.location.href = logout;
    } else {
      sessionStorage.clear();
      logout =
        this.link.CASLOGOUT +
        'service=' +
        encodeURIComponent(this.link.LOGOUT_REDIRECT);
      window.location.href = logout;
    }
  }

  public verificaLogin(): Promise<any> {
    if (!this.isAuthenticated()) {
      this.Redirect();
    }
    return this.validateLogin();
  }



  async validateLogin() {
    
    var service = encodeURIComponent(this.link.REDIRECT_URI);
    var ticket = sessionStorage.getItem('ticketUser');
    var urlvalidate = this.link.VALIDATENODEJS + 'service=' + service + '&ticket=' + ticket;
    let sucesso: any = '';
    var datosCasTiket = await new Promise<any>((resolve) => this.http.doGetUrlXML(urlvalidate).subscribe((translated) => { resolve(translated); }));
    console.log("original", datosCasTiket)
    let success = datosCasTiket.split('<cas:authenticationSuccess>')[1]?.split('</cas:authenticationSuccess>')[0] ?? undefined;
    console.log("success")
    console.log(success)
    if (success != undefined) {
      var atributos: any = datosCasTiket.split('<cas:attributes>')[1]?.split('</cas:attributes>')[0] ?? undefined;
      var perid: any = atributos.split('<cas:perid>')[1]?.split('</cas:perid>')[0] ?? undefined;
      var clientName: any = atributos.split('<cas:clientName>')[1]?.split('</cas:clientName>')[0] ?? undefined;
      var UserCedula: any = atributos.split('<cas:cedula>')[1]?.split('</cas:cedula>')[0] ?? undefined;
      sessionStorage.setItem('perid', perid);
      sessionStorage.setItem('clientName', clientName);
      sessionStorage.setItem('UserCedula', UserCedula);
      if (clientName == 'Institucional') {
        console.log("todo bien Correo Institucional")
       // window.location.href = this.link.REDIRECT_URI;
      } else {
        //Habilitar para pruebas
        console.log("todo bien Cuenta Centralizada")
      //  window.location.href = this.link.REDIRECT_URI;
       // this.LogoutCas();
      }
    } else {
    //  this.LogoutCas();
      console.log("error")
    }
    return null;
  }

 

  public urlWithoutTicket(url: string): string {
    return url.replace(/(^|[&?])ticket(=[^&]*)?/, '');
  }

  public uniqueUrl(url: string) {
    var unique_url = url;
    unique_url += url.indexOf('?') === -1 ? '?' : '&';
    unique_url += '_=' + new Date().getTime();
    return unique_url;
  }

  public isAuthenticated(): boolean {
    var rawIdToken = sessionStorage.getItem('ticketUser');
    return this.isNotEmpty(rawIdToken);
  }

  public remove() {
    window.sessionStorage.removeItem('ticketUser');
    window.sessionStorage.removeItem('clientName');
    window.sessionStorage.removeItem('perid');
    sessionStorage.clear();
  }

  public isNotEmpty(obj:any): boolean {
    return !this.isEmpty(obj);
  }

  public isEmpty(obj:any): boolean {
    return (
      obj == undefined ||
      obj == null ||
      obj == '' ||
      obj == ' ' ||
      obj == 'undefined'
    );
  }

  public saveTicket() {
    let ticket = window.location.search.replace('?ticket=', '');
    if (ticket != null) {
      sessionStorage.setItem('ticketUser', ticket);
    }
  }
  public getLogin() {
    return this.isNotEmpty(sessionStorage.getItem('perid'));
  }
  public getCedula() {
    return sessionStorage.getItem('UserCedula');
  }
  public getPerId() {
    return sessionStorage.getItem('perid');
  }
  public ReadTicket(url: string): String {
    var intIndex: boolean = url.includes('ticket');
    if (intIndex) {
      this.cadena = url.split('=');
      var rawClientInfo:any = this.cadena[1];
      sessionStorage.setItem('ticketUser', this.cadena[1]);
      return rawClientInfo;
    } else {
      return rawClientInfo;
    }
  }
}
