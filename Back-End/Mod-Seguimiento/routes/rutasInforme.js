const {Router}= require('express');
const router =Router();
const {addConvenio}= require('../controllers/informeController');


router.post('/informe',addConvenio);



module.exports = router;