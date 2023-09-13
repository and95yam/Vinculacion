const {Router}= require('express');
const router =Router();
const{getCoordinador,buscarCoordinador,editarCoordinador,addCoordinador} = require('../controllers/coordinadorController');


router.get('/convenio/coordinador',getCoordinador);
router.get('/convenio/coordinador/:id',buscarCoordinador);
router.put('/convenio/coordinador/:id',editarCoordinador);
router.post('/convenio/coordinador',addCoordinador);
module.exports=router;
