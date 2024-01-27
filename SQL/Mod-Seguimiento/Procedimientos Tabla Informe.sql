/* TABLA INFORMES */
/* AGREGAR INFORMES */

select * from smaconvenios.informe

CREATE PROCEDURE smaconvenios.AddInforme
(
   c_stridinforme         varchar(32),
   c_intidplanificacion   int4,
   c_strperiodo           varchar(64),
   c_stridconvenio        varchar(16),
   c_strbeneficiariodirecto varchar(512),
   c_strbeneficiodirecto  varchar(1024),
   c_strbeneficiarioindirecto varchar(512),
   c_strbeneficioindirecto varchar(1024),
   c_strresultados        varchar(1024),
   c_strobservaciones     varchar(1024),
   c_stranexo             varchar(256)
)
LANGUAGE plpgsql AS 
$$
BEGIN 
    INSERT INTO smaconvenios.informe (stridinforme, intidplanificacion, strperiodo, stridconvenio, strbeneficiariodirecto, strbeneficiodirecto, strbeneficiarioindirecto, strbeneficioindirecto, strresultados, strobservaciones, stranexo)VALUES
	(c_stridinforme, c_intidplanificacion, c_strperiodo, c_stridconvenio, c_strbeneficiariodirecto, c_strbeneficiodirecto, c_strbeneficiarioindirecto, c_strbeneficioindirecto, c_strresultados, c_strobservaciones, c_stranexo);
END 
$$;

/*LLAMADO*/

CALL smaconvenios.AddInforme(?, ?);

/* FUNCION GET INFORME*/
CREATE OR REPLACE FUNCTION smaconvenios.GetInforme()
RETURNS TABLE (

    stridinforme         varchar(32),
    intidplanificacion   int4,
    strperiodo           varchar(64),
    stridconvenio        varchar(16),
    strbeneficiariodirecto varchar(512),
    strbeneficiodirecto  varchar(1024),
    strbeneficiarioindirecto varchar(512),
    strbeneficioindirecto varchar(1024),
    strresultados        varchar(1024),
    strobservaciones     varchar(1024),
    stranexo             varchar(256),
    dtfechacreacion      date
   				
)
AS $$
BEGIN 
	RETURN QUERY SELECT * FROM smaconvenios.informe;
END; 
$$ LANGUAGE plpgsql;

/*LLAMADO FUNCION */

SELECT  * FROM smaconvenios.GetInforme();


/*FUNCION BUSCAR INFORME ID*/

CREATE OR REPLACE FUNCTION smaconvenios.BuscarInforme(codigo VARCHAR(32))
RETURNS TABLE (

   c_stridinforme         varchar(32),
   c_intidplanificacion   int4,
   c_strperiodo           varchar(64),
   c_stridconvenio        varchar(16),
   c_strbeneficiariodirecto varchar(512),
   c_strbeneficiodirecto  varchar(1024),
   c_strbeneficiarioindirecto varchar(512),
   c_strbeneficioindirecto varchar(1024),
   c_strresultados        varchar(1024),
   c_strobservaciones     varchar(1024),
   c_stranexo             varchar(256)
   
)
AS $$
BEGIN
    
    RETURN QUERY SELECT * FROM smaconvenios.informe WHERE codigo = stridinforme;
END;
$$ LANGUAGE plpgsql;

/*LLAMADO PROCEDIMIENTO */

SELECT * FROM smaconvenios.BuscarInforme('d');

/* BUSCAR INFORME POR ID DE CONVENIOS*/

CREATE OR REPLACE FUNCTION smaconvenios.getInformeCoordinador (codigo VARCHAR(32))
RETURNS TABLE (

   c_stridinforme         varchar(64),
   c_intidplanificacion   int,
   c_strperiodo           varchar(64),
   c_stridconvenio        varchar(16),
   c_strbeneficiariodirecto varchar(512),
   c_strbeneficiodirecto  varchar(1024),
   c_strbeneficiarioindirecto varchar(512),
   c_strbeneficioindirecto varchar(1024),
   c_strresultados        varchar(1024),
   c_strobservaciones     varchar(1024),
   c_stranexo             varchar(256),
   c_dtfechacreacion	  date	
   
)
AS $$
BEGIN
    
    RETURN QUERY SELECT * FROM smaconvenios.informe WHERE codigo = stridconvenio;
END;
$$ LANGUAGE plpgsql;

/*LLAMADO*/

select * from smaconvenios.getInformeCoordinador('cp.01')

/*Ver Datos informe ingresando cedula de coordinador*/


CREATE OR REPLACE FUNCTION smaconvenios.GetDatosInforme(codigo VARCHAR(64))
RETURNS TABLE (

    c_stridinforme         varchar(64),
    c_intidplanificacion   int,
    c_strperiodo           varchar(64),
    c_stridconvenio        varchar(16),
    c_strtituloconvenio     varchar(256),
	c_strcicoordinador	   varchar(10),	
    c_strbeneficiariodirecto varchar(512),
    c_strbeneficiodirecto  varchar(1024),
    c_strbeneficiarioindirecto varchar(512),
    c_strbeneficioindirecto varchar(1024),
    c_strresultados        varchar(1024),
    c_strobservaciones     varchar(1024),
    c_stranexo             varchar(256),
    c_dtfechacreacion      date,
   	c_strestadoinforme	   varchar(16),
	c_blnfirmado		   bool
)
AS $$
BEGIN 
	RETURN QUERY 
	select inf.stridinforme, inf.intidplanificacion, inf.strperiodo, inf.stridconvenio, conv.strtituloconvenio, conv.strcicoordinador, inf.strbeneficiariodirecto,
	inf.strbeneficiodirecto, inf.strbeneficiarioindirecto, inf.strbeneficioindirecto, inf.strresultados, inf.strobservaciones,
	inf.stranexo, inf.dtfechacreacion, estinf.strestadoinforme, estinf.blnfirmado
	   
	FROM smaconvenios.informe AS inf
	JOIN smaconvenios.convenio AS conv
	ON inf.stridconvenio = conv.stridconvenio
	JOIN smaconvenios.estadoinforme AS estinf
	ON estinf.stridinforme = inf.stridinforme 
	WHERE conv.strcicoordinador= codigo;
