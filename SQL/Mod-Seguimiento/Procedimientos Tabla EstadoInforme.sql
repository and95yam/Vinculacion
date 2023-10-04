/* TABLA ESTADOINFORME */
/* AGREGAR ESTADOINFORME */

select * from smaconvenios.estadoinforme

CREATE PROCEDURE smaconvenios.AddEstadoInforme
(
   c_stridinforme         varchar(64),
   c_strestadoinforme     varchar(16),
   c_strobservacionesinforme          varchar(512),
   c_blnfirmado           boolean
)
LANGUAGE plpgsql AS 
$$
BEGIN 
    INSERT INTO smaconvenios.estadoinforme (stridinforme, strestadoinforme, strobservacionesinforme, blnfirmado)VALUES
	(c_stridinforme, c_strestadoinforme, c_strobservacionesinforme, c_blnfirmado);
END 
$$;

/*LLAMADO*/

CALL smaconvenios.AddEstadoInforme(?, ?,?,?);

/* FUNCION GET ESTADOINFORME*/
CREATE OR REPLACE FUNCTION smaconvenios.GetEstadoInforme()
RETURNS TABLE (

   c_stridinforme         varchar(32),
   c_strestadoinforme     varchar(16),
   c_strobsercacionesinforme          varchar(512),
   c_blnfirmado           boolean, 
   c_dtfechacreacioninforme date
   				
)
AS $$
BEGIN 
	RETURN QUERY SELECT stridinforme,strestadoinforme,strobservacionesinforme,blnfirmado,dtfechacreacioninforme FROM smaconvenios.estadoinforme;
END; 
$$ LANGUAGE plpgsql;

/*LLAMADO FUNCION */

SELECT  * FROM smaconvenios.GetEstadoInforme();


/*FUNCION BUSCAR EQINFORME ID*/

CREATE OR REPLACE FUNCTION smaconvenios.BuscarEstadoInforme(codigo VARCHAR(32))
RETURNS TABLE (

   c_stridinforme         varchar(32),
   c_strestadoinforme     varchar(16),
   c_strobsercacionesinforme          varchar(512),
   c_blnfirmado           boolean,
   c_fechacreacioninforme date
   
)
AS $$
BEGIN
    
    RETURN QUERY 
    SELECT stridinforme,strestadoinforme,strobservacionesinforme,blnfirmado,dtfechacreacioninforme FROM smaconvenios.estadoinforme
    WHERE stridinforme=codigo;
    
    
END;
$$ LANGUAGE plpgsql;

/*LLAMADO PROCEDIMIENTO */

SELECT * FROM smaconvenios.BuscarEstadoInforme('1211.CP.2012--2012-11');

/*MODIFICAR INFORME*/

CREATE OR REPLACE PROCEDURE smaconvenios.ModEstadoInforme 
(
   c_stridinforme         varchar(32),
   c_strestadoinforme     varchar(16),
   c_strobservacionesinforme          varchar(512),
   c_blnfirmado           boolean,
   c_fechaevaluacioninforme date 
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaconvenios.estadoinforme
	SET  strestadoinforme = c_strestadoinforme, strobservacionesinforme = c_strobservacionesinforme, blnfirmado= c_blnfirmado, dtfechaevaluacioninforme= c_fechaevaluacioninforme
	WHERE stridinforme = c_stridinforme; 
END 
$$;

/*LLAMADO MOD EQINFORME */

CALL smaconvenios.ModEstadoInforme();


/* DELETE EQINFORME */

CREATE OR REPLACE PROCEDURE smaconvenios.DelEstadoInforme 
(
	
		c_stridinforme         varchar(32)
		
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	DELETE FROM smaconvenios.estadoinforme
	WHERE stridinforme= c_stridinforme; 
END 
$$;

/*LLAMADO DELEQINFORME*/

CALL smaconvenios.DelEstadoInforme();