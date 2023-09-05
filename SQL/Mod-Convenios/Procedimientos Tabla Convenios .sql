/* TABLA CONVENIOS */
/* AGREGAR CONVENIO */

select * from smaconvenios.convenio

CREATE PROCEDURE smaconvenios.AddConvenio
(
   c_stridconvenio        varchar(16),          
   c_strcicoordinador     varchar(10),         
   c_strtituloconvenio    varchar(256),         
   c_strnaturalezaconvenio varchar(16),         
   c_strclasificacionconvenio varchar(16),      
   c_strobjetivoconvenio  varchar(1024),        
   c_dtfechainicioconvenio date,                
   c_dtfechafinconvenio   date,                 
   c_intrazonconvenio     int,                  
   c_fltavanceconvenio    decimal,              
   c_strarchivoconvenio   varchar(256)         
	
)
LANGUAGE plpgsql AS 
$$
BEGIN 
    INSERT INTO smaconvenios.convenio(stridconvenio, strcicoordinador, strtituloconvenio, strnaturalezaconvenio, strclasificacionconvenio, strobjetivoconvenio, dtfechainicioconvenio, dtfechafinconvenio, intrazonconvenio, fltavanceconvenio, strarchivoconvenio)VALUES
	(c_stridconvenio, c_strcicoordinador, c_strtituloconvenio, c_strnaturalezaconvenio, c_strclasificacionconvenio, c_strobjetivoconvenio, c_dtfechainicioconvenio, c_dtfechafinconvenio, c_intrazonconvenio, c_fltavanceconvenio, c_strarchivoconvenio);
END 
$$;

/*LLAMADO*/

CALL smaconvenios.AddConvenio(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);

/* FUNCION GET COONVENIO*/
CREATE OR REPLACE FUNCTION smaconvenios.GetConvenio()
RETURNS TABLE (
	
   stridconvenio        varchar(16),          
   strcicoordinador     varchar(10),         
   strtituloconvenio    varchar(256),         
   strnaturalezaconvenio varchar(16),         
   strclasificacionconvenio varchar(16),      
   strobjetivoconvenio  varchar(1024),        
   dtfechainicioconvenio date,                
   dtfechafinconvenio   date,
   strVigencia INTERVAL,                 
   intrazonconvenio     int,                  
   fltavanceconvenio    decimal,              
   strarchivoconvenio   varchar(256)
					
)
AS $$
BEGIN 
	RETURN QUERY SELECT tc.stridconvenio, tc.strcicoordinador, tc.strtituloconvenio, tc.strnaturalezaconvenio, tc.strclasificacionconvenio, tc.strobjetivoconvenio, tc.dtfechainicioconvenio, tc.dtfechafinconvenio, AGE(tc.dtfechafinconvenio,tc.dtfechafinconvenio) AS strVigencia, tc.intrazonconvenio, tc.fltavanceconvenio, tc.strarchivoconvenio
    FROM smaconvenios.convenio AS tc;
END; 
$$ LANGUAGE plpgsql;

/*LLAMADO FUNCION */

SELECT  * FROM smaconvenios.GetConvenio();


/*FUNCION BUSCAR CONVENIO ID*/

CREATE OR REPLACE FUNCTION smaconvenios.BuscarConvenio(codigo VARCHAR(16))
RETURNS TABLE (

   c_stridconvenio        varchar(16),          
   c_strcicoordinador     varchar(10),          
   c_strtituloconvenio    varchar(256),         
   c_strnaturalezaconvenio varchar(16),         
   c_strclasificacionconvenio varchar(16),      
   c_strobjetivoconvenio  varchar(1024),        
   c_dtfechainicioconvenio date,                
   c_dtfechafinconvenio   date,                 
   c_intrazonconvenio     int,                  
   c_fltavanceconvenio    decimal,              
   c_strarchivoconvenio   varchar(256)
)
AS $$
BEGIN
    
    RETURN QUERY SELECT * FROM smaconvenios.convenio WHERE codigo = stridconvenio;
END;
$$ LANGUAGE plpgsql;

/*LLAMADO PROCEDIMIENTO */

SELECT * FROM smaconvenios.BuscarConvenio('o');

/*MODIFICAR COORDINADOR*/

CREATE OR REPLACE PROCEDURE smaconvenios.ModConvenio
(
	
   c_stridconvenio        varchar(16),          
   c_strcicoordinador     varchar(10),          
   c_strtituloconvenio    varchar(256),         
   c_strnaturalezaconvenio varchar(16),         
   c_strclasificacionconvenio varchar(16),      
   c_strobjetivoconvenio  varchar(1024),        
   c_dtfechainicioconvenio date,                
   c_dtfechafinconvenio   date,                 
   c_intrazonconvenio     int,                  
   c_fltavanceconvenio    decimal,              
   c_strarchivoconvenio   varchar(256)
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaconvenios.convenio
	SET strcicoordinador = c_strcicoordinador, strtituloconvenio = c_strtituloconvenio, strnaturalezaconvenio = c_strnaturalezaconvenio, strclasificacionconvenio= c_strclasificacionconvenio, strobjetivoconvenio= c_strobjetivoconvenio, dtfechainicioconvenio = c_dtfechainicioconvenio, dtfechafinconvenio= c_dtfechafinconvenio, intrazonconvenio = c_intrazonconvenio, fltavanceconvenio = c_fltavanceconvenio, strarchivoconvenio=c_strarchivoconvenio
	WHERE stridconvenio = c_stridconvenio; 
END 
$$;

/*LLAMADO MOD COORDINADOR */

CALL smaconvenios.ModConvenio();
