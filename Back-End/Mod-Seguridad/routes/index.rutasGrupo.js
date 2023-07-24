const {Router} = require('express'); 
const RouterGrupo = Router(); 
const{addGrupo,getGrupo,buscGrupo,editGrupo,deleteGrupo} = require('../controllers/index.GrupoController');

RouterGrupo.post('/grupo',addGrupo);
RouterGrupo.get('/grupo',getGrupo);
RouterGrupo.get('/grupo/:id',buscGrupo);
RouterGrupo.put('/grupo/:id',editGrupo);
RouterGrupo.delete('/grupo/:id',deleteGrupo);



module.exports = RouterGrupo;