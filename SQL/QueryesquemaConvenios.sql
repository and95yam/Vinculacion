/*==============================================================*/
/* Table: DEPENDENCIA                                           */
/*==============================================================*/
create table smaconvenios.Dependencia (
   intid_dependencia    smallserial          not null,
   strdombreDependencia char(15)             null,
   strdipodependencia   char(20)             null,
   constraint pk_dependencia primary key (intid_dependencia)
);

/*==============================================================*/
/* Table: COORDINADOR                                           */
/*==============================================================*/
create table smaconvenios.Coordinador (
   strci_cordinador     varchar(10)          not null,
   intid_dependencia    int4                 null,
   strnombrescoordinador varchar(50)          null,
   strcorreo            varchar(50)          null,
   strtelefono          varchar(15)          null,
   constraint pk_coordinador primary key (strci_cordinador)
)

alter table smaconvenios.Coordinador
   add constraint fk_coordina_reference_dependen foreign key (intid_dependencia)
      references smaconvenios.dependencia (intid_dependencia)
      on delete restrict on update restrict;


/*==============================================================*/
/* table: convenio                                              */
/*==============================================================*/
create table smaconvenios.Convenio (
   strid_resolucion     varchar(15)          not null,
   strci_cordinador     varchar(10)          not null,
   strtitulo            varchar(300)         null,
   strdependencia       char(15)             null,
   strnaturaleza        varchar(15)          null,
   strclasificacion     varchar(15)          null,
   strinstitucion       varchar(100)         null,
   strobjeto            varchar(700)         null,
   dtfechainicio        date                 null,
   dtfechafin           date                 null,
   fltavance            decimal(2)           null,
   strrazon             varchar(15)          null,
   strarchivo           varchar(250)         null,
   constraint pk_convenio primary key (strid_resolucion)
);

alter table smaconvenios.Convenio
   add constraint fk_convenio_reference_coordina foreign key (strci_cordinador)
      references smaconvenios.Coordinador (strci_cordinador)
      on delete restrict on update restrict;
	  
/*==============================================================*/
/* table: ejes                                                  */
/*==============================================================*/
create table smaconvenios.ejes (
   strid_resolucion     varchar(15)          not null,
   blnacademico         bool                 null,
   blninvestigacion     bool                 null,
   blnpracticas         bool                 null,
   blnvinculacion       bool                 null,
   constraint pk_ejes primary key (strid_resolucion)
);

alter table smaconvenios.ejes
   add constraint fk_ejes_reference_convenio foreign key (strid_resolucion)
      references smaconvenios.Convenio (strid_resolucion)
      on delete restrict on update restrict;
	  
/*==============================================================*/
/* table: planificacion                                         */
/*==============================================================*/

create table smaconvenios.Planificacion (
   strid_informe        varchar(10)          not null,
   strid_resolucion     varchar(15)          not null,
   dtperiodo            date                 null,
   strestado            varchar(20)          null,
   blnfirmado           bool                 null,
   strobservacionesrev  varchar(500)         null,
   constraint pk_planificacion primary key (strid_informe, strid_resolucion)
);

alter table smaconvenios.Planificacion
   add constraint fk_planific_reference_convenio foreign key (strid_resolucion)
      references smaconvenios.Convenio (strid_resolucion)
      on delete restrict on update restrict;
	  
/*==============================================================*/
/* table: informe                                               */
/*==============================================================*/
create table smaconvenios.Informe (
   strid_informe        varchar(10)          not null,
   strid_resolucion     varchar(15)          not null,
   strbeneficiarios     varchar(200)         null,
   strbeneficio         varchar(200)         null,
   strresultados        varchar(250)         null,
   strobservaciones_infmorme varchar(250)         null,
   strlinkarch          varchar(250)         null,
   constraint pk_informe primary key (strid_informe)
);

alter table smaconvenios.Informe
   add constraint fk_informe_reference_convenio foreign key (strid_resolucion)
      references smaconvenios.Convenio (strid_resolucion)
      on delete restrict on update restrict;
	  
/*==============================================================*/
/* table: actividadinforme                                      */
/*==============================================================*/
create table smaconvenios.Actividadinforme (
   strid_informe        varchar(10)          not null,
   intnumact            int2                 not null,
   stractividades       varchar(200)         null,
   dtmes                date                 null,
   intsemana            int2                 null
);

alter table smaconvenios.Actividadinforme
   add constraint fk_activida_reference_informe foreign key (strid_informe)
      references smaconvenios.Informe (strid_informe)
      on delete restrict on update restrict;
	  
/*==============================================================*/
/* table: equipoinforme                                         */
/*==============================================================*/
create table smaconvenios.Equipoinforme (
   strci_eq             varchar(10)          not null,
   strid_informe        varchar(10)          null,
   strnombres           varchar(50)          null,
   strdependencia       char(15)             null,
   stractividad         varchar(100)         null,
   constraint pk_equipoinforme primary key (strci_eq)
);


alter table smaconvenios.Equipoinforme
   add constraint fk_equipoin_reference_informe foreign key (strid_informe)
      references smaconvenios.Informe (strid_informe)
      on delete restrict on update restrict;
	  
/*==============================================================*/
/* table: archivos                                              */
/*==============================================================*/
create table smaconvenios.Archivos (
   strid_informe        varchar(10)          null,
   strid_archivo        varchar(10)          null,
   strenlace            varchar(250)         null
);


alter table smaconvenios.Archivos
   add constraint fk_archivos_reference_informe foreign key (strid_informe)
      references smaconvenios.Informe (strid_informe)
      on delete restrict on update restrict;

/*==============================================================*/
/* table: seguimiento                                           */
/*==============================================================*/
create table smaconvenios.seguimiento (
   intidregistro        smallserial          not null,
   dtfechacarga         date                 null,
   intnumentregados     int4                 null,
   intnumpendientes     int4                 null,
   intnumvalidados      int4                 null,
   fltavanceglobal      decimal(2)           null,
   constraint pk_seguimiento primary key (intidregistro)
);
