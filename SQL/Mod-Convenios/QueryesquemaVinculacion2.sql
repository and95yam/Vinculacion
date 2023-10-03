

/*==============================================================*/
/* table: actividadinforme                                      */
/*==============================================================*/
create table smaconvenios.actividadinforme (
   intidactividad       SERIAL                  not null,
   intnumactividad      int                  not null,
   stridinforme         varchar(32)          null,
   stractividad         varchar(512)         null,
   dtfechainicioactividad date                 null,
   dtfechafinactividad  date                 null,
   constraint PK_ACTIVIDADINFORME primary key ( intidactividad, STRIDINFORME)
   
);




/*==============================================================*/
/* table: convenio                                              */
/*==============================================================*/
create table smaconvenios.convenio (
   stridconvenio        varchar(16)          not null,
   strcicoordinador     varchar(10)          null,
   strtituloconvenio    varchar(256)         null,
   strnaturalezaconvenio varchar(16)          null,
   strclasificacionconvenio varchar(16)          null,
   strobjetivoconvenio  varchar(1024)        null,
   dtfechainicioconvenio date                 null,
   dtfechafinconvenio   date                 null,
   intrazonconvenio     int                  null,
   fltavanceconvenio    decimal              null,
   strarchivoconvenio   varchar(256)         null,
   constraint pk_convenio primary key (stridconvenio)
);


/*==============================================================*/
/* table: convenio_dependencia                                  */
/*==============================================================*/
create table smaconvenios.convenio_dependencia (
   intidc_d             serial               not null,
   intiddependencia     int4                 null,
   stridconvenio        varchar(16)          null,
   constraint pk_convenio_dependencia primary key (intidc_d)
);


/*==============================================================*/
/* table: convenio_institucion                                  */
/*==============================================================*/
create table smaconvenios.convenio_institucion (
   intidc_i             serial               not null,
   intidinstitucion     int4                 null,
   stridconvenio        varchar(16)          null,
   constraint pk_convenio_institucion primary key (intidc_i)
);


/*==============================================================*/
/* table: coordinador                                           */
/*==============================================================*/
create table smaconvenios.coordinador (
   strcicoordinador     varchar(10)          not null,
   intiddependencia     int4                 null,
   strnombrescoordinador varchar(256)         null,
   strcorreocoordinador varchar(256)         null,
   strtelefonocoordinador varchar(256)         null,
   constraint pk_coordinador primary key (strcicoordinador)
);


/*==============================================================*/
/* table: dependencia                                           */
/*==============================================================*/
create table smaconvenios.dependencia (
   intiddependencia     serial               not null,
   strnombredependencia varchar(32)          null,
   strtipodependencia   varchar(32)          null,
   constraint pk_dependencia primary key (intiddependencia)
);


/*==============================================================*/
/* table: ejes                                                  */
/*==============================================================*/
create table smaconvenios.ejes (
   stridconvenio        varchar(16)          not null,
   blnacademico         bool                 null,
   blninvestigacion     bool                 null,
   blnpracticas         bool                 null,
   blnvinculacion       bool                 null,
   constraint pk_ejes primary key (stridconvenio)
);


/*==============================================================*/
/* table: eqinforme                                             */
/*==============================================================*/
create table smaconvenios.eqinforme (
   stridinforme         varchar(32)          not null,
   intiddependencia     int4                 null,
   strciequipo          varchar(10)          null,
   strnombreequipo      varchar(256)         null,
   stractividadequipo   varchar(256)         null,
   constraint pk_eqinforme primary key (stridinforme, strciequipo)
);


/*==============================================================*/
/* table: estadoinforme                                         */
/*==============================================================*/
create table smaconvenios.estadoinforme (
   stridinforme         varchar(64)          not null,
   strestadoinforme     varchar(16)           DEFAULT 'Pendiente',
   strobservacionesinforme varchar(512)        DEFAULT NULL,
   blnfirmado           bool                 Default False,
   dtfechacreacióninforme date               Default current_date,
   dtfechaevaluacionInforme date

   constraint pk_estadoinforme primary key (stridinforme)
);


