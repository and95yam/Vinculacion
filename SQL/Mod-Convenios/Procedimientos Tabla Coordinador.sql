/* TABLA COORDINADOR */
/* AGREGAR COORDINADOR */

select * from smaconvenios.coordinador

CREATE PROCEDURE smaconvenios.AddCoordinador
(
    c_strcicoordinador VARCHAR(10),
	c_intiddependencia INT,
    c_strnombrescoordinador VARCHAR(256),
    c_strcorreocoordinador VARCHAR(256),
    c_strtelefonocoordinador VARCHAR(256)
	
)
LANGUAGE plpgsql AS 
$$
BEGIN 
    INSERT INTO smaconvenios.coordinador(strcicoordinador,intiddependencia,strnombrescoordinador,strcorreocoordinador,strtelefonocoordinador)VALUES
	(c_strcicoordinador,c_intiddependencia,c_strnombrescoordinador,c_strcorreocoordinador,c_strtelefonocoordinador);
END 
$$;

/*LLAMADO*/

CALL smaconvenios.AddCoordinador('0600000001',1,'Nelly Pozo','nelly.pozo@espoch.edu.ec','0900000001');

/* FUNCION GET COORDINADOR*/
CREATE OR REPLACE FUNCTION smaconvenios.GetCoordinador()
RETURNS TABLE (
	
		strcicoordinador VARCHAR(10),
	    intiddependencia INT,
        strnombrescoordinador VARCHAR(256),
        strcorreocoordinador VARCHAR(256),
        strtelefonocoordinador VARCHAR(256)
					
)
AS $$
BEGIN 
	RETURN QUERY SELECT * FROM smaconvenios.coordinador;
END; 
$$ LANGUAGE plpgsql;

/*LLAMADO FUNCION */

SELECT  * FROM smaconvenios.GetCoordinador();

/*FUNCION GET COORDINADOR CON NOMBRE DE DEPENDENCIA*/

CREATE OR REPLACE FUNCTION smaconvenios.GetDatosCoordinador()
RETURNS TABLE (
	
		strcicoordinador VARCHAR(10),
        intiddependencia INT,
	    strnombredependencia VARCHAR(32),
        strnombrescoordinador VARCHAR(256),
        strcorreocoordinador VARCHAR(256),
        strtelefonocoordinador VARCHAR(256)
					
)
AS $$
BEGIN 
    RETURN QUERY
	SELECT  coord.strcicoordinador, coord.intiddependencia, dep.strnombredependencia, coord.strnombrescoordinador, coord.strcorreocoordinador, coord.strtelefonocoordinador 
	FROM smaconvenios.coordinador AS coord JOIN 
	smaconvenios.dependencia AS dep ON 
	coord.intiddependencia= dep.intiddependencia;
END; 
$$ LANGUAGE plpgsql;


/*FUNCION BUSCAR COORDINADOR ID*/

CREATE OR REPLACE FUNCTION smaconvenios.BuscarCoordinador(codigo VARCHAR(10))
RETURNS TABLE (

   		c_strcicoordinador VARCHAR(10),
	    c_intiddependencia INT,
        c_strnombrescoordinador VARCHAR(256),
        c_strcorreocoordinador VARCHAR(256),
        c_strtelefonocoordinador VARCHAR(256)
)
AS $$
BEGIN
    
    RETURN QUERY SELECT * FROM smaconvenios.coordinador WHERE codigo = strcicoordinador;
END;
$$ LANGUAGE plpgsql;

/*LLAMADO PROCEDIMIENTO */

SELECT * FROM smaconvenios.BuscarCoordinador('0600000001');

/*MODIFICAR COORDINADOR*/

CREATE OR REPLACE PROCEDURE smaconvenios.ModCoordinador
(
	
		c_strcicoordinador VARCHAR(10),
	    c_intiddependencia INT,
        c_strnombrescoordinador VARCHAR(256),
        c_strcorreocoordinador VARCHAR(256),
        c_strtelefonocoordinador VARCHAR(256)
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaconvenios.coordinador
	SET intiddependencia=  c_intiddependencia, strnombrescoordinador = c_strnombrescoordinador,strcorreocoordinador=c_strcorreocoordinador,strtelefonocoordinador= c_strtelefonocoordinador
	WHERE strcicoordinador = c_strcicoordinador; 
END 
$$;

/*LLAMADO MOD COORDINADOR */

CALL smaconvenios.ModCoordinador();
