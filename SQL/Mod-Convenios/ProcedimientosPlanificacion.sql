CREATE OR REPLACE FUNCTION smaconvenios.BuscarPlanificacion(codigo VARCHAR(16))
RETURNS TABLE (

   		intidplanificacion INT,
	    strperiodo VARCHAR(64),
        stridconvenio VARCHAR(16)
		
)
AS $$
BEGIN
    
    RETURN QUERY 
	select * from smaconvenios.planificacion 
    where codigo = stridconvenio;
    
END;
$$ LANGUAGE plpgsql;