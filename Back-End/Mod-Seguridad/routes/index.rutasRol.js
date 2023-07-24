const { Router}= require ('express');
const router = Router();
const {addRol,getRol, buscarRol, modRol,elRol} = require ('../controllers/index.RolController')


router.post('/rol',addRol); // llamado metodo que agrega el rol 
router.get('/rol',getRol);  //llamado a metodo que lista todos los roles
router.get('/rol/:id',buscarRol); // llamado a metodo que busca por id
router.put('/rol/:id',modRol); // llamado a metodo que modifica
router.delete('/rol/:id',elRol); // llamado a metodo que elimina 

module.exports = router;
