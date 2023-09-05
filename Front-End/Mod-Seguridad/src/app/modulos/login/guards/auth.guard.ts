import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ServiciosWebSistema } from 'src/app/services/moduloiniciosesion.service';

@Injectable({
   providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {

   constructor(
      private router: Router,
      private wsAuth: ServiciosWebSistema
   ) { }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.wsAuth.verificaAuth().pipe(
         tap((estaAutenticado) => {
            if (!estaAutenticado) {
               sessionStorage.clear(); //TODO: Elinina todo de sessionstorage
               localStorage.clear(); //TODO: Elinina todo de localstorage
               this.router.navigate([`/`]);
               return;
            };
         })
      );
   }

   canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      return this.wsAuth.verificaAuth().pipe(
         tap((estaAutenticado) => {
            if (!estaAutenticado) {
               sessionStorage.clear(); //TODO: Elinina todo de sessionstorage
               localStorage.clear(); //TODO: Elinina todo de localstorage
               this.router.navigate([`/`]);
               return;
            };
         })
      );
   }

}
