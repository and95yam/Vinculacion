/* TABLA DEPENDENCIA */
/* AGREGAR DEPENDENCIA */ 
CREATE PROCEDURE smaconvenios.AddDependencia
(
	c_strnombredependencia VARCHAR(32),
	c_strtipodependencia VARCHAR(32)
)
LANGUAGE plpgsql AS 
$$
BEGIN 
	INSERT INTO smaconvenios.dependencia (strnombredependencia,strtipodependencia)VALUES
	(c_strnombredependencia,c_strtipodependencia);
END 
$$;

/*LLAMADO*/

CALL smaconvenios.AddDependencia('?','?');

/* FUNCION GET DEPENDENCIA*/
CREATE OR REPLACE FUNCTION smaconvenios.GetDependencia()
RETURNS TABLE (
	
		intiddependencia INT,
        strnombredependencia VARCHAR(32),
	    strtipodependencia VARCHAR(32)
					
)
AS $$
BEGIN 
	RETURN QUERY SELECT * FROM smaconvenios.dependencia;
END; 
$$ LANGUAGE plpgsql;

/*LLAMADO FUNCION */

SELECT  * FROM smaconvenios.GetDependencia();

/*FUNCION BUSCAR DEPENDENCIA ID*/

CREATE OR REPLACE FUNCTION smaconvenios.BuscarDependencia(codigo INTEGER)
RETURNS TABLE (
   		c_intiddependencia INT,
        c_strnombredependencia VARCHAR(32),
	    c_strtipodependencia VARCHAR(32) 
)
AS $$
BEGIN
    
    RETURN QUERY SELECT * FROM smaconvenios.dependencia WHERE codigo = intiddependencia;
END;
$$ LANGUAGE plpgsql;

/*LLAMADO PROCEDIMIENTO */

SELECT * FROM smaconvenios.BuscarDependencia(1);

/*MODIFICAR DEPENDENCIA*/

CREATE OR REPLACE PROCEDURE smaconvenios.ModDependencia
(
	
		c_intiddependencia INT,
        c_strnombredependencia VARCHAR(32),
	    c_strtipodependencia VARCHAR(32) 
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaconvenios.dependencia 
	SET strnombredependencia = c_strnombredependencia, strtipodependencia =  c_strtipodependencia
	WHERE intiddependencia = c_intiddependencia; 
END 
$$;

/*LLAMADO MOD DEPENDENCIA */

CALL smaconvenios.ModDependencia(1,'FADE','Académica');
