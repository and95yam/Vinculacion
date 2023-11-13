const {Router} = require('express');
const routerPerfil = Router(); 

const{addPerfil, getPerfil, buscarPerfil, modPerfil, delPerfil,perfilyRol, buscPerfilyRol} = require('../controllers/index.PerfilController');

routerPerfil.post('/perfil', addPerfil);
routerPerfil.get('/perfil',getPerfil);
routerPerfil.get('/perfil/:id',buscarPerfil); 
routerPerfil.put('/perfil/:id/', modPerfil); 
routerPerfil.delete('/perfil/:id/', delPerfil);
routerPerfil.get('/perfilyRol',perfilyRol);
routerPerfil.get('/perfilyRol/:id',buscPerfilyRol)

module.exports = routerPerfil;