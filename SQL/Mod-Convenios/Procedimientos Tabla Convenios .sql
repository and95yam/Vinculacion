/* TABLA CONVENIOS */
/* AGREGAR CONVENIO */

select * from smaconvenios.convenio

CREATE PROCEDURE smaconvenios.AddConvenio
(
   c_stridconvenio        varchar(16),          
   c_strcicoordinador     varchar(10),         
   c_strtituloconvenio    varchar(256),         
   c_strnaturalezaconvenio varchar(16),         
   c_strclasificacionconvenio varchar(16),      
   c_strobjetivoconvenio  varchar(1024),        
   c_dtfechainicioconvenio date,                
   c_dtfechafinconvenio   date,                 
   c_intrazonconvenio     int,                  
   c_fltavanceconvenio    decimal,              
   c_strarchivoconvenio   varchar(256)         
	
)
LANGUAGE plpgsql AS 
$$
BEGIN 
    INSERT INTO smaconvenios.convenio(stridconvenio, strcicoordinador, strtituloconvenio, strnaturalezaconvenio, strclasificacionconvenio, strobjetivoconvenio, dtfechainicioconvenio, dtfechafinconvenio, intrazonconvenio, fltavanceconvenio, strarchivoconvenio)VALUES
	(c_stridconvenio, c_strcicoordinador, c_strtituloconvenio, c_strnaturalezaconvenio, c_strclasificacionconvenio, c_strobjetivoconvenio, c_dtfechainicioconvenio, c_dtfechafinconvenio, c_intrazonconvenio, c_fltavanceconvenio, c_strarchivoconvenio);
END 
$$;

/*LLAMADO*/

CALL smaconvenios.AddConvenio(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);

/* FUNCION GET COONVENIOS FULL*/
/*INFORMACION DE TOTAL DE CADA CONVENIO */
/*PROBABLEMENTE PARA REPORTES*/

CREATE OR REPLACE FUNCTION smaconvenios.GetConvenio()
RETURNS TABLE (
   
   strtituloconvenio    varchar(256),
   strnombrescoordinador varchar(256),
   stridconvenio        varchar(16),          
   strcicoordinador     varchar(10),         
   strcorreocoordinador varchar(256),
   strtelefonocoordinador varchar(256),
   strnombredependencia varchar(32),         
   strnaturalezaconvenio varchar(16),         
   strclasificacionconvenio varchar(16),
   blnacademico boolean,
   blninvestigacion  boolean,
   blnpracticas boolean,
   blnvinculacion boolean,
   strinstitucion varchar(256),	
   strobjetivoconvenio  varchar(1024),        
   dtfechainicioconvenio date,                
   dtfechafinconvenio   date,
   strvigencia INTERVAL,                 
   intrazonconvenio     int,                  
   fltavanceconvenio    decimal,              
   strarchivoconvenio   varchar(256)
					
)
AS $$
BEGIN 
Return Query
	        SELECT conv.strtituloconvenio, coord.strnombrescoordinador, conv.stridconvenio,coord.strcicoordinador,coord.strcorreocoordinador,coord.strtelefonocoordinador,
           dep.strnombredependencia, conv.strnaturalezaconvenio,conv.strclasificacionconvenio, ej.blnacademico, ej.blninvestigacion, ej.blnpracticas, ej.blnvinculacion,
           inst.strinstitucion, conv.strobjetivoconvenio, conv.dtfechainicioconvenio, conv.dtfechafinconvenio, AGE(conv.dtfechafinconvenio, conv.dtfechainicioconvenio),
           conv.intrazonconvenio,conv.fltavanceconvenio,conv.strarchivoconvenio
      FROM smaconvenios.convenio AS conv 
      JOIN smaconvenios.coordinador AS coord 
      ON conv.strcicoordinador = coord.strcicoordinador
      JOIN smaconvenios.convenio_dependencia AS cd
      ON conv.stridconvenio = cd.stridconvenio
      JOIN smaconvenios.dependencia AS dep 
      ON cd.intiddependencia = dep.intiddependencia
      JOIN smaconvenios.convenio_institucion AS ci
      ON conv.stridconvenio=ci.stridconvenio
      JOIN smaconvenios.institucion AS inst
      ON ci.intidinstitucion = inst.intidinstitucion
      JOIN smaconvenios.ejes AS ej
      ON conv.stridconvenio = ej.stridconvenio;
