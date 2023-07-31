const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

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