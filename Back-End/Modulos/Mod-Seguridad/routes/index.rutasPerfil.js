const {Router} = require('express');
const routerPerfil = Router(); 

const{addPerfil, getPerfil, buscarPerfil, modPerfil, delPerfil,perfilyRol, buscPerfilyRol,perfilPerId,gestionPerfil,checkPerfiles,buscPerfilyRol2} = require('../controllers/index.PerfilController');

routerPerfil.post('/perfil', addPerfil);
routerPerfil.get('/perfil',getPerfil);
routerPerfil.get('/perfil/:id',buscarPerfil); 
routerPerfil.put('/perfil/:id/', modPerfil); 
routerPerfil.delete('/perfil/:id/', delPerfil);
routerPerfil.get('/perfilyRol',perfilyRol);
routerPerfil.get('/perfilyRol/:id',buscPerfilyRol)
routerPerfil.get('/perfilPerId/:id',perfilPerId)
routerPerfil.put('/gestionPerfil/:perid/:idrol',gestionPerfil)//perID// ID ROL
routerPerfil.get('/gestionPerfil/:perid/:idrol',checkPerfiles)
routerPerfil.get('/perfilyRol2/:id',buscPerfilyRol2)

module.exports = routerPerfil;