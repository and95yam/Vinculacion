export interface IGrupo {
  intid:number
  strnombre:string;
  strdescripcion:string;
  intorden:number;
  intpadre:number;
  blnactivo: boolean;
}

export interface ModGrupo {

  strnombre:string;
  strdescripcion:string;
  intorden:number;
  intpadre:number;
  blnactivo: boolean;
}
