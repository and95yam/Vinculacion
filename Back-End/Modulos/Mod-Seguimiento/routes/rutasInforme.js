const {Router}= require('express');
const router =Router();
const {addInforme,getInforme}= require('../controllers/informeController');


router.post('/informe/:id',addInforme);
router.get('/informe',getInforme);


module.exports = router;