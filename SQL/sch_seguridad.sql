CREATE SCHEMA Smaseguridad


/*************************************ROLES***********************************/


CREATE TABLE IF NOT EXISTS Smaseguridad.rol
(
    intid SERIAL NOT NULL,
    strcodigo character varying(4) COLLATE pg_catalog."default",
    strnombre character varying(32) COLLATE pg_catalog."default",
    strdescripcion character varying(1024) COLLATE pg_catalog."default",
    blnactivo boolean NOT NULL DEFAULT false,
    intorden integer,
    CONSTRAINT rol_pkey PRIMARY KEY (intid),
    CONSTRAINT rol_strcodigo_ukey UNIQUE (strcodigo),
    CONSTRAINT rol_strnombre_key UNIQUE (strnombre)
)
WITH (
    OIDS = FALSE
)

/*************************************PERFILES***********************************/


CREATE TABLE IF NOT EXISTS Smaseguridad.perfil
(
    intid serial NOT NULL,
    lngusr_id bigint,
    introl_id integer,
    blnactivo boolean NOT NULL DEFAULT false,
    lngasignadopor bigint,
    lngfechaasignacion bigint,
    lngmodificadopor bigint,
    lngfechamodificacion bigint,
    strnombretema character varying COLLATE pg_catalog."default" DEFAULT ''::character varying,
    blndefault boolean,
    CONSTRAINT perfil_pkey PRIMARY KEY (intid),
    CONSTRAINT perfil_rol_fkey FOREIGN KEY (introl_id)
        REFERENCES Smaseguridad.rol (intid) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

/*******************************ACCION****************************************/

CREATE TABLE IF NOT EXISTS Smaseguridad.accion
(
    intid serial NOT NULL,
    strtitulo character varying COLLATE pg_catalog."default",
    strdescripcion character varying COLLATE pg_catalog."default",
    strurl character varying COLLATE pg_catalog."default",
    blnactivo boolean,
    strseudonimo character varying COLLATE pg_catalog."default",
    CONSTRAINT accion_pkey PRIMARY KEY (intid),
    CONSTRAINT accion_strtitulo_key UNIQUE (strtitulo),
    CONSTRAINT accion_strurl_ukey UNIQUE (strurl)
)
WITH (
    OIDS = FALSE
)


/*******************************GRUPO****************************************/

CREATE TABLE IF NOT EXISTS Smaseguridad.grupo
(
    intid serial NOT NULL,
    strnombre character varying(32) COLLATE pg_catalog."default",
    strdescripcion character varying(1024) COLLATE pg_catalog."default",
    intorden integer,
    intpadre integer,
    blnactivo boolean NOT NULL DEFAULT false,
    CONSTRAINT grupo_pkey PRIMARY KEY (intid),
    CONSTRAINT grupo_strnombre_ukey UNIQUE (strnombre)
)

/*******************************FUNCION****************************************/

CREATE TABLE IF NOT EXISTS Smaseguridad.funcion
(
    intid serial NOT NULL,
    intacc_id integer,
    introl_id integer,
    intgru_id integer,
    intorden integer,
    blnactivo boolean NOT NULL DEFAULT false,
    blnpermisoagregar boolean NOT NULL DEFAULT false,
    blnpermisoeditar boolean NOT NULL DEFAULT false,
    blnpermisoeliminar boolean NOT NULL DEFAULT false,
    CONSTRAINT funcion_pkey PRIMARY KEY (intid),
    CONSTRAINT u_accion_grupo_rol_funcion UNIQUE (intacc_id, intgru_id, introl_id),
    CONSTRAINT funcion_accion_fkey FOREIGN KEY (intacc_id)
        REFERENCES Smaseguridad.accion (intid) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT funcion_grupo_fkey FOREIGN KEY (intgru_id)
        REFERENCES Smaseguridad.grupo (intid) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT funcion_rol_fkey FOREIGN KEY (introl_id)
        REFERENCES Smaseguridad.rol (intid) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
