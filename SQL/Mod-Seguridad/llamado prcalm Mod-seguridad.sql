----------Insertar Rol  

CALL smaseguridad.AddRol('rol1','administrador','encargado de todo',TRUE,1)

/*-----------------VER ROL---------------------*/
select * from smaseguridad.getRol()

/*-------------------------------LLAMADO  BUSCAR ROL------------------------------*/

SELECT * FROM smaseguridad.buscarROL(1);

/*-----------------llamado-MODIFICAR ROL----------------------*/

CALL smaseguridad.modROL(1,'rol1','admin','todo un god',FALSE,1)

/*------------------ ELIMINAR ROL-----------------------------*/ 

CALL smaseguridad.elrol(1);

/*---------------------------INSERTAR PERFIL -----------------------------*/

CALL smaseguridad.addPerfil(1001,4,TRUE,10001,100001,1000001,10000001,'TEMA 2',FALSE)

/***********************************LLAMADO: BUSCAR PERFIL*********************************/

SELECT * FROM smaseguridad.getPerfil()

/*------------------------------LLAMADO BUSCAR PERFIL-------------------------------*/


SELECT * FROM smaseguridad.buscarPerfil(3)

/*-----------------------------------------LLAMADO MODIFICAR PERFIL----------------------------*/


CALL smaseguridad.modPerfil(2,1003,2,FALSE,10003,100003,1000003,10000003,'TEMA x',TRUE)

/*-------------------------------------LLAMADO  ELIMINAR PERFIL ----------------------------------------*/

CALL smaseguridad.elPerfil()

/*---------------------------LLAMADO INSERTAR ACCION-------------------------------------------*/

CALL smaseguridad.addAccion('ver','ver datos','www.verdatos.com',TRUE,'get')

/*-----------------------LLAMADO LISTAR ACCION --------------------------------*/

select * from smaseguridad.getAccion()

/*-----------------------------LLAMADO BUSCAR ACCION--------------------------------------*/

SELECT * FROM smaseguridad.buscarAccion()


/*------------ llamados modificar accion-----------------------------*/

CALL smaseguridad.modAccion(1,'Insertar','Agregar Datos','./api/post',FALSE,'POSt')

/* -----------------------llamado eliminar accion--------------------------*/

CALL smaseguridad.elAccion()

/*-----------------------------llamado insertar grupo--------------------------------*/


CALL smaseguridad.addGrupo('grupo1', 'Descripcion grupo1','001','0001',TRUE)

/*------------------------------llamado  ver grupo --------------------------------------*/

select * from smaseguridad.getGrupo()

/*------------------------------llamado buscar grupo--------------------------------*/
select * from smaseguridad.buscarGrupo(2)


/*------------------------- llamado modgrupo------------------------------*/

Call smaseguridad.modGrupo(2,'grupo numero 2','va la descripcion del grupo 2',2,2,false)

/*------------------------llamado  eliminar grupo----------------------------------*/

CALL smaseguridad.elGrupo(1)

/*------------------------------llamado insertar funcion-------------------------------*/

CALL smaseguridad.addFuncion(2,2,2, 1,TRUE,TRUE,TRUE,TRUE )

/*------------------------------llamado listar funcion-------------------------------*/

select * from smaseguridad.getFuncion()

/*------------------------------llamado buscar funcion-------------------------------*/

select * from smaseguridad.buscarFuncion(2)

/*------------------------------llamado- modFUncion------------------------------*/

Call smaseguridad.modFuncion(1,2,2,2,1,FALSE,FALSE,FALSE,FALSE)

/*------------------------------llamado- eliminar funcion------------------------------*/

CALL smaseguridad.elFuncion()


