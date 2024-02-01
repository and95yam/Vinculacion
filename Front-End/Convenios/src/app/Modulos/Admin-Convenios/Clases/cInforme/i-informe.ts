export interface IInforme {
  c_stridinforme:string;
  c_intidplanificacion: number;
  c_strperiodo:string;
  c_stridconvenio:string;
  c_strtituloconvenio:string;
  c_strbeneficiariodirecto:string;
  c_strbeneficiodirecto:string;
  c_strbeneficiarioindirecto:string;
  c_strbeneficioindirecto:string;
  c_strresultados:string;
  c_strobservaciones:string;
  c_stranexo:string;
  c_dtfechacreacion:string;
  c_strestadoinforme:string;
  c_blnfirmado:boolean;

}


export interface IInformeConvenio {
  c_stridinforme:string;
  c_intidplanificacion: number;
  c_strperiodo:string;
  c_stridconvenio:string;
  c_strcicoordinador:string;
  c_strtituloconvenio:string;
  c_strbeneficiariodirecto:string;
  c_strbeneficiodirecto:string;
  c_strbeneficiarioindirecto:string;
  c_strbeneficioindirecto:string;
  c_strresultados:string;
  c_strobservaciones:string;
  c_stranexo:string;
  c_dtfechacreacion:string;
  c_strestadoinforme:string;
  c_blnfirmado:boolean;

}


/*export interface EInformeConvenio {
  c_stridinforme:string;
  c_intidplanificacion: number;
  c_strperiodo:string;
  c_stridconvenio:string;
  c_strtituloconvenio:string;
  c_strcicoordinador:string;
  c_strbeneficiariodirecto:string;
  c_strbeneficiodirecto:string;
  c_strbeneficiarioindirecto:string;
  c_strbeneficioindirecto:string;
  c_strresultados:string;
  c_strobservaciones:string;
  c_stranexo:string;
  c_dtfechacreacion:string;
  c_strestadoinforme:string;
  c_blnfirmado:boolean;

}*/
export interface AddInforme{
  strPeriodo:string; 
  strBeneficiarioDirecto:string; 
  strBeneficioDirecto:string; 
  strBeneficiarioIndirecto:string;
  strBeneficioIndirecto:string;
  strResultados:string;
  strAnexo:string;
}