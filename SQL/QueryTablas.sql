CREATE DATABASE "Vinculacion"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

drop table ACTIVIDADINFORME;

drop table ARCHIVOS;

drop table CONVENIO;

drop table COORDINADOR;

drop table DEPENDENCIA;

drop table EQUIPOINFORME;

drop table INFORME;

drop table LOGSCONVENIO;

drop table LOGSCOORDINADOR;

drop table LOGSINFORME;

drop table PLANIFICACION;

drop table SEGUIMIENTO;

drop table USUARIO;












/*==============================================================*/
/* Table: LOGSCONVENIO                                          */
/*==============================================================*/
create table LOGSCONVENIO (
   IDACCION             VARCHAR(5)           not null,
   ID_USUARIO           VARCHAR(10)          null,
   ACCION               VARCHAR(10)          null,
   FECHA                DATE                 null,
   constraint PK_LOGSCONVENIO primary key (IDACCION)
);

/*==============================================================*/
/* Table: LOGSCOORDINADOR                                       */
/*==============================================================*/
create table LOGSCOORDINADOR (
   IDACCION             VARCHAR(5)           not null,
   ID_USUARIO           VARCHAR(10)          null,
   ACCION               VARCHAR(10)          null,
   FECHA                DATE                 null,
   constraint PK_LOGSCOORDINADOR primary key (IDACCION)
);

/*==============================================================*/
/* Table: LOGSINFORME                                           */
/*==============================================================*/
create table LOGSINFORME (
   IDACCION             VARCHAR(5)           not null,
   ID_USUARIO           VARCHAR(10)          null,
   ACCION               VARCHAR(10)          null,
   FECHA                DATE                 null,
   constraint PK_LOGSINFORME primary key (IDACCION)
);




/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO (
   ID_USUARIO           VARCHAR(10)          not null,
   NOMBRES              VARCHAR(50)          null,
   CORREO               VARCHAR(50)          null,
   TELEFONO             VARCHAR(15)          null,
   constraint PK_USUARIO primary key (ID_USUARIO)
);












alter table LOGSCONVENIO
   add constraint FK_LOGSCONV_REFERENCE_USUARIO foreign key (ID_USUARIO)
      references USUARIO (ID_USUARIO)
      on delete restrict on update restrict;

alter table LOGSCOORDINADOR
   add constraint FK_LOGSCOOR_REFERENCE_USUARIO foreign key (ID_USUARIO)
      references USUARIO (ID_USUARIO)
      on delete restrict on update restrict;

alter table LOGSINFORME
   add constraint FK_LOGSINFO_REFERENCE_USUARIO foreign key (ID_USUARIO)
      references USUARIO (ID_USUARIO)
      on delete restrict on update restrict;



alter table PLANIFICACION
   add constraint FK_PLANIFIC_REFERENCE_INFORME foreign key (ID_INFORME)
      references INFORME (ID_INFORME)
      on delete restrict on update restrict;
