--esquema seguridad 
------------------------------------------------tabla rol 

CREATE PROCEDURE smaseguridad.addRol
(
	c_strcodigo  VARCHAR(4),
	c_strnombre  VARCHAR(32),
	c_strdescripcion VARCHAR(1024)
	
	
)
LANGUAGE plpgsql AS 
$$
BEGIN 
	INSERT INTO smaseguridad.rol (strcodigo,strnombre,strdescripcion)VALUES
	(c_strcodigo,c_strnombre,c_strdescripcion);
END 
$$;

------------------------------------------- ver roles 


CREATE OR REPLACE FUNCTION smaseguridad.getROl()
RETURNS TABLE (
	
		intid INT,
		strcodigo VARCHAR(4),
		strnombre VARCHAR(32),
		strdescripcion VARCHAR(1024),
		blnactivo BOOLEAN,
		intorden INTEGER 
			
)
AS $$
BEGIN 
	RETURN QUERY SELECT * FROM smaseguridad.rol;
END; 
$$ LANGUAGE plpgsql;




/*-------------------------------BUSCAR ID---------------------*/

-- Crear el procedimiento almacenado
CREATE OR REPLACE FUNCTION smaseguridad.buscarROl(codigo INTEGER)
RETURNS TABLE (
   		c_intid INTEGER,
		c_strcodigo VARCHAR(4),
		c_strnombre VARCHAR(32),
		c_strdescripcion VARCHAR(1024),
		c_blnactivo BOOLEAN,
		c_intorden INTEGER 
)
AS $$
BEGIN
    -- Realizar la consulta SELECT con la condición WHERE
    RETURN QUERY SELECT * FROM smaseguridad.rol WHERE codigo = intid;
END;
$$ LANGUAGE plpgsql;



/*------------------------------- MODIFICAR DATOS --------------------------------*/


