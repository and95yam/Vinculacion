const {Router}= require('express');
const router =Router();
const {addInforme,getInforme,getInformeCoord,getDatosInformeCoord}= require('../controllers/informeController');


router.post('/informe/:id',addInforme);
router.get('/informe',getInforme);
router.get('/informe_coordinador/:id',getInformeCoord);
router.get('/informe_datos/:id',getDatosInformeCoord)//id coordinador


module.exports = router;