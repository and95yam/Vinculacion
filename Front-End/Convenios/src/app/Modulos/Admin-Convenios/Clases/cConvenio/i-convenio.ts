export interface IConvenio {
  strtituloconvenio:string;
  strnombrescoordinador:string;
  stridconvenio:string;
  strcicoordinador:string;
  strcorreocoordinador:string;
  strtelefonocoordinador:string;
  strnombredependencia:string;
  strnaturalezaconvenio:string;
  strclasificacionconvenio:string;
  blnacademico:boolean;
  blninvestigacion:boolean;
  blnpracticas:boolean;
  blnvinculacion:boolean;
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

