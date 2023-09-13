const {Router} = require('express');
const router = Router();

const {AddInstitucion,GetInstitucion,BuscarInstitucion,EditarInstitucion} = require('./../controllers/institucionController');

router.post('/convenio/institucion',AddInstitucion);
router.get('/convenio/institucion',GetInstitucion);
router.get('/convenio/institucion/:id',BuscarInstitucion);
router.put('/convenio/institucion/:id',EditarInstitucion);

module.exports = router;
