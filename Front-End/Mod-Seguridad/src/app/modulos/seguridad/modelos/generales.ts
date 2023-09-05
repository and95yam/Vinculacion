export interface auditoria{
    codigous:string;
    clase:string;
    proceso:string;
    descripcion:string;
}

export interface servicioG{
    opcionBus:number;
    opcion:number;
    buscar:string;
    estado:string;
    auditoria:auditoria;
    listado:any[];
}