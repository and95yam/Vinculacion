export interface IConvenio {
  strtituloconvenio:string;
  strnombrescoordinador:string;
  stridconvenio:string;
  strcicoordinador:string;
  strcorreocoordinador:string;
  strtelefonocoordinador:string;
  intiddependencia:number;
  strnombredependencia:string;
  strnaturalezaconvenio:string;
  strclasificacionconvenio:string;
  blnacademico:boolean;
  blninvestigacion:boolean;
  blnpracticas:boolean;
  blnvinculacion:boolean;
  intidinstitucion:number
  strinstitucion:string;
  strobjetivoconvenio:string;
  dtfechainicioconvenio:Date;
  dtfechafinconvenio:Date;
  strvigencia:number;
  intrazonconvenio:number;
  fltavanceconvenio:number;
  strarchivoconvenio:string;
  vigente:boolean;
};

export interface IConvenio2 {
  c_strtituloconvenio:string;
  c_strnombrescoordinador:string;
  c_stridconvenio:string;
  c_strcicoordinador:string;
  c_strcorreocoordinador:string;
  c_strtelefonocoordinador:string;
  c_intiddependencia:number;
  c_strnombredependencia:string;
  c_strnaturalezaconvenio:string;
  c_strclasificacionconvenio:string;
  c_blnacademico:boolean;
  c_blninvestigacion:boolean;
  c_blnpracticas:boolean;
  c_blnvinculacion:boolean;
  c_intidinstitucion:number
  c_strinstitucion:string;
  c_strobjetivoconvenio:string;
  c_dtfechainicioconvenio:Date;
  c_dtfechafinconvenio:Date;
  c_strvigencia:number;
  c_intrazonconvenio:number;
  c_fltavanceconvenio:number;
  c_strarchivoconvenio:string;
  vigente:boolean;
};


export interface addConvenio{
  stridconvenio:string;
  strcicoordinador:string;
  strtituloconvenio:string;
  strnaturalezaconvenio:string;
  strclasificacionconvenio:string;
  strobjetivoconvenio:string;
  dtfechainicioconvenio:string;
  dtfechafinconvenio:string;
  intrazonconvenio:number;
  fltavanceconvenio:number;
  strarchivoconvenio:string;
  intiddependencia:number;
  intidinstitucion:number;
  blnacademico:boolean;
  blninvestigacion:boolean;
  blnpracticas:boolean;
  blnvinculacion:boolean;

}

export interface modConvenio{

  strcicoordinador:string;
  strtituloconvenio:string;
  strnaturalezaconvenio:string;
  strclasificacionconvenio:string;
  strobjetivoconvenio:string;
  strarchivoconvenio:string;
  intiddependencia:number;
  intidinstitucion:number;
  blnacademico:boolean;
  blninvestigacion:boolean;
  blnpracticas:boolean;
  blnvinculacion:boolean;

}

