/* TABLA ACTIVIDAD INFORME */
/* AGREGAR ACTIVIDAD INFORME */

select * from smaconvenios.actividadinforme

CREATE PROCEDURE smaconvenios.AddActInforme
(
   c_intnumactividad      int,
   c_stridinforme         varchar(32),
   c_stractividad         varchar(512),
   c_dtfechainicioactividad date,
   c_dtfechafinactividad  date
)
LANGUAGE plpgsql AS 
$$
BEGIN 
    INSERT INTO smaconvenios.actividadinforme (intnumactividad, stridinforme, stractividad, dtfechainicioactividad, dtfechafinactividad)VALUES
	(c_intnumactividad, c_stridinforme, c_stractividad, c_dtfechainicioactividad, c_dtfechafinactividad);
END 
$$;

/*LLAMADO*/

CALL smaconvenios.AddConvenio_AddActInforme(?, ?);

/* FUNCION GET INFORME*/
CREATE OR REPLACE FUNCTION smaconvenios.GetActInforme()
RETURNS TABLE (

    intnumactividad      int,
    stridinforme         varchar(32),
    stractividad         varchar(512),
    dtfechainicioactividad date,
    dtfechafinactividad  date
   				
)
AS $$
BEGIN 
	RETURN QUERY SELECT * FROM smaconvenios.actividadinforme;
END; 
$$ LANGUAGE plpgsql;

/*LLAMADO FUNCION */

SELECT  * FROM smaconvenios.GetActInforme();


/*FUNCION BUSCAR INFORME ID*/

CREATE OR REPLACE FUNCTION smaconvenios.BuscarActInforme(codigo VARCHAR(32))
RETURNS TABLE (

   c_intnumactividad      int,
   c_stridinforme         varchar(32),
   c_stractividad         varchar(512),
   c_dtfechainicioactividad date,
   c_dtfechafinactividad  date
   
)
AS $$
BEGIN
    
    RETURN QUERY SELECT * FROM smaconvenios.actividadinforme WHERE codigo = stridinforme;
END;
$$ LANGUAGE plpgsql;

/*LLAMADO PROCEDIMIENTO */

SELECT * FROM smaconvenios.BuscarActInforme('d');

/*MODIFICAR INFORME*/

CREATE OR REPLACE PROCEDURE smaconvenios.ModActInforme 
(
   c_intnumactividad      int,
   c_stridinforme         varchar(32),
   c_stractividad         varchar(512),
   c_dtfechainicioactividad date,
   c_dtfechafinactividad  date
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaconvenios.actividadinforme
	SET  intnumactividad=c_intnumactividad, stractividad= c_stractividad, dtfechainicioactividad =c_dtfechainicioactividad, dtfechafinactividad= c_dtfechafinactividad 
	WHERE stridinforme = c_stridinforme; 
END 
$$;

/*LLAMADO MOD INFORME */

CALL smaconvenios.ModConvenio_Institucion();

/*DELETE INFORME*/

CREATE OR REPLACE PROCEDURE smaconvenios.DelActInforme 
(
	
		c_stridinforme         varchar(32)
		
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	DELETE FROM smaconvenios.actividadinforme
	WHERE stridinforme= c_stridinforme; 
END 
$$;

/*LLAMADO DELINFORME*/
CALL smaconvenios.DelInforme('1');