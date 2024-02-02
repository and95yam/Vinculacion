export interface IPerfil {
    lngusr_id:number;
    introl_id:string;
    blnactivo:boolean;
    lngasignadopor:number;
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
    lngusr_id:number;
    introl_id:number;
    blnactivo:boolean; 
    lngmodificadopor:number;
    strnombretema:string;
    blndefault:boolean;
}
