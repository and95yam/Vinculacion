
/* Obtener Id de la tabla convenio_institucion */
CREATE OR REPLACE FUNCTION smaconvenios.GetIdConvenioInstitucion(codigo VARCHAR(16))
RETURNS TABLE (

   c_intidc_i INT 
)
AS $$
BEGIN
    
    RETURN QUERY 
    SELECT intidc_i FROM smaconvenios.convenio_institucion
    WHERE stridconvenio = codigo;
 END;
$$ LANGUAGE plpgsql;

/*LLAMADO*/
select * from smaconvenios.GetIdConvenioInstitucion('1230.CP.2012')

/* Obtener Id de la tabla convenio_dependencia */
CREATE OR REPLACE FUNCTION smaconvenios.GetIdConvenioDependencia(codigo VARCHAR(16))
RETURNS TABLE (

   c_intidc_d INT 
)
AS $$
BEGIN
    
    RETURN QUERY 
    SELECT intidc_d FROM smaconvenios.convenio_dependencia
    WHERE stridconvenio = codigo;
 END;
$$ LANGUAGE plpgsql;

SELECT * FROM smaconvenios.GetIdConvenioDependencia('1216.CP.2012')

select  * from smaconvenios.convenio_dependencia-- Where stridconvenio =$1