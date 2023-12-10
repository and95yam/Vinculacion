const {Router}= require('express');
const router = Router();
const{getPlanificacion}= require('../controllers/planificacionControler')

router.get('/planificacion/:id',getPlanificacion);

module.exports = router;