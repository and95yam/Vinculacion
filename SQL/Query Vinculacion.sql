/*==============================================================*/
/* Table: DEPENDENCIA                                           */
/*==============================================================*/
create table DEPENDENCIA (
   ID_DEPENDENCIA       SMALLSERIAL                 not null,
   NOMBREDEPENDENCIA    CHAR(15)             null,
   TIPODEPENDENCIA      CHAR(20)             null,
   constraint PK_DEPENDENCIA primary key (ID_DEPENDENCIA)
);

/*==============================================================*/
/* Table: COORDINADOR                                           */
/*==============================================================*/
create table COORDINADOR (
   CI_CORDINADOR        VARCHAR(10)          not null,
   ID_DEPENDENCIA       INT4                 null,
   NOMBRESCOORDINADOR   VARCHAR(50)          null,
   CORREO               VARCHAR(50)          null,
   TELEFONO             VARCHAR(15)          null,
   constraint PK_COORDINADOR primary key (CI_CORDINADOR)
);

alter table COORDINADOR
   add constraint FK_COORDINA_REFERENCE_DEPENDEN foreign key (ID_DEPENDENCIA)
      references DEPENDENCIA (ID_DEPENDENCIA)
      on delete restrict on update restrict;
	  
/*==============================================================*/
/* Table: CONVENIO                                              */
/*==============================================================*/
create table CONVENIO (
   ID_RESOLUCION        VARCHAR(15)          not null,
   CI_CORDINADOR        VARCHAR(10)          not null,
   TITULO               VARCHAR(300)         null,
   DEPENDENCIA          CHAR(15)             null,
   NATURALEZA           VARCHAR(15)          null,
   CLASIFICACION        VARCHAR(15)          null,
   
   INSTITUCION          VARCHAR(100)         null,
   OBJETO               VARCHAR(700)         null,
   FECHAINICIO          DATE                 null,
   FECHAFIN             DATE                 null,
   AVANCE               DECIMAL(2)           null,
   RAZON                VARCHAR(15)          null,
   ARCHIVO              VARCHAR(250)         null,
   constraint PK_CONVENIO primary key (ID_RESOLUCION)
);

alter table CONVENIO
   add constraint FK_CONVENIO_REFERENCE_COORDINA foreign key (CI_CORDINADOR)
      references COORDINADOR (CI_CORDINADOR)
      on delete restrict on update restrict;

/*==============================================================*/
/* Table: EJES                                                  */
/*==============================================================*/
create table EJES (
   ID_RESOLUCION        VARCHAR(15)          not null,
   ACADEMICO            BOOL                 null,
   INVESTIGACION        BOOL                 null,
   PRACTICAS            BOOL                 null,
   VINCULACION          BOOL                 null,
   constraint PK_EJES primary key (ID_RESOLUCION)
);

/*==============================================================*/
/* Table: INFORME                                               */
/*==============================================================*/
create table INFORME (
   ID_INFORME           VARCHAR(10)          not null,
   ID_RESOLUCION        VARCHAR(15)          not null,
   BENEFICIARIOS        VARCHAR(200)         null,
   BENEFICIO            VARCHAR(200)         null,
   RESULTADOS           VARCHAR(250)         null,
   OBSERVACIONES_INFMORME VARCHAR(250)         null,
   LINKARCH             VARCHAR(250)         null,
   constraint PK_INFORME primary key (ID_INFORME)
);

alter table INFORME
   add constraint FK_INFORME_REFERENCE_CONVENIO foreign key (ID_RESOLUCION)
      references CONVENIO (ID_RESOLUCION)
      on delete restrict on update restrict;
	  
/*==============================================================*/
/* Table: EQUIPOINFORME                                         */
/*==============================================================*/
create table EQUIPOINFORME (
   CI_EQ                VARCHAR(10)          not null,
   ID_INFORME           VARCHAR(10)          null,
   NOMBRES              VARCHAR(50)          null,
   DEPENDENCIA          CHAR(15)             null,
   ACTIVIDAD            VARCHAR(100)         null,
   constraint PK_EQUIPOINFORME primary key (CI_EQ)
);

alter table EQUIPOINFORME
   add constraint FK_EQUIPOIN_REFERENCE_INFORME foreign key (ID_INFORME)
      references INFORME (ID_INFORME)
      on delete restrict on update restrict;
	  
	  
/*==============================================================*/
/* Table: ACTIVIDADINFORME                                      */
/*==============================================================*/
create table ACTIVIDADINFORME (
   ID_INFORME           VARCHAR(10)          not null,
   NUMACT               INT2                 not null,
   ACTIVIDADES          VARCHAR(200)         null,
   MES                  DATE                 null,
   SEMANA               INT2                 null
);
alter table ACTIVIDADINFORME
   add constraint FK_ACTIVIDA_REFERENCE_INFORME foreign key (ID_INFORME)
      references INFORME (ID_INFORME)
      on delete restrict on update restrict;

/*==============================================================*/
/* Table: ARCHIVOS                                              */
/*==============================================================*/
create table ARCHIVOS (
   ID_INFORME           VARCHAR(10)          null,
   ID_ARCHIVO           VARCHAR(10)          null,
   ENLACE                 VARCHAR(250)         null
);

alter table ARCHIVOS
   add constraint FK_ARCHIVOS_REFERENCE_INFORME foreign key (ID_INFORME)
      references INFORME (ID_INFORME)
      on delete restrict on update restrict;
	
	
/*==============================================================*/
/* Table: PLANIFICACION                                         */
/*==============================================================*/
create table PLANIFICACION (
   ID_INFORME           VARCHAR(10)          not null,
   ID_RESOLUCION        VARCHAR(15)          not null,
   PERIODO              DATE                 null,
   ESTADO               VARCHAR(20)          null,
   FIRMADO              BOOL                 null,
   OBSERVACIONESREV     VARCHAR(500)         null,
   constraint PK_PLANIFICACION primary key (ID_INFORME, ID_RESOLUCION)
);


alter table PLANIFICACION
   add constraint FK_PLANIFIC_REFERENCE_CONVENIO foreign key (ID_RESOLUCION)
      references CONVENIO (ID_RESOLUCION)
      on delete restrict on update restrict;
	 

/*==============================================================*/
/* Table: SEGUIMIENTO                                           */
/*==============================================================*/
create table SEGUIMIENTO (
   IDREGISTRO           SMALLSERIAL               not null,
   FECHACARGA           DATE                 null,
   NUMENTREGADOS        INT4                 null,
   NUMPENDIENTES        INT4                 null,
   NUMVALIDADOS         INT4                 null,
   AVANCEGLOBAL         DECIMAL(2)           null,
   constraint PK_SEGUIMIENTO primary key (IDREGISTRO)
);
	  
