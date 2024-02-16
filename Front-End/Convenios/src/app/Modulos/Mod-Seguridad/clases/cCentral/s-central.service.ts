import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';
import { ICentral } from './i-central'; 

@Injectable({
  providedIn: 'root'
})
export class SCentralService {
  
  link:DireccionesApi = new DireccionesApi;
  url:string=this.link.bdCentralizada;
 

  constructor(private http:HttpClient) { }

  getDatos(id:string):Observable<any>{
    return this.http.get<any>(this.url+id);
  }
}
