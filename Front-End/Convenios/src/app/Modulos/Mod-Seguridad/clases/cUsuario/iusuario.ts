export interface IUsuario {
    perid:string;
    cedulaUsuario:string;
    nombreUsuario:string;
    primerApellido:string;
    segundoApellido:string;
    correo:string;
    estado:boolean;
    idrol:number;
   
}

export interface GUsuario {
    c_perid:string;
    c_cedulausuario:string;
    c_nombreusuario:string;
    c_primerapellido:string;
    c_segundoapellido:string;
    c_correo:string;
    c_estado:boolean;
    c_idrol:number;
    c_srnombre:string;
}

export interface MUsuario{
    c__estado:boolean;
    c__idrol:number;
}



