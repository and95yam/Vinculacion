/* TABLA CONVENIOS PLANIFICACION */
/* AGREGAR PLANIFICACION */

select * from smaconvenios.planificacion

CREATE PROCEDURE smaconvenios.AddPlanificacion
(
   c_strperiodo VARCHAR(64),          
   c_stridconvenio VARCHAR(16)
)
LANGUAGE plpgsql AS 
$$
BEGIN 
    INSERT INTO smaconvenios.planificacion (strperiodo,stridconvenio)VALUES
	( c_strperiodo, c_stridconvenio);
END 
$$;

/*LLAMADO*/

CALL smaconvenios.AddPlanificacion(?, ?);

/* FUNCION GET PLANIFICACION*/
CREATE OR REPLACE FUNCTION smaconvenios.GetPlanificacion()
RETURNS TABLE (

    intidplanificacion INT,
	strperiodo VARCHAR(64),          
    stridconvenio VARCHAR(16)
   				
)
AS $$
BEGIN 
	RETURN QUERY SELECT * FROM smaconvenios.planificacion;
END; 
$$ LANGUAGE plpgsql;

/*LLAMADO FUNCION */

SELECT  * FROM smaconvenios.GetPlanificacion();


/*FUNCION BUSCAR PLANIFICACION ID*/

CREATE OR REPLACE FUNCTION smaconvenios.BuscarPlanificacion(codigo INT)
RETURNS TABLE (

    c_intidplanificacion INT,
	c_strperiodo VARCHAR(64),          
    c_stridconvenio VARCHAR(16)
   
)
AS $$
BEGIN
    
    RETURN QUERY SELECT * FROM smaconvenios.planificacion WHERE codigo = intidplanificacion;
END;
$$ LANGUAGE plpgsql;

/*LLAMADO PROCEDIMIENTO */

SELECT * FROM smaconvenios.BuscarPlanificacion(1);

/*MODIFICAR PLANIFICACION*/

CREATE OR REPLACE PROCEDURE smaconvenios.ModPlanificacion
(
	c_intidplanificacion INT,
	c_strperiodo VARCHAR(64),          
    c_stridconvenio VARCHAR(16)
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaconvenios.planificacion
	SET  strperiodo = c_strperiodo, stridconvenio = c_stridconvenio
	WHERE intidplanificacion = c_intidplanificacion; 
END 
$$;

/*LLAMADO MOD CONVENIO_INSTITUCION */

CALL smaconvenios.BuscarPlanificacion();
