/* TABLA INSTITUCION */
/* AGREGAR INSTITUCION */

CREATE PROCEDURE smaconvenios.AddInstitucion
(
	c_strinstitucion VARCHAR(256)
	
)
LANGUAGE plpgsql AS 
$$
BEGIN 
	INSERT INTO smaconvenios.institucion (strinstitucion)VALUES
	(c_strinstitucion);
END 
$$;

/*LLAMADO*/

CALL smaconvenios.AddInstitucion('Pepsi');

/* FUNCION GET INSTITUCION*/
CREATE OR REPLACE FUNCTION smaconvenios.GetInstitucion()
RETURNS TABLE (
	
		intidinstitucion INT,
		strinstitucion VARCHAR(256)
					
)
AS $$
BEGIN 
	RETURN QUERY SELECT * FROM smaconvenios.institucion;
END; 
$$ LANGUAGE plpgsql;

/*LLAMADO FUNCION */

SELECT  * FROM smaconvenios.GetInstitucion();


/*FUNCION BUSCAR INSTITUCION ID*/

CREATE OR REPLACE FUNCTION smaconvenios.BuscarInstitucion(codigo INTEGER)
RETURNS TABLE (
   		c_intidinstitucion INT,
		c_strinstitucion VARCHAR(256)
)
AS $$
BEGIN
    
    RETURN QUERY SELECT * FROM smaconvenios.institucion WHERE codigo = intidinstitucion;
END;
$$ LANGUAGE plpgsql;

/*LLAMADO PROCEDIMIENTO */

SELECT * FROM smaconvenios.BuscarInstitucion(1);

/*MODIFICAR INSTITUCION*/

CREATE OR REPLACE PROCEDURE smaconvenios.ModInstitucion
(
	
		c_intidinstitucion INT,
		c_strinstitucion VARCHAR(256)
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaconvenios.institucion
	SET strinstitucion = c_strinstitucion
	WHERE intidinstitucion = c_intidinstitucion; 
END 
$$;

/*LLAMADO MOD INSTITUCION */

CALL smaconvenios.ModInstitucion(1,'UNACH');
