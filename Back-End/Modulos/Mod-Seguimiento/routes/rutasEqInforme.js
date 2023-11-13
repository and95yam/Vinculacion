const {Router}= require('express');
const router =Router();
const {addEqInforme,getEqInforme,editEqInforme,delEqInforme}= require('../controllers/eqInformeController');


router.post('/miembro/:id',addEqInforme);//id informe 
router.get('/miembro/:id',getEqInforme);//id informe 
router.put('/miembro/:id/:idci',editEqInforme);//id informe//ci miembro
router.delete('/miembro/:id/:idci',delEqInforme);//id informe // ci miembro


module.exports = router;