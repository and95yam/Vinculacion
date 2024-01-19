import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DireccionesApi} from '../../../../../herramientas/direcciones/Direcciones'
import { IInforme,IInformeConvenio,AddInforme } from './i-informe';

@Injectable({
  providedIn: 'root'
})
export class SInformeService {

  link:DireccionesApi= new DireccionesApi;
  url:string=this.link.informeDatos;
  url2:string=this.link.informesDeConvenios;
  url3:string=this.link.informe;

  constructor(private http:HttpClient) { }

  getInformeCoord(stridcord:string):Observable<IInforme[]>{
    return this.http.get<IInforme[]>(this.url+'/'+stridcord);
  }

  getListaInformes(stridConv:string):Observable<IInformeConvenio[]>{
    return this.http.get<IInformeConvenio[]>(this.url2+'/'+stridConv);
  }

  createInforme( informe:AddInforme,stridConv:string):Observable<AddInforme>{
    return this.http.post<AddInforme>(this.url3+'/'+stridConv,informe)
  }

  editInforme( informe:AddInforme,strIdInf:string,stridConv:string):Observable<AddInforme>{
     return this.http.put<AddInforme>(this.url3+'/'+strIdInf+'/'+stridConv,informe)
  }
}
