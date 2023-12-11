import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';
import { IConvenio, IConvenio2,IConvenioInforme} from './i-convenio';
import { addConvenio } from './i-convenio';
import { modConvenio } from './i-convenio';



@Injectable({
  providedIn: 'root'
})
export class SConvenioService {

  //para convenios tabla
  link:DireccionesApi =  new DireccionesApi;
  url:string=this.link.datosConvenio;
  url2:string=this.link.convenioCordinador;
  url3:string=this.link.convenioInforme;

  constructor(private http:HttpClient) { }

  //Obtener datos convenio
  getConvenioTabla():Observable<IConvenio[]>{
    return this.http.get<IConvenio[]>(this.url);
  }

  getConvenioCord(id:string):Observable<IConvenio2[]>{
    return this.http.get<IConvenio2[]>(this.url2+'/'+id);
  }

  //Para ver los datos del convenio en el reporte del informe 
  getConvenioInforme(id:string):Observable<IConvenioInforme[]>{
    return this.http.get<IConvenioInforme[]>(this.url3+'/'+id)
  }

  // crear convenio
  createConvenio(convenio:addConvenio):Observable<addConvenio>{
    return this.http.post<addConvenio>(this.url,convenio);
  }

  //Actualizar convenio
  updateConvenio(datosconvenio:modConvenio, id:string):Observable<modConvenio>{
    console.log(this.url+'/'+id)
    return this.http.put<modConvenio>(this.url+'/'+id,datosconvenio);

  }



}
