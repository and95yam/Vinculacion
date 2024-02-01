CREATE OR REPLACE PROCEDURE smaconvenios.EvaluarInforme
(
   c_stridinforme 			varchar(64),
   c_strestadoinforme     varchar(16),
   c_strobservacionesinforme    varchar(512)
   
)
LANGUAGE plpgsql AS
$$
BEGIN 
	update smaconvenios.estadoinforme
	set strestadoinforme =  c_strestadoinforme, strobservacionesinforme=  c_strobservacionesinforme, dtfechaevaluacioninforme= now()
	where stridinforme=c_stridinforme;
END 
$$;