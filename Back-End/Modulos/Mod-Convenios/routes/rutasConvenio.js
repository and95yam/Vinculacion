const {Router}= require('express');
const router =Router();

const{addConvenio,getConvenio,buscConvenio, verTablaConvenios,verConveniosCoordinador,verConveniosInvitado ,modConvenio} = require('../controllers/convenioController');

router.post('/convenio',addConvenio);
router.get('/convenio',getConvenio);
router.get('/convenio/:id',buscConvenio);
router.get('/convenio_tabla',verTablaConvenios);
router.get('/convenio_coordinador/:id',verConveniosCoordinador);
router.get('/convenio_invitado',verConveniosInvitado);
router.put('/convenio/:id',modConvenio);



module.exports = router;