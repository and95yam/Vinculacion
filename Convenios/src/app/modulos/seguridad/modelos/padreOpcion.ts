import { auditoria } from "./generales";

export interface padre_opcionLista{
    pado_id?:number;
    pado_nombre:string;
    pado_estado:number;
    pado_icono:string;
}

export interface opcionLista{
    opc_id:number;
    opc_nombre:string;
    opc_descripcion:string;
    opc_url:string;
    opc_metodo:string;
    opc_estado:number;
    opc_icono:string;
    opc_id_padre:string;
}

export interface opcionServ{
    nombre:string,
    descripcion:string,
    url:string,
    metodo:string,
    estado:string,
    icono:string
}