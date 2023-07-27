const {Router} = require('express');
const routerPerfil = Router(); 

const{addPerfil, getPerfil, buscarPerfil, modPerfil, delPerfil,perfilyRol} = require('../controllers/index.PerfilController');

routerPerfil.post('/perfil', addPerfil);
routerPerfil.get('/perfil',getPerfil);
routerPerfil.get('/perfil/:id',buscarPerfil); 
routerPerfil.put('/perfil/:id/', modPerfil); 
routerPerfil.delete('/perfil/:id/', delPerfil);
routerPerfil.get('/perfilyRol',perfilyRol);

module.exports = routerPerfil;