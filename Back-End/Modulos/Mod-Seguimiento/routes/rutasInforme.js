const {Router}= require('express');
const router =Router();
const {addInforme,getInforme,getInformeCoord,getDatosInformeCoord,getInformesConvenio,editarInforme}= require('../controllers/informeController');


router.post('/informe/:id',addInforme);//id convenio
router.get('/informe',getInforme);
router.get('/informe_coordinador/:id',getInformeCoord);
router.get('/informe_datos/:id',getDatosInformeCoord)//id coordinador
router.get('/informe_convenio/:id',getInformesConvenio)// id convenio
router.put('/informe/:id/:idConvenio',editarInforme)//id informe

module.exports = router;