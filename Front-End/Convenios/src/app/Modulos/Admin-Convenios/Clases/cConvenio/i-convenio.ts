export interface IConvenioTabla {
  c_stridconvenio:string;
  c_strtituloconvenio:string;
  c_strnombrescoordinador:string;
  c_strnaturalezaconvenio:string;
  c_strclasificacionconvenio:string;
  c_strnombredependencia:string;
  c_blnacademico:boolean;
  c_blninvestigacion:boolean;
  c_blnpracticas:boolean;
  c_blnvinculacion:boolean;
  c_strinstitucion:string;
  c_dtfechainicioconvenio:Date;
  c_strvigencia:number; //probablemente number
  c_fltavanceconvenio:number;
  c_vigente:boolean
  c_strarchivoconvenio:string;

}

export interface iConvenioDatos{
  c_strtituloconvenio:string;
  c_strnombrescoordinador:string;
  c_stridconvenio:string;
  c_strcorreocoordinador:string;
  c_strtelefonocoordinador:string;
  c_strnombredependencia:string;
  c_strnaturalezaconvenio:string;
  c_strclasificacionconvenio:string;
  c_blnacademico:boolean;
  c_blninvestigacion:boolean;
  c_blnpracticas:boolean;
  c_blnvinculacion:boolean;
  c_strinstitucion:string;
  c_strobjetivoconvenio:string;//agregar
  c_dtfechainicioconvenio:string;
  c_dtfechafinconvenio:string;
  c_strvigencia:number;
  c_fltavanceconvenio:number; //agregar
  c_vigente:boolean//agregar
  c_strarchivoconvenio:string;


}
