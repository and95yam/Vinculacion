import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';
import { IMiembro,GMiembro } from './i-miembro';

@Injectable({
  providedIn: 'root'
})
export class SMiembroService {

  link: DireccionesApi = new DireccionesApi; 
  url:string= this.link.miembroInforme
  
  constructor(private http:HttpClient) { }

  getMiembros(idInforme:string):Observable<GMiembro[]>{
    
    const encodedId = encodeURIComponent(idInforme);
    const apiUrl = `${this.url}/${encodedId}`;

    return this.http.get<GMiembro[]>(apiUrl);
  }
}
                         