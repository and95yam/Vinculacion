import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { finalize, catchError, delay } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';
import { Session } from 'inspector';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(
    private SpinnerService: SpinnerService,
    private loading: LoaderService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.get("skip")){
      return next.handle(req);
    }
    this.SpinnerService.mostrar();
    this.loading.isLoading.next(true);
    return next
      .handle(req)
      .pipe(
        delay(250),
        finalize(() => {
          this.SpinnerService.ocultar();
          this.loading.isLoading.next(false);
        })
      )
      .pipe(
        catchError((err) => {
          this.SpinnerService.mostrarSS();
  
          console.warn(req.headers);
         
          console.error('error cought in service', err);
          setTimeout(() => {
            this.SpinnerService.OcultarSS();
          }, 3000);
          return throwError(err);
        })
      );
  }
}
