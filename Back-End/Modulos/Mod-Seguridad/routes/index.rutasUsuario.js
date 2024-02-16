const{Router}=require('express');
const router= Router(); 
const {addUser,getUser,ModUser}= require ('../controllers/index.UsuarioController');

router.post('/usuario',addUser);
router.get('/usuario',getUser);
router.put('/usuario/:id',ModUser);//cedula usuario 

module.exports =router;