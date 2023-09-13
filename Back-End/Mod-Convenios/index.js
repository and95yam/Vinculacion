const express = require ( 'express' );
const app = express ();

//verbos // 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Midlewares//
 app.use(express.json());//convertir en objeto json
 app.use(express.urlencoded({ extended: true }));//procesa datos de formularios 

 //RUTAS//
 app.use(require('./routes/rutasDependencia'));
 app.use(require('./routes/rutasInstitucion'));
 app.use(require('./routes/rutasCoordinador'));

app.listen(3001);
console.log( 'listening on port 3001' );