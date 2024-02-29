import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

//import { OneDriveAccountService } from './seguridad/onedrive-account.service';
import { ArchivosUtilServiceService } from './archivos-util-service.service';
//import { FileUploadData, OnedriveAccount, TokenData } from '../shared/interfaces/Seguridad';

import { DireccionesApi } from 'src/herramientas/direcciones/Direcciones';

@Injectable({
  providedIn: 'root'
})
export class OneDriveService {

  API_ONEDRIVE: DireccionesApi = new DireccionesApi; 


  constructor(
    private readonly http: HttpClient,
      private readonly wsArchivosUtil: ArchivosUtilServiceService,
      private wsSanitize: DomSanitizer,
  ) { }


  

 getjwt = async (): Promise<TokenData> => {
    

    const req: any = { idAplicacion: 1, jwtsecret: "Pru3ba5Arch1v05", activo: "true" };
    const jwtData: TokenData = await this.http.post<any>(`${this.API_ONEDRIVE.API_ONEDRIVE}getTokenAplicacion`, req).toPromise();
    if (jwtData.error) return { error: jwtData.error, success: false };
    //jwtData.OnedriveAccount = account;
    return jwtData;
 }

 upload = async (data: FileUploadData,rutaArchivo:string): Promise<Response> => {
    let response: Response = { success: false };

    if (!data || !data.TokenData ||  !data.file) {
       response.msg = 'Datos no válidos para carga de archivo.';
       return response;
    }
    const {  TokenData } = data!;

    let formArchivo = new FormData();
    formArchivo.append('idAplicacion', `1`);
    formArchivo.append('idCredencial', `1`);
    formArchivo.append('activo', `true`);
    formArchivo.append('ruta', rutaArchivo);

    const archivo:any= data.file;

    formArchivo.append('file', archivo); //Tipo: File

    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + `${TokenData}`)
       .set('idaplicacion', `1`)
       .set('jwtsecret', `Pru3ba5Arch1v05`)
       .set('activo', `true`);
try {
  const result = await this.http.post<any>(`${this.API_ONEDRIVE.API_ONEDRIVE}uploadFile`, formArchivo, { headers }).toPromise();
  if (!result.success) {
    console.log(result)
     response.msg = result.error;
     return response;
  }
  
} catch (error) {
  console.log("errr", error)
}

    response.success = true;
    response.data = `CONVENIO/pruebaConvenio.pdf`;
    return response;
 }

 download = async (strFile: string, nombreArchivo:string): Promise<Response> => {
    let response: any = { success: false };
    if (!strFile) {
       response.msg = 'Datos no válidos para descarga de archivo.';
       return response;
    }

    const jwtData: TokenData = await this.getjwt();
    if (!jwtData.success) {
       response.msg = jwtData.error;
       return response;
    };
    console.log('archivo',nombreArchivo)
    const req: any = {
       ruta: `${strFile}`,
       //archivo: `${strFile}`,
       archivo: nombreArchivo,
       idAplicacion: 1,
       idCredencial: 1,
       jwtsecret: 'Pru3ba5Arch1v05',
       activo:'true'
    };

    console.log(jwtData.token)

    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + `${jwtData.token}`)
       .set('idaplicacion', `1`)
       .set('jwtsecret', `Pru3ba5Arch1v05`)
       .set('activo', `true`);

    const result = await this.http.post<any>(`${this.API_ONEDRIVE.API_ONEDRIVE}getFile`, req, { headers }).toPromise();


    if (!result.success) {
       response.msg = result.error;
       return response;
    }

    console.log(result.download);
    

    const file: any = await this.wsArchivosUtil.toDataURL(result.download);
    const safePdfUrl = this.wsSanitize.bypassSecurityTrustResourceUrl(file);//este se muestra
    response.data = safePdfUrl;
    response.url = file;
    response.success = true;
    console.log(safePdfUrl)
    return response ;
 }


}

export interface Response {
  data?:any;
  msg?:string;
  success?: boolean;

}


export type UploadResponseOneDrive = {
  success?: boolean;
  name?: string;
  download?: string;
  size?: number;
  file?: File;
  fileInfo?: FileInfo;
  error?: string
}

export type File = {
  hashes?: Hashes;
  irmEffectivelyEnabled?: boolean;
  irmEnabled?: boolean;
  mimeType?: string;
}

export type Hashes = {
  quickXorHash?: string;
}

export type FileInfo = {
  createdDateTime?: Date;
  lastModifiedDateTime?: Date;
}

export type TokenData = {
  success?: boolean;
  token?: string;
  error?: string;
  created?: Date;
  exp?: Date;
  
}

export type FileUploadData = {
  TokenData?: string;
  
  file?: File;
  fileName?: string;
}