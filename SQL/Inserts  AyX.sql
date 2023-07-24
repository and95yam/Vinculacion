/* PROCEDIMIENTO ALMACENADO EJE */

CREATE PROCEDURE AddEje
(
	c_ci_coordinador VARCHAR(10),
	/*c_id_dependencia INT4,
	c_nombrescoordinador VARCHAR(50),
	c_correo VARCHAR(50),
	c_telefono VARCHAR(15)*/
	c_id_resolucion VARCHAR(15),
	/*c_titulo VARCHAR(15),
    c_dependencia VARCHAR(15), 
	c_naturaleza VARCHAR(15),
	c_clasificacion VARCHAR(15),
	c_institucion VARCHAR(15),
	c_objeto VARCHAR(250),
	c_fechaInicio DATE, 
	c_fechaFin DATE, 
	c_Avance DECIMAL(2),
	c_razon VARCHAR(15),
	c_archivo VARCHAR(250),*/
	c_academico BOOL,
	c_investigacion BOOL,
	c_practicas BOOL,
	c_vinculacion BOOL
)
LANGUAGE plpgsql AS
$$
BEGIN
	
    
	--c_dependencia = (SELECT * FROM getDepen(c_id_dependencia));
	
	
	/*INSERT INTO public.coordinador(ci_cordinador, id_dependencia, nombrescoordinador, correo, telefono)VALUES 
								  (c_ci_coordinador,c_id_dependencia,c_nombrescoordinador,c_correo,c_telefono);*/
	
	/*INSERT INTO public.convenio(id_resolucion, ci_cordinador, titulo, dependencia, naturaleza, clasificacion, institucion, objeto, fechanicio, fechafin, avance, razon,archivo)VALUES 
							   (c_id_resolucion,c_ci_coordinador,c_titulo,c_dependencia,c_naturaleza,c_clasificacion,c_institucion,c_objeto,c_fechaInicio,c_fechaFin,c_Avance,c_razon,c_archivo);*/
	
	INSERT INTO public.ejes(id_resolucion, academico, investigacion, practivas, vinculacion)VALUES 
					       (id_resolucion, c_academico,c_investigacion,c_practicas,c_vinculacion);


END
$$;

call public.addcoordinador('0600000002',8,'viceRector','vicerector@espoch.edu.ec','0900000000');

call public.addconvenio('099.CP.2012','CONVENIO MARCO DE COLABORACIÓN INTERUNIVERSITARIO ENTRE LA ESPOCH A TRAVÉS DE LA FACULTAD DE CIENCIAS PECUARIAS-RIOBAMBA ECUADOR Y EL INSTITUTO DE CIENCIA ANIMAL "ICA" DE LA HABANA-CUBA','Internacional','Marco','INSTITUTO DE CIENCIA ANIMAL "ICA" DE LA HABANA-CUBA','La ESPOCH y el ICA se comprometen a fomentar el intercambio de experiencias en los campos de la docencia la investigación y la cultura en general  dentro de aquellas áreas  en las cuales ambas  tengan interés manifiesto especialmente todo lo relacionado con el sector agropecuario','2012-03-05','2017-03-05','trimestral','http://sample.net/?frog=drawer&soap=mom#order');

call public.AddEje('099.CP.2012',true,true,true,true);


/* PROCEDIMIENTO ALMACENADO CONVENIO*/

CREATE PROCEDURE Add_Convenio(
	
	c_id_resolucion varchar(15),
	c_ci_coordinador varchar(10), 
	c_titulo varchar(200),
	--c_dependencia char(15),
    c_naturaleza varchar(15),
	c_clasificacion varchar(15),
	c_institucion varchar(100),
	c_objeto varchar(350),
	c_fechaInicio DATE, 
	c_fechaFin DATE, 
	c_razon  varchar(15),
	c_archivo varchar(15)

)
LANGUAGE plpgsql AS
$$
BEGIN

	INSERT INTO public.convenio(id_resolucion,ci_cordinador,titulo,naturaleza,clasificacion,institucion,objeto,fechainicio,fechafin,razon,archivo)VALUES
							   (c_id_resolucion,c_ci_coordinador,c_titulo,c_naturaleza,c_clasificacion,c_institucion,c_objeto,c_fechaInicio,c_fechaFin,c_razon,c_archivo);

END 
$$;

CALL public.Add_Convenio('099.CP.2012','0600000001','CONVENIO MARCO DE COLABORACIÓN INTERUNIVERSITARIO ENTRE LA ESPOCH A TRAVÉS DE LA FACULTAD DE CIENCIAS PECUARIAS-RIOBAMBA ECUADOR Y EL INSTITUTO DE CIENCIA ANIMAL "ICA" DE LA HABANA-CUBA','Marco','Internacional','INSTITUTO DE CIENCIA ANIMAL "ICA" DE LA HABANA-CUBA','La ESPOCH y el ICA se comprometen a fomentar el intercambio de experiencias en los campos de la docencia la investigación y la cultura en general  dentro de aquellas áreas  en las cuales ambas  tengan interés manifiesto especialmente todo lo relacionado con el sector agropecuario','2012-03-05','2017-03-05','trimestral','http://sample.net/?frog=drawer&soap=mom#order');



/*PROCEDIMIENTO ALMACENADO  COORDINADOR*/

-- PROCEDURE: public.addcoordinador(character varying, integer, character varying, character varying, character varying)

-- DROP PROCEDURE IF EXISTS public.addcoordinador(character varying, integer, character varying, character varying, character varying);

CREATE OR REPLACE PROCEDURE public.addcoordinador(
	IN c_ci_coordinador character varying,
	IN c_id_dependencia integer,
	IN c_nombrescoordinador character varying,
	IN c_correo character varying,
	IN c_telefono character varying)
LANGUAGE 'plpgsql'
AS $BODY$
BEGIN
	
    
	--c_dependencia = (SELECT * FROM getDepen(c_id_dependencia));
	
	
	INSERT INTO public.coordinador(ci_cordinador, id_dependencia, nombrescoordinador, correo, telefono)VALUES 
								  (c_ci_coordinador,c_id_dependencia,c_nombrescoordinador,c_correo,c_telefono);
	
	/*INSERT INTO public.convenio(id_resolucion, ci_cordinador, titulo, dependencia, naturaleza, clasificacion, institucion, objeto, fechainicio, fechafin, avance, razon,archivo)VALUES 
							   (c_id_resolucion,c_ci_coordinador,c_titulo,c_dependencia,c_naturaleza,c_clasificacion,c_institucion,c_objeto,c_fechaInicio,c_fechaFin,c_Avance,c_razon,c_archivo);
	
	INSERT INTO public.ejes(id_resolucion, academico, investigacion, practivas, vinculacion)VALUES 
					       (id_resolucion, c_academico,c_investigacion,c_practicas,c_vinculacion);*/

END
$BODY$;
ALTER PROCEDURE public.addcoordinador(character varying, integer, character varying, character varying, character varying)
    OWNER TO postgres;





CALL smaseguridad.AddRol('rol2','secretaria','ayuda al rector ',TRUE,2)
CALL smaseguridad.AddRol('rol3','rector','el jfazo ',TRUE,3)
CALL smaseguridad.AddRol('rol4','conserje','el chevere',false,4)



