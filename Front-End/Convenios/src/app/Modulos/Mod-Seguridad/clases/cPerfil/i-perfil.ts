export interface  IPerfil {
    lngusr_id:any;
    introl_id:any;
    blnactivo:boolean;
    lngasignadopor:any;
    strnombretema:string;
    blndefault:boolean;
}

export interface GPerfil {
    id_usuario:number;
    perfil:string;
    id_rol:number;
    lngasignadopor:number;
    lngmodificadopor:number;
    codigo_rol:string;
    rol:string;
    strdescripcion:string;
    blnactivo:boolean; 
    lngfechaasignacion:number;
    blndefault:boolean
}

export interface MPerfil{
   
    estado:boolean; 
    
}


