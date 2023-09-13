const {Router} = require('express');
const router = Router();
const {addDependencia,getDependencia,buscarDependencia,editarDependencia} = require('../controllers/dependenciaController')

router.post('/convenio/dependencia',addDependencia);
router.get('/convenio/dependencia',getDependencia);
router.get('/convenio/dependencia/:id',buscarDependencia);
router.put('/convenio/dependencia/:id',editarDependencia);

module.exports = router;