const Router = require('express');
const router = new Router();
const {verEstadoInforme,evaluarInforme} = require('../controllers/EstadoInformeController');

router.get('/evaluar/:id',verEstadoInforme);
router.put('/evaluar/:id',evaluarInforme);

module.exports = router;

