const express = require('express');
const app = express();

/*MIDLEWARES*/

app.use(express.json());//convierte en objeto js 
app.use(express.urlencoded({extended:false}));//procesa datos de formularios(en otros modulos extended true)


/*RUTAS */

app.use(require('./routes/index.rutasRol'));//ROL
app.use(require('./routes/index.rutasPerfil'));//PERFIL
app.use(require('./routes/index.rutasAccion'));//ACCION
app.use(require('./routes/index.rutasGrupo'));//Grupo
app.use(require('./routes/index.rutasFuncion'));//Funcion

app.listen(3000); 
console.log('listening on port 3000');