const Router = require ('express');
const router = new Router();
const{addActInforme,getActInforme,editActInforme,delActInforme}=require('../controllers/actividadInformeController')

router.post('/actividad/:id',addActInforme);//Id informe
router.get('/actividad/:id',getActInforme);//id informe
router.put('/actividad/:id/:idact',editActInforme);
router.delete('/actividad/:id/:idact',delActInforme);

module.exports = router;