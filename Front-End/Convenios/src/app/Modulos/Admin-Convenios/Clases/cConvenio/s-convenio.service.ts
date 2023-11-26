import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';
import { IConvenio} from './i-convenio';
import { addConvenio } from './i-convenio';
import { modConvenio } from './i-convenio';


@Injectable({
  providedIn: 'root'
})
export class SConvenioService {

  //para convenios tabla
  link:DireccionesApi =  new DireccionesApi;
  url:string=this.link.datosConvenio;


  constructor(private http:HttpClient) { }

  //Obtener datos convenio
  getConvenioTabla():Observable<IConvenio[]>{
    return this.http.get<IConvenio[]>(this.url);
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
