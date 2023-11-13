const {rutasSeguridad} = require ( '../../../rutas/mod-seguridad.js')
const {Router} = require('express');
const routerAccion = Router();
const {addAccion, getAccion, buscAccion, modAccion, delAccion} = require('../controllers/index.AccionController');


routerAccion.post('/accion', addAccion);
routerAccion.get('/accion', getAccion);
routerAccion.get('/accion/:id', buscAccion);
routerAccion.put('/accion/:id', modAccion);
routerAccion.delete('/accion/:id', delAccion);

module.exports = routerAccion;