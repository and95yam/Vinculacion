/* TABLA DEPENDENCIA */
/* AGREGAR DEPENDENCIA */ 

CREATE PROCEDURE smaconvenios.AddDependencia
(
	c_nombre CHAR(15),
	c_tipo CHAR(20)
)
LANGUAGE plpgsql AS 
$$
BEGIN 
	INSERT INTO smaconvenios.Dependencia (strnombredependencia,strtipodependencia)VALUES
	(c_nombre,c_tipo);
END 
$$;
/*LLAMADO*/
/* call smaconvenios.AddDependencia('','')*/

/*Listar dependencia */
/* Buscar Dependencia*/
/* Modificar dependencia*/
/* Eliminar dependencia*/




/* FUNCION GET DEPENDENCIA (retorna la dependencia) */


CREATE OR REPLACE FUNCTION smaconvenios.GetUnaDepencia(id_dep INTEGER)
RETURNS TABLE (Nom_dep CHAR) AS $$
BEGIN
    RETURN QUERY  SELECT strnombredependencia AS CHAR FROM smaconvenios.Dependencia WHERE intid_dependencia = id_dep;
END;
$$ LANGUAGE plpgsql;
/*LLAMADO FUNCION GET DEPENDENCIA: SELECT smaconvenios.getunadepencia() */



/* PROCEDIMIENTO ALMACENADO  INGRESO DATOS CONVENIO  */

CREATE PROCEDURE smaconvenios.AddConvenios
(

	c_ci_coordinador varchar(10),
	c_id_dependencia integer,
	c_nombrescoordinador character varying,
	c_correo character varying,
	c_telefono character varying,
	c_id_resolucion varchar(15),
	 
	c_titulo varchar(200),
	c_dependencia char(15),
    c_naturaleza varchar(15),
	c_clasificacion varchar(15),
	c_institucion varchar(100),
	c_objeto varchar(350),
	c_fechaInicio DATE, 
	c_fechaFin DATE, 
	c_razon  varchar(15),
	c_archivo varchar(15),
	
	c_academico BOOL,
	c_investigacion BOOL, 
	c_practicas BOOL, 
	c_vinculacion BOOL
	
)
LANGUAGE plpgsql AS
$$
BEGIN

	INSERT INTO smaconvenios.Coordinador(strci_cordinador, intid_dependencia, strnombrescoordinador, strcorreo, strtelefono)VALUES 
								  (c_ci_coordinador,c_id_dependencia,c_nombrescoordinador,c_correo,c_telefono);
								  
	INSERT INTO smaconvenios.Convenio(strid_resolucion,strci_cordinador,strtitulo,strdependencia,strnaturaleza,strclasificacion,strinstitucion,strobjeto,dtfechainicio,dtfechafin,strrazon,strarchivo)VALUES
							   (c_id_resolucion,c_ci_coordinador,c_titulo,c_dependencia,c_naturaleza,c_clasificacion,c_institucion,c_objeto,c_fechaInicio,c_fechaFin,c_razon,c_archivo);
							   
	
	INSERT INTO ejes(strid_resolucion,blnacademico,blninvestigacion,blnpracticas, blnvinculacion)VALUES
				    (c_id_resolucion,c_academico,c_investigacion,c_practicas,c_vinculacion);
					
END
$$;

/*INSTANCIA PROCEDIMIENTO INGRESO CONVENIO
call public.AddDependencia('0600000006',1,'Ned Stark','ned.stark@espoch.edu.ec','0900000005','099.CP.2014','CONVENIO MARCO DE COLABORACIÓN INTERUNIVERSITARIO ENTRE LA ESPOCH para mis huevos','Internacional','Especifico','INSTITUTO DE CIENCIAS DE LA PUTERIA ','La ESPOCH y MIS HUEVOS','2014-03-05','2019-03-05','semestral','http://sample.net/?frog=drawer&soap=mom#order',TRUE,TRUE,TRUE,TRUE);
*/

