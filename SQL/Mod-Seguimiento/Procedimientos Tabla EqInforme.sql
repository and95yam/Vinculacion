/* TABLA EQINFORME */
/* AGREGAR EQINFORME */

select * from smaconvenios.eqinforme

CREATE PROCEDURE smaconvenios.AddEqInforme
(
   c_stridinforme         varchar(32),
   c_intiddependencia     int4,
   c_strciequipo          varchar(10),
   c_strnombreequipo      varchar(256),
   c_stractividadequipo   varchar(256)
)
LANGUAGE plpgsql AS 
$$
BEGIN 
    INSERT INTO smaconvenios.eqinforme (stridinforme, intiddependencia, strciequipo, strnombreequipo, stractividadequipo)VALUES
	(c_stridinforme, c_intiddependencia, c_strciequipo, c_strnombreequipo, c_stractividadequipo);
END 
$$;

/*LLAMADO*/

CALL smaconvenios.AddEqInforme(?, ?);

/* FUNCION GET EQINFORME*/
CREATE OR REPLACE FUNCTION smaconvenios.GetEqInforme()
RETURNS TABLE (

   stridinforme         varchar(32),
   intiddependencia     int4,
   strciequipo          varchar(10),
   strnombreequipo      varchar(256),
   stractividadequipo   varchar(256) 
   				
)
AS $$
BEGIN 
	RETURN QUERY SELECT * FROM smaconvenios.eqinforme;
END; 
$$ LANGUAGE plpgsql;

/*LLAMADO FUNCION */

SELECT  * FROM smaconvenios.GetEqInforme();


/*FUNCION BUSCAR EQINFORME ID*/

CREATE OR REPLACE FUNCTION smaconvenios.BuscarEqInforme(codigo VARCHAR(32))
RETURNS TABLE (

   c_stridinforme         varchar(32),
   c_intiddependencia     int4,
   c_strciequipo          varchar(10),
   c_strnombreequipo      varchar(256),
   c_stractividadequipo   varchar(256)
   
)
AS $$
BEGIN
    
    RETURN QUERY SELECT * FROM smaconvenios.eqinforme WHERE codigo = stridinforme;
END;
$$ LANGUAGE plpgsql;

/*LLAMADO PROCEDIMIENTO */

SELECT * FROM smaconvenios.BuscarEqInforme('d');

/*MODIFICAR INFORME*/

CREATE OR REPLACE PROCEDURE smaconvenios.ModConvenio_Institucion 
(
   c_stridinforme         varchar(32),
   c_intiddependencia     int4,
   c_strciequipo          varchar(10),
   c_strnombreequipo      varchar(256),
   c_stractividadequipo   varchar(256)
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaconvenios.eqinforme
	SET  intiddependencia = c_intiddependencia, strciequipo = c_strciequipo, strnombreequipo = c_strnombreequipo, stractividadequipo=c_stractividadequipo
	WHERE stridinforme = c_stridinforme; 
END 
$$;

/*LLAMADO MOD EQINFORME */

CALL smaconvenios.ModConvenio_Institucion();


/* DELETE EQINFORME */

CREATE OR REPLACE PROCEDURE smaconvenios.DelEqInforme 
(
	
		c_stridinforme         varchar(32)
		
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	DELETE FROM smaconvenios.eqinforme
	WHERE stridinforme= c_stridinforme; 
END 
$$;

/*LLAMADO DELEQINFORME*/

CALL smaconvenios.DelEqInforme();