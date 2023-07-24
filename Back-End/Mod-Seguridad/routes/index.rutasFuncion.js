const{Router} = require('express');
const routerFuncion = Router(); 
const {addFuncion,getFuncion,buscFuncion,modFuncion,delFuncion} = require('../controllers/index.FuncionController');

routerFuncion.post('/funcion',addFuncion);
routerFuncion.get('/funcion',getFuncion);
routerFuncion.get('/funcion/:id',buscFuncion);
routerFuncion.put('/funcion/:id',modFuncion);
routerFuncion.delete('/funcion/:id',delFuncion);

module.exports = routerFuncion;