END; 
$$ LANGUAGE plpgsql;


/*LLAMADO FUNCION */

SELECT  * FROM smaconvenios.GetConvenio();


/*FUNCION BUSCAR CONVENIO ID*/

CREATE OR REPLACE FUNCTION smaconvenios.BuscarConvenio(codigo VARCHAR(16))
RETURNS TABLE (

   c_stridconvenio        varchar(16),          
   c_strcicoordinador     varchar(10),          
   c_strtituloconvenio    varchar(256),         
   c_strnaturalezaconvenio varchar(16),         
   c_strclasificacionconvenio varchar(16),      
   c_strobjetivoconvenio  varchar(1024),        
   c_dtfechainicioconvenio date,                
   c_dtfechafinconvenio   date,                 
   c_intrazonconvenio     int,                  
   c_fltavanceconvenio    decimal,              
   c_strarchivoconvenio   varchar(256)
)
AS $$
BEGIN
    
    RETURN QUERY SELECT * FROM smaconvenios.convenio WHERE codigo = stridconvenio;
END;
$$ LANGUAGE plpgsql;

/*LLAMADO PROCEDIMIENTO */

SELECT * FROM smaconvenios.BuscarConvenio('o');

/*MODIFICAR CONVENIO */

CREATE OR REPLACE PROCEDURE smaconvenios.ModConvenio
(
	
   c_stridconvenio        varchar(16),          
   c_strcicoordinador     varchar(10),          
   c_strtituloconvenio    varchar(256),         
   c_strnaturalezaconvenio varchar(16),         
   c_strclasificacionconvenio varchar(16),      
   c_strobjetivoconvenio  varchar(1024),        
   c_dtfechainicioconvenio date,                
   c_dtfechafinconvenio   date,                 
   c_intrazonconvenio     int,                               
   c_strarchivoconvenio   varchar(256)
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaconvenios.convenio
	SET strcicoordinador = c_strcicoordinador, strtituloconvenio = c_strtituloconvenio, strnaturalezaconvenio = c_strnaturalezaconvenio, strclasificacionconvenio= c_strclasificacionconvenio, strobjetivoconvenio= c_strobjetivoconvenio, dtfechainicioconvenio = c_dtfechainicioconvenio, dtfechafinconvenio= c_dtfechafinconvenio, intrazonconvenio = c_intrazonconvenio, strarchivoconvenio=c_strarchivoconvenio
	WHERE stridconvenio = c_stridconvenio; 
END 
$$;

/*LLAMADO MOD CONVENIO */

CALL smaconvenios.ModConvenio();


/*BUSCAR CONVENIO COORDINADOR */
/*Buscara todos los convenios asignados a un coordinador*/
/*ROL ANALISTA VINCULACION*/

CREATE OR REPLACE FUNCTION smaconvenios.BuscarConvenioCordinador(codigo VARCHAR(16))
RETURNS TABLE (

   
   c_stridconvenio        varchar(16),
   c_strtituloconvenio    varchar(256),          
   c_strnaturalezaconvenio varchar(16),         
   c_strclasificacionconvenio varchar(16),
   c_strnombredependencia varchar(32),         
   c_blnacademico boolean,
   c_blninvestigacion  boolean,
   c_blnpracticas boolean,
   c_blnvinculacion boolean,
   c_strinstitucion varchar(256),	       
   c_dtfechainicioconvenio date,                
   c_strvigencia INTERVAL,                                   
   c_fltavanceconvenio    decimal,              
   c_strarchivoconvenio   varchar(256)
)
AS $$
BEGIN
 
	RETURN QUERY
   SELECT conv.stridconvenio, conv.strtituloconvenio, conv.strnaturalezaconvenio,conv.strclasificacionconvenio, 
       dep.strnombredependencia,  ej.blnacademico, ej.blninvestigacion, ej.blnpracticas, ej.blnvinculacion,
       inst.strinstitucion, conv.dtfechainicioconvenio,  AGE(conv.dtfechafinconvenio, conv.dtfechainicioconvenio),
       conv.fltavanceconvenio, conv.strarchivoconvenio
   FROM smaconvenios.convenio AS conv 
   JOIN smaconvenios.coordinador AS coord 
   ON conv.strcicoordinador = coord.strcicoordinador
   JOIN smaconvenios.convenio_dependencia AS cd
   ON conv.stridconvenio = cd.stridconvenio
   JOIN smaconvenios.dependencia AS dep 
   ON cd.intiddependencia = dep.intiddependencia
   JOIN smaconvenios.convenio_institucion AS ci
   ON conv.stridconvenio=ci.stridconvenio
   JOIN smaconvenios.institucion AS inst
   ON ci.intidinstitucion = inst.intidinstitucion
   JOIN smaconvenios.ejes AS ej
   ON conv.stridconvenio = ej.stridconvenio
   WHERE coord.strcicoordinador = codigo;
    
END;
$$ LANGUAGE plpgsql;

/*VER DATOS CONVENIO*/
/*Mostrara todos los datos de dicho convenio*/

CREATE OR REPLACE FUNCTION smaconvenios.verDatosConvenio(codigo VARCHAR(16))
RETURNS TABLE (

   c_strtituloconvenio    varchar(256),
   c_strnombrescoordinador varchar(256),
   c_stridconvenio        varchar(16),          
   c_strcicoordinador     varchar(10),         
   c_strcorreocoordinador varchar(256),
   c_strtelefonocoordinador varchar(256),
   c_strnombredependencia varchar(32),         
   c_strnaturalezaconvenio varchar(16),         
   c_strclasificacionconvenio varchar(16),
   c_blnacademico boolean,
   c_blninvestigacion  boolean,
   c_blnpracticas boolean,
   c_blnvinculacion boolean,
   c_strinstitucion varchar(256),	
   c_strobjetivoconvenio  varchar(1024),        
   c_dtfechainicioconvenio date,                
   c_dtfechafinconvenio   date,
   c_strvigencia INTERVAL,                 
   c_intrazonconvenio     int,                  
   c_fltavanceconvenio    decimal,              
   c_strarchivoconvenio   varchar(256)
)
AS $$
BEGIN
 
	RETURN QUERY
   SELECT conv.strtituloconvenio, coord.strnombrescoordinador, conv.stridconvenio,coord.strcicoordinador,coord.strcorreocoordinador,coord.strtelefonocoordinador,
       dep.strnombredependencia, conv.strnaturalezaconvenio,conv.strclasificacionconvenio, ej.blnacademico, ej.blninvestigacion, ej.blnpracticas, ej.blnvinculacion,
       inst.strinstitucion, conv.strobjetivoconvenio, conv.dtfechainicioconvenio, conv.dtfechafinconvenio, AGE(conv.dtfechafinconvenio, conv.dtfechainicioconvenio),
       conv.intrazonconvenio,conv.fltavanceconvenio,conv.strarchivoconvenio
	FROM smaconvenios.convenio AS conv 
	JOIN smaconvenios.coordinador AS coord 
	ON conv.strcicoordinador = coord.strcicoordinador
	JOIN smaconvenios.convenio_dependencia AS cd
	ON conv.stridconvenio = cd.stridconvenio
	JOIN smaconvenios.dependencia AS dep 
	ON cd.intiddependencia = dep.intiddependencia
	JOIN smaconvenios.convenio_institucion AS ci
	ON conv.stridconvenio=ci.stridconvenio
	JOIN smaconvenios.institucion AS inst
	ON ci.intidinstitucion = inst.intidinstitucion
	JOIN smaconvenios.ejes AS ej
	ON conv.stridconvenio = ej.stridconvenio
	WHERE conv.stridconvenio = codigo;
    
END;
$$ LANGUAGE plpgsql;

/* Ver Datos convenio en tabla (Analista Vinculacion)*/

CREATE OR REPLACE FUNCTION smaconvenios.VerTablaDatosConvenioAnalistaVinculacion()
RETURNS TABLE (

   c_stridconvenio        varchar(16),
   c_strtituloconvenio    varchar(256),
   c_strnombrescoordinador varchar(256),
   c_strnaturalezaconvenio varchar(16),         
   c_strclasificacionconvenio varchar(16),          
   c_strnombredependencia varchar(32),         
   c_blnacademico boolean,
   c_blninvestigacion  boolean,
   c_blnpracticas boolean,
   c_blnvinculacion boolean,
   c_strinstitucion varchar(256),	       
   c_dtfechainicioconvenio date,                
   c_strvigencia INTERVAL,   
   c_fltavanceconvenio    decimal,                            
   c_strarchivoconvenio   varchar(256)
)
AS $$
BEGIN
 
	RETURN QUERY
   SELECT conv.stridconvenio, conv.strtituloconvenio, coord.strnombrescoordinador,conv.strnaturalezaconvenio,conv.strclasificacionconvenio, 
       dep.strnombredependencia,  ej.blnacademico, ej.blninvestigacion, ej.blnpracticas, ej.blnvinculacion,
       inst.strinstitucion, conv.dtfechainicioconvenio,  AGE(conv.dtfechafinconvenio, conv.dtfechainicioconvenio),
       conv.fltavanceconvenio, conv.strarchivoconvenio
   FROM smaconvenios.convenio AS conv 
   JOIN smaconvenios.coordinador AS coord 
   ON conv.strcicoordinador = coord.strcicoordinador
   JOIN smaconvenios.convenio_dependencia AS cd
   ON conv.stridconvenio = cd.stridconvenio
   JOIN smaconvenios.dependencia AS dep 
   ON cd.intiddependencia = dep.intiddependencia
   JOIN smaconvenios.convenio_institucion AS ci
   ON conv.stridconvenio=ci.stridconvenio
   JOIN smaconvenios.institucion AS inst
   ON ci.intidinstitucion = inst.intidinstitucion
   JOIN smaconvenios.ejes AS ej
   ON conv.stridconvenio = ej.stridconvenio;
    
END;
$$ LANGUAGE plpgsql;


/* VER DATOS CONVENIO INVITADO */
/*MUESTRA SOLO LA INFORMACION NECESARIA PARA EL INVITADO*/

CREATE OR REPLACE FUNCTION smaconvenios.VerTablaDatosConveniosInvitado()
RETURNS TABLE (

   c_stridconvenio        varchar(16),
   c_strtituloconvenio    varchar(256),          
   c_strnaturalezaconvenio varchar(16),         
   c_strclasificacionconvenio varchar(16),
   c_strnombredependencia varchar(32),         
   c_blnacademico boolean,
   c_blninvestigacion  boolean,
   c_blnpracticas boolean,
   c_blnvinculacion boolean,
   c_strinstitucion varchar(256),	       
   c_dtfechainicioconvenio date,                
   c_strvigencia INTERVAL,                                   
   c_fltavanceconvenio    decimal,              
   c_strarchivoconvenio   varchar(256)
)
AS $$
BEGIN
 
	RETURN QUERY
   SELECT conv.stridconvenio, conv.strtituloconvenio, conv.strnaturalezaconvenio,conv.strclasificacionconvenio, 
       dep.strnombredependencia,  ej.blnacademico, ej.blninvestigacion, ej.blnpracticas, ej.blnvinculacion,
       inst.strinstitucion, conv.dtfechainicioconvenio,  AGE(conv.dtfechafinconvenio, conv.dtfechainicioconvenio),
       conv.fltavanceconvenio, conv.strarchivoconvenio
   FROM smaconvenios.convenio AS conv 
   JOIN smaconvenios.coordinador AS coord 
   ON conv.strcicoordinador = coord.strcicoordinador
   JOIN smaconvenios.convenio_dependencia AS cd
   ON conv.stridconvenio = cd.stridconvenio
   JOIN smaconvenios.dependencia AS dep 
   ON cd.intiddependencia = dep.intiddependencia
   JOIN smaconvenios.convenio_institucion AS ci
   ON conv.stridconvenio=ci.stridconvenio
   JOIN smaconvenios.institucion AS inst
   ON ci.intidinstitucion = inst.intidinstitucion
   JOIN smaconvenios.ejes AS ej
   ON conv.stridconvenio = ej.stridconvenio
   Where conv.dtfechafinconvenio > CURRENT_DATE;
    
END;
$$ LANGUAGE plpgsql;