/*Listar Convenios */
CREATE OR REPLACE FUNCTION smaconvenios.ListaConvenios()
RETURNS TABLE(

	strtitulo            varchar,
	strnombrescoordinador varchar,
	strid_resolucion     varchar,
	strci_cordinador     varchar,
	strcorreo            varchar, 
	strtelefono          varchar,
	strnombreDependencia char,
	strnaturaleza        varchar,
	strclasificacion     varchar,
    blnacademico         BOOLEAN,                 
    blninvestigacion     BOOLEAN,                 
    blnpracticas         BOOLEAN,                 
    blnvinculacion       BOOLEAN,  
	strinstitucion       varchar,
	strobjeto            varchar,
	dtfechainicio        date,                
    dtfechafin           date,
	strVigencia 		 interval, 
	strrazon             varchar,          
    strarchivo           varchar         
	
)AS $$
BEGIN  
	
RETURN QUERY SELECT tc.strtitulo, tco.strnombrescoordinador, tc.strid_resolucion, tco.strci_cordinador, tco.strcorreo,tco.strtelefono, 
       td.strnombredependencia, tc.strnaturaleza, tc.strclasificacion, te.blnacademico,te.blninvestigacion,te.blnpracticas,te.blnvinculacion,
       tc.strinstitucion, tc.strobjeto, tc.dtfechainicio, tc.dtfechafin, AGE(tc.dtfechafin, tc.dtfechainicio) AS Vigencia, tc.strrazon, tc.strarchivo 
FROM smaconvenios.convenio AS tc 
JOIN smaconvenios.ejes AS te On tc.strid_resolucion = te.strid_resolucion
JOIN smaconvenios.coordinador AS tco ON tc.strci_cordinador = tco.strci_cordinador
JOIN smaconvenios.dependencia AS td ON  tco.intid_dependencia = td.intid_dependencia;
	
END;
$$ LANGUAGE plpgsql;

/* SELECT * FROM smaconvenios.listaconvenios()*/

/* Buscar Convenios*/

/* Modificar Convenios*/
/* Eliminar Convenios*/



/*Consulta para ver informe de convenios*/

SELECT tc.strtitulo, tco.strnombrescoordinador, tc.strid_resolucion, tco.strci_cordinador, tco.strcorreo,tco.strtelefono, 
       td.strnombredependencia, tc.strinstitucion, tc.dtfechainicio, tc.dtfechafin, AGE(tc.dtfechafin, tc.dtfechainicio) AS Vigencia,
       tp.dtperiodo,tp.strid_informe, ti.strbeneficiariosdirectos, ti.strbeneficiodirecto, ti.strbeneficiariosindirectos, ti.strbeneficioindirecto,
       tc.strobjeto, ti.strresultados,ti.strobservaciones_infmorme, ti.strlinkarch
FROM smaconvenios.convenio AS tc
JOIN smaconvenios.coordinador AS tco ON tc.strci_cordinador = tco.strci_cordinador
JOIN smaconvenios.dependencia AS td ON  tco.intid_dependencia = td.intid_dependencia
JOIN smaconvenios.planificacion AS tp ON tc.strid_resolucion = tp.strid_resolucion
JOIN smaconvenios.informe AS ti ON tc.strid_resolucion = ti.strid_resolucion
WHERE tp.strid_informe='099.CP.2012-1'

SELECT * FROM smaconvenios.equipoinforme 
WHERE strid_informe = '099.CP.2012-1';

Select * FROM smaconvenios.actividadinforme
WHERE strid_informe = '099.CP.2012-1';


/* Consulta de roles por perfil (servicio web modulo seguridad)*/
select tp.lngusr_id as  id_usuario,tp.strnombretema as perfil,tr.strcodigo as codigo_rol, tr.strnombre as rol, tr.strdescripcion,   tp.blnactivo, tp.lngfechaasignacion
From smaseguridad.rol AS tr
JOIN smaseguridad.perfil AS tp 
On tr.intid = tp.introl_id;