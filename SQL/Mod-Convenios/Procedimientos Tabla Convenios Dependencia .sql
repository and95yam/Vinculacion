/* TABLA CONVENIOS DEPENDENCIA */
/* AGREGAR CONVENIO-DEPENDENCIA */

select * from smaconvenios.convenio_dependencia

CREATE PROCEDURE smaconvenios.AddConvenio_Dependencia
(
   c_intiddependencia INT,          
   c_stridconvenio VARCHAR(16)
)
LANGUAGE plpgsql AS 
$$
BEGIN 
    INSERT INTO smaconvenios.convenio_dependencia (intiddependencia,stridconvenio)VALUES
	(c_intiddependencia,c_stridconvenio);
END 
$$;

/*LLAMADO*/

CALL smaconvenios.AddConvenio_Dependencia(?, ?);

/* FUNCION GET COONVENIO_DEPENDENCIA*/
CREATE OR REPLACE FUNCTION smaconvenios.GetConvenio_Dependencia()
RETURNS TABLE (

    intidc_d INT,
	intiddependencia INT,          
    stridconvenio VARCHAR(16)
   				
)
AS $$
BEGIN 
	RETURN QUERY SELECT * FROM smaconvenios.convenio_dependencia;
END; 
$$ LANGUAGE plpgsql;

/*LLAMADO FUNCION */

SELECT  * FROM smaconvenios.GetConvenio_Dependencia();


/*FUNCION BUSCAR CONVENIO_DEPENDENCIA ID*/

CREATE OR REPLACE FUNCTION smaconvenios.BuscarConvenio_Dependencia(codigo INT)
RETURNS TABLE (

    c_intidc_d INT,
	c_intiddependencia INT,          
    c_stridconvenio VARCHAR(16)
   
)
AS $$
BEGIN
    
    RETURN QUERY SELECT * FROM smaconvenios.convenio_dependencia WHERE codigo = intidc_d;
END;
$$ LANGUAGE plpgsql;

/*LLAMADO PROCEDIMIENTO */

SELECT * FROM smaconvenios.BuscarConvenio_Dependencia(2);

/*MODIFICAR CONVENIO_DEPENDENCIA*/

CREATE OR REPLACE PROCEDURE smaconvenios.ModConvenio_Dependencia 
(
	c_intidc_d INT,
	c_intiddependencia INT,          
    c_stridconvenio VARCHAR(16)
   	
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaconvenios.convenio_dependencia
	SET  intiddependencia=c_intiddependencia, stridconvenio = c_stridconvenio
	WHERE intidc_d = c_intidc_d; 
END 
$$;

/*LLAMADO MOD CONVENIO DEPENDENCIA */

CALL smaconvenios.ModConvenio_Dependencia();
