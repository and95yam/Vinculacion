import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';
import { IConvenioTabla} from './i-convenio';

@Injectable({
  providedIn: 'root'
})
export class SConvenioService {

  link:DireccionesApi =  new DireccionesApi;
  url:string=this.link.convenioTabla;

  constructor(private http:HttpClient) { }

  //Obtener datos convenio
  getConvenioTabla():Observable<IConvenioTabla[]>{
    return this.http.get<IConvenioTabla[]>(this.url);
  }
}