END; 
$$ LANGUAGE plpgsql;

/*LLAMADO*/

SELECT * FROM  smaconvenios.getdatosinforme(
	'0955416755'
)

/*MODIFICAR INFORME*/

CREATE OR REPLACE PROCEDURE smaconvenios.ModInforme 
(
   c_stridinforme         varchar(32),
   c_intidplanificacion   int,
   c_strperiodo           varchar(64),
   c_stridconvenio        varchar(16),
   c_strbeneficiariodirecto varchar(512),
   c_strbeneficiodirecto  varchar(1024),
   c_strbeneficiarioindirecto varchar(512),
   c_strbeneficioindirecto varchar(1024),
   c_strresultados        varchar(1024),
   c_strobservaciones     varchar(1024),
   c_stranexo             varchar(256)
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaconvenios.informe
	SET  intidplanificacion=c_intidplanificacion, strperiodo = c_strperiodo, stridconvenio = c_stridconvenio, strbeneficiariodirecto= c_strbeneficiariodirecto, strbeneficiodirecto = c_strbeneficiodirecto, strbeneficiarioindirecto = c_strbeneficiarioindirecto, strbeneficioindirecto = c_strbeneficioindirecto, strresultados = c_strresultados , strobservaciones = c_strobservaciones, stranexo = c_stranexo
	WHERE stridinforme = c_stridinforme; 
END 
$$;

/*LLAMADO MOD INFORME */

CALL smaconvenios.ModInforme ();

/*DELETE INFORME*/

CREATE OR REPLACE PROCEDURE smaconvenios.DelInforme 
(
	
		c_stridinforme         varchar(32)
		
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	DELETE FROM smaconvenios.informe 
	WHERE stridinforme= c_stridinforme; 
END 
$$;

/*LLAMADO DELINFORME*/
CALL smaconvenios.DelInforme('1');


/*VER INFORMES SEGUN CONVENIO*/

CREATE OR REPLACE FUNCTION smaconvenios.GetDatosInformeConvenio(codigo VARCHAR(64))
RETURNS TABLE (

    c_stridinforme         varchar(64),
    c_intidplanificacion   int,
    c_strperiodo           varchar(64),
    c_stridconvenio        varchar(16),
	c_strcicoordinador	   varchar(10),	
    c_strbeneficiariodirecto varchar(512),
    c_strbeneficiodirecto  varchar(1024),
    c_strbeneficiarioindirecto varchar(512),
    c_strbeneficioindirecto varchar(1024),
    c_strresultados        varchar(1024),
    c_strobservaciones     varchar(1024),
    c_stranexo             varchar(256),
    c_dtfechacreacion      date,
   	c_strestadoinforme	   varchar(16),
	c_blnfirmado		   bool
)
AS $$
BEGIN 
	RETURN QUERY 
	select inf.stridinforme, inf.intidplanificacion, inf.strperiodo, inf.stridconvenio, conv.strcicoordinador, inf.strbeneficiariodirecto,
	inf.strbeneficiodirecto, inf.strbeneficiarioindirecto, inf.strbeneficioindirecto, inf.strresultados, inf.strobservaciones,
	inf.stranexo, inf.dtfechacreacion, estinf.strestadoinforme, estinf.blnfirmado
	   
	FROM smaconvenios.informe AS inf
	JOIN smaconvenios.convenio AS conv
	ON inf.stridconvenio = conv.stridconvenio
	JOIN smaconvenios.estadoinforme AS estinf
	ON estinf.stridinforme = inf.stridinforme 
	WHERE conv.stridconvenio= codigo;
END; 
$$ LANGUAGE plpgsql;

/* ELIMINAR INFORME */

CREATE OR REPLACE PROCEDURE smaconvenios.eliminarInforme(codigo VARCHAR(32))
AS
$$
BEGIN
    -- Eliminar de la tabla actividadinforme
    DELETE FROM smaconvenios.actividadinforme WHERE stridinforme = codigo;

    -- Eliminar de la tabla eqinforme
    DELETE FROM smaconvenios.eqinforme WHERE stridinforme = codigo;

    -- Eliminar de la tabla estadoinforme
    DELETE FROM smaconvenios.estadoinforme WHERE stridinforme = codigo;

    -- Eliminar de la tabla informe
    DELETE FROM smaconvenios.informe WHERE stridinforme = codigo;

    -- Puedes agregar más eliminaciones si es necesario

    -- Confirmar la transacción
    COMMIT;
END;
$$
LANGUAGE plpgsql;

call smaconvenios.eliminarInforme('cp.08.2024_2024-01_2024-07')