CREATE OR REPLACE PROCEDURE smaseguridad.modROl
(
	
		c_intid INTEGER,
		c_strnombre VARCHAR(32),
		c_strdescripcion VARCHAR(1024),
		c_blnactivo BOOLEAN
		
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaseguridad.rol 
	SET  strnombre = c_strnombre, strdescripcion = c_strdescripcion, blnactivo = c_blnactivo
	WHERE intid= c_intid; 
END 
$$;



/*-----------------------------Eliminar DATOS-------------------*/

CREATE OR REPLACE PROCEDURE smaseguridad.elRol
(
	
		c_intid INTEGER
		
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	DELETE FROM smaseguridad.rol 
	WHERE intid= c_intid; 
END 
$$;




/*----------------------------TABLA PERFIL -----------------------------*/

/*-----------------------------------AGREGAR PERFIL-----------------------------*/

CREATE OR REPLACE PROCEDURE smaseguridad.addPerfil 
(
	c_lngusr_id BIGINT,
    c_introl_id INTEGER,
    c_blnactivo BOOLEAN,
    c_lngasignadopor BIGINT,
    c_strnombretema CHARACTER,
    c_blndefault BOOLEAN
)
LANGUAGE plpgsql AS 
$$
BEGIN 
	INSERT INTO smaseguridad.perfil (lngusr_id, introl_id, blnactivo, lngasignadopor, lngfechaasignacion,  strnombretema, blndefault)
	VALUES
	(c_lngusr_id, c_introl_id, c_blnactivo, c_lngasignadopor, current_timestamp,  c_strnombretema, c_blndefault);
END 
$$;



/*----------------------VER PERFILES-----------------------------*/


CREATE OR REPLACE FUNCTION smaseguridad.getPerfil()
RETURNS TABLE (
	
		intid INTEGER,
		lngusr_id BIGINT,
		introl_id INTEGER,
		blnactivo BOOLEAN,
		lngasignadopor BIGINT,
		lngfechaasignacion BIGINT,
		lngmodificadopor BIGINT,
		lngfechamodificacion BIGINT,
		strnombretema VARCHAR,
		blndefault BOOLEAN 
			
)
AS $$
BEGIN 
	RETURN QUERY SELECT * FROM smaseguridad.perfil;
END; 
$$ LANGUAGE plpgsql;




/*--------------------------------BUSCAR ID PERFIL:--------------------------------*/

CREATE OR REPLACE FUNCTION smaseguridad.buscarPerfil(codigo INTEGER)
RETURNS TABLE (
	
	c_intid INTEGER,
	c_lngusr_id BIGINT,
    c_introl_id INTEGER,
    c_blnactivo BOOLEAN,
    c_lngasignadopor BIGINT,
    c_lngfechaasignacion BIGINT,
    c_lngmodificadopor BIGINT,
    c_lngfechamodificacion BIGINT,
    c_strnombretema VARCHAR,
    c_blndefault BOOLEAN 
)
AS $$
BEGIN
    -- Realizar la consulta SELECT con la condición WHERE
    RETURN QUERY SELECT * FROM smaseguridad.perfil WHERE codigo = intid;
END;
$$ LANGUAGE plpgsql;



/*------------------------------MODIFICAR PERFIL -------------------------------*/


CREATE OR REPLACE PROCEDURE smaseguridad.modPerfil
(
	
		c_intid INTEGER,
		c_lngusr_id BIGINT,
		c_introl_id INTEGER,
		c_blnactivo BOOLEAN,
		
		
		c_lngmodificadopor BIGINT,
		
		c_strnombretema VARCHAR,
		c_blndefault BOOLEAN 
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaseguridad.perfil 
	SET lngusr_id= c_lngusr_id, introl_id = c_introl_id, blnactivo=c_blnactivo,  lngmodificadopor = c_lngmodificadopor, lngfechamodificacion=current_timestamp, strnombretema= c_strnombretema, blndefault=c_blndefault     
	WHERE intid= c_intid;
	
	
END 
$$;



/*------------------------------------------ELIMINAR PERFIL --------------------------------*/

CREATE OR REPLACE PROCEDURE smaseguridad.elPerfil
(
	
		c_intid INTEGER
		
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	DELETE FROM smaseguridad.perfil 
	WHERE intid= c_intid; 
END 
$$;


/*--------------------------------------------------------------------------------------*/
/*----------------------------TABLA ACCION----------------------------------------------*/
/*--------------------------------------------------------------------------------------*/

/*-----------------------------------INSERTAR--------------------------------------------*/


CREATE PROCEDURE smaseguridad.addAccion 
(
	
    c_strtitulo VARCHAR,
    c_strdescripcion VARCHAR,
    c_strurl VARCHAR,
    c_blnactivo BOOLEAN,
    c_strseudonimo VARCHAR 
	
)
LANGUAGE plpgsql AS 
$$
BEGIN 
	INSERT INTO smaseguridad.accion (strtitulo,strdescripcion,strurl,blnactivo,strseudonimo)VALUES
	( c_strtitulo,c_strdescripcion, c_strurl,c_blnactivo,c_strseudonimo);
END 
$$;




/*---------------------------VER ACCION-- --------------------------------*/


CREATE OR REPLACE FUNCTION smaseguridad.getAccion()
RETURNS TABLE (
	
		intid INTEGER,
		strtitulo VARCHAR,
		strdescripcion VARCHAR,
		strurl VARCHAR,
		blnactivo BOOLEAN,
		strseudonimo VARCHAR  

)
AS $$
BEGIN 
	RETURN QUERY SELECT * FROM smaseguridad.accion;
END; 
$$ LANGUAGE plpgsql;





/*-----------------------------BUSCAR Accion ------------------------------*/

CREATE OR REPLACE FUNCTION smaseguridad.buscarAccion(codigo INTEGER)
RETURNS TABLE (
	
	c_intid INTEGER,
	c_strtitulo VARCHAR,
    c_strdescripcion VARCHAR,
    c_strurl VARCHAR,
    c_blnactivo BOOLEAN,
    c_strseudonimo VARCHAR 
)
AS $$
BEGIN
    
    RETURN QUERY SELECT * FROM smaseguridad.accion WHERE codigo = intid;
END;
$$ LANGUAGE plpgsql;



/*-----------------------------MODIFICAR ACCION--------------------------------*/

 CREATE OR REPLACE PROCEDURE smaseguridad.modAccion 
(
	
		c_intid INTEGER,
		c_strtitulo VARCHAR,
    	c_strdescripcion VARCHAR,
    	c_strurl VARCHAR,
    	c_blnactivo BOOLEAN,
    	c_strseudonimo VARCHAR 
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaseguridad.accion
	SET strtitulo= c_strtitulo, strdescripcion= c_strdescripcion, strurl= c_strurl, blnactivo= c_blnactivo , strseudonimo= c_strseudonimo  
	WHERE intid= c_intid;
	
END 
$$;



/* -------------------------------------Eliminar Accion--------------------------------*/


CREATE OR REPLACE PROCEDURE smaseguridad.elAccion
(
	
		c_intid INTEGER
		
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	DELETE FROM smaseguridad.accion 
	WHERE intid= c_intid; 
END 
$$;





/********************************************************************/
/*                             tabla grupo                           */
/*********************************************************************/


/* INSERTAR*/

CREATE PROCEDURE smaseguridad.addGrupo
(
	
    c_strnombre VARCHAR(32),
    c_strdescripcion VARCHAR(1024), 
    c_intorden INTEGER,
    c_intpadre INTEGER,
    c_blnactivo BOOLEAN
	
)
LANGUAGE plpgsql AS 
$$
BEGIN 
	INSERT INTO smaseguridad.grupo (strnombre,strdescripcion,intorden,intpadre,blnactivo)VALUES
	(c_strnombre, c_strdescripcion,c_intorden,c_intpadre,c_blnactivo );
END 
$$;




/*---------------------------------- VER datos ------------------------*/



CREATE OR REPLACE FUNCTION smaseguridad.getGrupo()
RETURNS TABLE (
	
		intid INTEGER,
		strnombre VARCHAR(32),
     	strdescripcion VARCHAR(1024), 
    	intorden INTEGER,
    	intpadre INTEGER,
     	blnactivo BOOLEAN
)
AS $$
BEGIN 
	RETURN QUERY SELECT * FROM smaseguridad.grupo;
END; 
$$ LANGUAGE plpgsql;




/*------------------Buscar grupo------------------------------------*/


CREATE OR REPLACE FUNCTION smaseguridad.buscarGrupo(codigo INTEGER)
RETURNS TABLE (
	
		c_intid INTEGER,
		c_strnombre VARCHAR(32),
     	c_strdescripcion VARCHAR(1024), 
    	c_intorden INTEGER,
    	c_intpadre INTEGER,
     	c_blnactivo BOOLEAN
)
AS $$
BEGIN
    
    RETURN QUERY SELECT * FROM smaseguridad.grupo WHERE codigo = intid;
END;
$$ LANGUAGE plpgsql;




/*-----------------modificar grupo -----------------------------------------------*/ 


CREATE OR REPLACE PROCEDURE smaseguridad.modGrupo
(
	
		c_intid INTEGER,
		c_strnombre VARCHAR(32),
     	c_strdescripcion VARCHAR(1024), 
    	c_intorden INTEGER,
    	c_intpadre INTEGER,
     	c_blnactivo BOOLEAN
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaseguridad.grupo
	SET strnombre = c_strnombre, strdescripcion = c_strdescripcion , intorden = c_intorden, intpadre = c_intpadre, blnactivo = c_blnactivo  
	WHERE intid= c_intid;
	
	
END 
$$;




/* ELiminar grupo */


CREATE OR REPLACE PROCEDURE smaseguridad.elGrupo
(
	
		c_intid INTEGER
		
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	DELETE FROM smaseguridad.grupo
	WHERE intid= c_intid; 
END 
$$;




/**********************************************************************/
/*                            tabla funcion                          */
/**********************************************************************/

/*--------------------------------INSERTAR------------------------------*/


CREATE PROCEDURE smaseguridad.addFuncion
(
	
    c_intacc_id INTEGER,
    c_introl_id INTEGER,
    c_intgru_id INTEGER,
    c_intorden INTEGER,
    c_blnactivo BOOLEAN, 
    c_blnpermisoagregar BOOLEAN,
    c_blnpermisoeditar BOOLEAN,
    c_blnpermisoeliminar BOOLEAN
	
)
LANGUAGE plpgsql AS 
$$
BEGIN 
	INSERT INTO smaseguridad.funcion (intacc_id,introl_id,intgru_id,intorden,blnactivo,blnpermisoagregar,blnpermisoeditar,blnpermisoeliminar)VALUES
	(c_intacc_id,c_introl_id,c_intgru_id,c_intorden,c_blnactivo,c_blnpermisoagregar,c_blnpermisoeditar,c_blnpermisoeliminar);
END 
$$;




/*----------------------------Ver FUNCION ----------------------------*/ 


CREATE OR REPLACE FUNCTION smaseguridad.getFuncion()
RETURNS TABLE (
		
		intid INTEGER,
		intacc_id INTEGER,
    	introl_id INTEGER,
    	intgru_id INTEGER,
    	intorden INTEGER,
    	blnactivo BOOLEAN, 
    	blnpermisoagregar BOOLEAN,
    	blnpermisoeditar BOOLEAN,
    	blnpermisoeliminar BOOLEAN
)
AS $$
BEGIN 
	RETURN QUERY SELECT * FROM smaseguridad.funcion;
END; 
$$ LANGUAGE plpgsql;



/*------------------Buscar funcion-----------------------------------*/


CREATE OR REPLACE FUNCTION smaseguridad.buscarFuncion(codigo INTEGER)
RETURNS TABLE (
		
		c_intid INTEGER,
		c_intacc_id INTEGER,
		c_introl_id INTEGER,
		c_intgru_id INTEGER,
		c_intorden INTEGER,
		c_blnactivo BOOLEAN, 
		c_blnpermisoagregar BOOLEAN,
		c_blnpermisoeditar BOOLEAN,
		c_blnpermisoeliminar BOOLEAN
)
AS $$
BEGIN
    
    RETURN QUERY SELECT * FROM smaseguridad.funcion WHERE codigo = intid;
END;
$$ LANGUAGE plpgsql;



/*------------------Modificar funcion-----------------------------------*/


CREATE OR REPLACE PROCEDURE smaseguridad.modFuncion
(
	
		c_intid INTEGER,
		c_intacc_id INTEGER,
		c_introl_id INTEGER,
		c_intgru_id INTEGER,
		c_intorden INTEGER,
		c_blnactivo BOOLEAN, 
		c_blnpermisoagregar BOOLEAN,
		c_blnpermisoeditar BOOLEAN,
		c_blnpermisoeliminar BOOLEAN
)
LANGUAGE plpgsql AS
$$
BEGIN 
	UPDATE smaseguridad.funcion
	SET intacc_id= c_intacc_id, introl_id= c_introl_id , intgru_id= c_intgru_id ,intorden= c_intorden ,blnactivo = c_blnactivo ,blnpermisoagregar= c_blnpermisoagregar ,blnpermisoeditar =c_blnpermisoeditar ,blnpermisoeliminar = c_blnpermisoeliminar 
	WHERE intid= c_intid;
	
	
END 
$$;



/* -------------------------------------Eliminar FUNCION--------------------------------*/

CREATE OR REPLACE PROCEDURE smaseguridad.elFuncion
(
	
		c_intid INTEGER
		
			
)
LANGUAGE plpgsql AS
$$
BEGIN 
	DELETE FROM smaseguridad.funcion
	WHERE intid= c_intid; 
END 
$$;



