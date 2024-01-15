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

  createMiembros(miembro:IMiembro, idInforme:string):Observable<IMiembro>{
    const encodedId = encodeURIComponent(idInforme);
    const apiUrl = `${this.url}/${encodedId}`;

    return this.http.post<IMiembro>(apiUrl,miembro);
  }

  getMiembros(idInforme:string):Observable<GMiembro[]>{
    
    const encodedId = encodeURIComponent(idInforme);
    const apiUrl = `${this.url}/${encodedId}`;

    return this.http.get<GMiembro[]>(apiUrl);
  }

  editMiembros(miembro:IMiembro, idInforme:string, cedulaMiembro:string):Observable<IMiembro>{
    const encodedId = encodeURIComponent(idInforme);
    const apiUrl = `${this.url}/${encodedId}/${cedulaMiembro}`;

    return this.http.put<IMiembro>(apiUrl,miembro);
  }

  deleteMiembro(idInforme: string, cedulaMiembro: string): Observable<void> {
    const encodedId = encodeURIComponent(idInforme);
    const apiUrl = `${this.url}/${encodedId}/${cedulaMiembro}`;

    return this.http.delete<void>(apiUrl);

  }


}
                         