/*==============================================================*/
/* table: informe                                               */
/*==============================================================*/
create table smaconvenios.informe (
   stridinforme         varchar(32)          not null,
   intidplanificacion   int4                 null,
   strperiodo           varchar(64)          null,
   stridconvenio        varchar(16)          null,
   strbeneficiariodirecto varchar(512)         null,
   strbeneficiodirecto  varchar(1024)        null,
   strbeneficiarioindirecto varchar(512)         null,
   strbeneficioindirecto varchar(1024)        null,
   strresultados        varchar(1024)        null,
   strobservaciones     varchar(1024)        null,
   stranexo             varchar(256)         null,
   dtfechacreacion      date DEFAULT current_date,
   constraint pk_informe primary key (stridinforme)
);

/*==============================================================*/
/* table: institucion                                           */
/*==============================================================*/
create table smaconvenios.institucion (
   intidinstitucion     serial               not null,
   strinstitucion       varchar(256)         null,
   constraint pk_institucion primary key (intidinstitucion)
);


/*==============================================================*/
/* table: planificacion                                         */
/*==============================================================*/
create table smaconvenios.planificacion (
   intidplanificacion   serial               not null,
   strperiodo           varchar(64)          not null,
   stridconvenio        varchar(16)          not null,
   constraint pk_planificacion primary key (intidplanificacion, strperiodo, stridconvenio)
);


alter table smaconvenios.actividadinforme
   add constraint fk_activida_reference_informe foreign key (stridinforme)
      references smaconvenios.informe (stridinforme)
      on delete restrict on update restrict;

alter table smaconvenios.convenio
   add constraint fk_convenio_reference_coordina foreign key (strcicoordinador)
      references smaconvenios.coordinador (strcicoordinador)
      on delete restrict on update restrict;

alter table smaconvenios.convenio_dependencia
   add constraint fk_convenio_reference_dependen foreign key (intiddependencia)
      references smaconvenios.dependencia (intiddependencia)
      on delete restrict on update restrict;

alter table smaconvenios.convenio_dependencia
   add constraint fk_convenio_reference_convenio foreign key (stridconvenio)
      references smaconvenios.convenio (stridconvenio)
      on delete restrict on update restrict;

alter table smaconvenios.convenio_institucion
   add constraint fk_convenio_reference_instituc foreign key (intidinstitucion)
      references smaconvenios.institucion (intidinstitucion)
      on delete restrict on update restrict;

alter table smaconvenios.convenio_institucion
   add constraint fk_convenio_reference_convenio foreign key (stridconvenio)
      references smaconvenios.convenio (stridconvenio)
      on delete restrict on update restrict;

alter table smaconvenios.coordinador
   add constraint fk_coordina_reference_dependen foreign key (intiddependencia)
      references smaconvenios.dependencia (intiddependencia)
      on delete restrict on update restrict;

alter table smaconvenios.ejes
   add constraint fk_ejes_reference_convenio foreign key (stridconvenio)
      references smaconvenios.convenio (stridconvenio)
      on delete restrict on update restrict;

alter table smaconvenios.eqinforme
   add constraint fk_eqinform_reference_informe foreign key (stridinforme)
      references smaconvenios.informe (stridinforme)
      on delete restrict on update restrict;

alter table smaconvenios.eqinforme
   add constraint fk_eqinform_reference_dependen foreign key (intiddependencia)
      references smaconvenios.dependencia (intiddependencia)
      on delete restrict on update restrict;

alter table smaconvenios.estadoinforme
   add constraint fk_estadoin_reference_informe foreign key (stridinforme)
      references smaconvenios.informe (stridinforme)
      on delete restrict on update restrict;

alter table smaconvenios.informe
   add constraint fk_informe_reference_planific foreign key (intidplanificacion, strperiodo, stridconvenio)
      references smaconvenios.planificacion (intidplanificacion, strperiodo, stridconvenio)
      on delete restrict on update restrict;

alter table smaconvenios.planificacion
   add constraint fk_planific_reference_convenio foreign key (stridconvenio)
      references smaconvenios.convenio (stridconvenio)
      on delete restrict on update restrict;
