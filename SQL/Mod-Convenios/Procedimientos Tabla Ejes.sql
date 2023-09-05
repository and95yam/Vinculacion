/* TABLA CONVENIOS EJES */
/* AGREGAR EJES */

select * from smaconvenios.ejes

CREATE PROCEDURE smaconvenios.AddEjes
(
   c_stridconvenio        varchar(16),          
   c_blnacademico         bool,               
   c_blninvestigacion     bool,               
   c_blnpracticas         bool,               
   c_blnvinculacion       bool 
)
LANGUAGE plpgsql AS 
$$
BEGIN 
    INSERT INTO smaconvenios.ejes(stridconvenio,blnacademico,blninvestigacion,blnpracticas,blnvinculacion)VALUES
	( c_stridconvenio,c_blnacademico,c_blninvestigacion,c_blnpracticas,c_blnvinculacion);
END 
$$;

/*LLAMADO*/

CALL smaconvenios.AddEjes(?, ?);

/* FUNCION GET EJES*/
CREATE OR REPLACE FUNCTION smaconvenios.GetEjes()
RETURNS TABLE (

   stridconvenio        varchar(16),          
   blnacademico         bool,               
   blninvestigacion     bool,               
   blnpracticas         bool,               
   blnvinculacion       bool 
   				
)
AS $$
BEGIN 
	RETURN QUERY SELECT * FROM smaconvenios.ejes;
END; 
$$ LANGUAGE plpgsql;

/*LLAMADO FUNCION */

SELECT  * FROM smaconvenios.GetEjes();


/*FUNCION BUSCAR EJES ID*/

CREATE OR REPLACE FUNCTION smaconvenios.BuscarEjes(codigo VARCHAR(16))
RETURNS TABLE (

   c_stridconvenio        varchar(16),          
   c_blnacademico         bool,               
   c_blninvestigacion     bool,               
   c_blnpracticas         bool,               
   c_blnvinculacion       bool
   
)
AS $$
BEGIN
    
    RETURN QUERY SELECT * FROM smaconvenios.ejes WHERE codigo = stridconvenio;
END;
$$ LANGUAGE plpgsql;

/*LLAMADO PROCEDIMIENTO */

SELECT * FROM smaconvenios.BuscarEjes('');

/*MODIFICAR PLANIFICACION*/

CREATE OR REPLACE PROCEDURE smaconvenios.ModEjes
(
   c_stridconvenio        varchar(16),          
   c_blnacademico         bool,               
   c_blninvestigacion     bool,               
   c_blnpracticas         bool,               
   c_blnvinculacion       bool
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaconvenios.ejes
	SET  blnacademico=c_blnacademico,blninvestigacion=c_blninvestigacion,blnpracticas=c_blnpracticas,blnvinculacion= c_blnvinculacion
	WHERE stridconvenio = c_stridconvenio; 
END 
$$;

/*LLAMADO MOD EJES */

CALL smaconvenios.BuscarEjes();
