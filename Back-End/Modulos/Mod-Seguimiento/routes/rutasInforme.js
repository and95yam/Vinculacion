const {Router}= require('express');
const router =Router();
const {addInforme,getInforme,getInformeCoord,getDatosInformeCoord,getInformesConvenio}= require('../controllers/informeController');


router.post('/informe/:id',addInforme);
router.get('/informe',getInforme);
router.get('/informe_coordinador/:id',getInformeCoord);
router.get('/informe_datos/:id',getDatosInformeCoord)//id coordinador
router.get('/informe_convenio/:id',getInformesConvenio)// id convenio

module.exports = router;