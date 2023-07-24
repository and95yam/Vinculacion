/* TABLA DEPENDENCIA */
/* AGREGAR DEPENDENCIA */ 
CREATE PROCEDURE AddDependencia
(
	c_nombre CHAR(15),
	c_tipo CHAR(20)
)
LANGUAGE plpgsql AS 
$$
BEGIN 
	INSERT INTO dependencia (nombredependencia,tipodependencia)VALUES
	(c_nombre,c_tipo);
END 
$$;

/* CONSULTAR DEPENDENCIA*/
select  * from dependencia


	
/* FUNCION GET DEPENDENCIA */

CREATE OR REPLACE FUNCTION getDepen(id_dep INTEGER)
RETURNS TABLE (Nom_dep CHAR) AS $$
BEGIN
    RETURN QUERY  SELECT nombredependencia AS CHAR FROM dependencia WHERE id_dependencia = id_dep;
END;
$$ LANGUAGE plpgsql;

/*LLAMADO FUNCION GET DEPENDENCIA */

SELECT * FROM getDepen()

/* PROCEDIMIENTO ALMACENADO  INGRESO DATOS CONVENIO  */

CREATE PROCEDURE AddDependencia
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

	INSERT INTO public.coordinador(ci_cordinador, id_dependencia, nombrescoordinador, correo, telefono)VALUES 
								  (c_ci_coordinador,c_id_dependencia,c_nombrescoordinador,c_correo,c_telefono);
								  
	INSERT INTO public.convenio(id_resolucion,ci_cordinador,titulo,dependencia,naturaleza,clasificacion,institucion,objeto,fechainicio,fechafin,razon,archivo)VALUES
							   (c_id_resolucion,c_ci_coordinador,c_titulo,c_dependencia,c_naturaleza,c_clasificacion,c_institucion,c_objeto,c_fechaInicio,c_fechaFin,c_razon,c_archivo);
							   
	
	INSERT INTO ejes(id_resolucion,academico,investigacion,practicas, vinculacion)VALUES
				    (c_id_resolucion,c_academico,c_investigacion,c_practicas,c_vinculacion);
					
					

END
$$;

/*INSTANCIA PROCEDIMIENTO INGRESO CONVENIO*/


call public.AddDependencia('0600000006',1,'Ned Stark','ned.stark@espoch.edu.ec','0900000005','099.CP.2014','CONVENIO MARCO DE COLABORACIÓN INTERUNIVERSITARIO ENTRE LA ESPOCH para mis huevos','Internacional','Especifico','INSTITUTO DE CIENCIAS DE LA PUTERIA ','La ESPOCH y MIS HUEVOS','2014-03-05','2019-03-05','semestral','http://sample.net/?frog=drawer&soap=mom#order',TRUE,TRUE,TRUE,TRUE);


