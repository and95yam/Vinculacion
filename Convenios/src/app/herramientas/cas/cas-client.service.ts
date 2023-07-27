import { Inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { DOCUMENT } from '@angular/common';

import { environment } from './../../../environments/environment';

@Injectable({
   providedIn: 'root',
})
export class CasClientService {
   public cadena: string[] = [];

   private REDIRECT_URI: string = environment.REDIRECT_URI;
   private CASLOGIN: string = environment.CASLOGIN;
   private LOGOUT_CORREO: string = environment.LOGOUT_CORREO;
   private CASLOGOUT: string = environment.CASLOGOUT;
   private LOGOUT_REDIRECT: string = environment.LOGOUT_REDIRECT;
   private VALIDATEJAVA: string = environment.VALIDATEJAVA;

   constructor(private http: HttpService, @Inject(DOCUMENT) document: any) { }

   public Redirect() {
      let redirect =
         this.CASLOGIN + 'service=' + encodeURIComponent(this.REDIRECT_URI);
      window.open(redirect, '_self');
   }

   public Logout() {
      var Autenticacion = sessionStorage.getItem('clientName');
      var logout = '';
      this.remove();
      if (Autenticacion == 'Institucional') {
         logout = this.LOGOUT_CORREO + 'post_logout_redirect_uri=' + encodeURIComponent(this.CASLOGOUT) + 'service=' + encodeURIComponent(this.LOGOUT_REDIRECT);
         window.location.href = logout;
      } else {
         logout = this.CASLOGOUT + 'service=' + encodeURIComponent(this.LOGOUT_REDIRECT);
         window.location.href = logout;
      }
   }

   public verificaLogin(): Promise<any> {
      if (!this.isAuthenticated()) {
         this.Redirect();
      }
      return this.validateLogin();
   }

   public validateLogin() {
      var service = encodeURIComponent(this.REDIRECT_URI);
      var ticket = sessionStorage.getItem('ticketUser');
      var urlvalidate = this.VALIDATEJAVA + 'service=' + service + '&ticket=' + ticket;
      let promise = new Promise((resolve, reject) => {
         this.http.doGetUrlXML(urlvalidate).subscribe(
            (res: any) => {
               this.validation(resolve, reject, res);
            },
            (err) => {
               //console.log('Error' + err.message);
               //   this.Logout();
            },
            () => {
               //console.log('completed');
            }
         );
      });
      return promise;
   }

   public validation(resolve: any, reject: any, res: any) {
      try {
         sessionStorage.setItem('loginUser', res.split('<cas:user>')[1].split('</cas:user>')[0] || '');
         sessionStorage.setItem('cedula', res.split('<cas:cedula>')[1].split('</cas:cedula>')[0]?.trim() || '');
         sessionStorage.setItem('clientName', res.split('<cas:clientName>')[1].split('</cas:clientName>')[0]?.trim() || '');
         sessionStorage.setItem('perId', res.split('<cas:perid>')[1].split('</cas:perid>')[0] || '');
         sessionStorage.setItem('name', res.split('<cas:name>')[1].split('</cas:name')[0] || '');
      } catch (error) {
         sessionStorage.setItem('loginUser', res.split('<cas:user>')[1].split('</cas:user>')[0] || '');
         sessionStorage.setItem('name', res.split('<cas:name>')[1].split('</cas:name')[0] || ''
         );
      }
      window.location.href = this.REDIRECT_URI;
      resolve();
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
      sessionStorage.clear();
      localStorage.clear();
   }

   public isNotEmpty(obj: any): boolean {
      return !this.isEmpty(obj);
   }

   public isEmpty(obj: any): boolean {
      return obj == undefined || obj == null || obj == '' || obj == ' ';
   }

   public saveTicket() {
      let ticket = window.location.search.replace('?ticket=', '');
      if (ticket != null) {
         sessionStorage.setItem('ticketUser', ticket);
      }
   }

   public getLogin() {
      return sessionStorage.getItem('loginUser');
   }

   public getTicket() {
      return sessionStorage.getItem('ticketUser');
   }

   public ReadTicket(url: string): String {
      var intIndex: boolean = url.includes('ticket');
      if (intIndex) {
         this.cadena = url.split('=');
         var rawClientInfo: any = this.cadena[1];
         sessionStorage.setItem('ticketUser', this.cadena[1]);
         return rawClientInfo;
      } else {
         return rawClientInfo;
      }
   }

}
