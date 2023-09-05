/* TABLA CONVENIOS INSTITUCION */
/* AGREGAR CONVENIO_INSTITUCION */

select * from smaconvenios.convenio_institucion

CREATE PROCEDURE smaconvenios.AddConvenio_Institucion
(
   c_intidinstitucion INT,          
   c_stridconvenio VARCHAR(16)
)
LANGUAGE plpgsql AS 
$$
BEGIN 
    INSERT INTO smaconvenios.convenio_institucion (intidinstitucion,stridconvenio)VALUES
	(c_intidinstitucion,c_stridconvenio);
END 
$$;

/*LLAMADO*/

CALL smaconvenios.AddConvenio_Institucion(?, ?);

/* FUNCION GET COONVENIO_INSTITUCION*/
CREATE OR REPLACE FUNCTION smaconvenios.GetConvenio_Institucion()
RETURNS TABLE (

    intidc_i INT,
	intidinstitucion INT,          
    stridconvenio VARCHAR(16)
   				
)
AS $$
BEGIN 
	RETURN QUERY SELECT * FROM smaconvenios.convenio_institucion;
END; 
$$ LANGUAGE plpgsql;

/*LLAMADO FUNCION */

SELECT  * FROM smaconvenios.GetConvenio_Institucion();


/*FUNCION BUSCAR CONVENIO_INSTITUCION ID*/

CREATE OR REPLACE FUNCTION smaconvenios.BuscarConvenio_Institucion(codigo INT)
RETURNS TABLE (

    c_intidc_i INT,
	c_intidinstitucion INT,          
    c_stridconvenio VARCHAR(16)
   
)
AS $$
BEGIN
    
    RETURN QUERY SELECT * FROM smaconvenios.convenio_institucion WHERE codigo = intidc_i;
END;
$$ LANGUAGE plpgsql;

/*LLAMADO PROCEDIMIENTO */

SELECT * FROM smaconvenios.BuscarConvenio_Institucion();

/*MODIFICAR CONVENIO_INSTITUCION*/

CREATE OR REPLACE PROCEDURE smaconvenios.ModConvenio_Institucion 
(
	c_intidc_i INT,
	c_intidinstitucion INT,          
    c_stridconvenio VARCHAR(16)
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaconvenios.convenio_institucion
	SET  intidinstitucion=c_intidinstitucion, stridconvenio = c_stridconvenio
	WHERE intidc_i = c_intidc_i; 
END 
$$;

/*LLAMADO MOD CONVENIO_INSTITUCION */

CALL smaconvenios.ModConvenio_Institucion();
