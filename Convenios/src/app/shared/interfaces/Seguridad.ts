
export interface Sesion {
    perfiles?: Perfile[];
    strCedula?: string;
    idUsuario?: string;
    idRolSeccionado?: number;
    strNombreRolSeccionado?: string;
    strCorreo?: string;
    strUserNombres?: string;
    strFechaNacimiento?: string;
    idPeriodoVigente?: string,
    strPeriodoVigente?: string,
    strNomenclatura?: string,
    idReglamento?: string,
  }
  
  export interface Perfile {
    tipo?: null;
    per_apellidos?: string;
    per_email?: string;
    prol_estado?: number;
    prol_dependencia?: number;
    rol_nombre?: string;
    rol_id?: number;
    rol_descripcion?: string;
    per_id?: number;
    per_nombres?: string;
    per_cedula?: string;
  }
  
  export interface Registro {
    opcion?: string;
    auditoria?: Auditoria;
    listado?: Listado[];
    password?: string;
  }
  
  export interface Auditoria {
    codigous?: string;
    clase?: string;
    proceso?: string;
    descripcion?: string;
  }
  
  export interface Listado {
    perId?: string;
    strNombre?: string;
    strApellido?: string;
    strCorreo?: string;
    strCedula?: string;
    estado?: string;
    rolId?: string;
    dependencia?: string;
    tipo?: string;
  }
  
  export interface RespuestaToken {
    usuario: Sesion;
    success: boolean;
  }
  
  export interface GenerarLink {
    cedula: string;
    fecha?: string;
    url?: string;
    codigo?: string;
  }
  
  export interface RespuestaGenerarLink {
    success: boolean;
    respuesta: string;
  }
  