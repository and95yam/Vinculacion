const express = require('express');
const rutasSeguridad= require('./rutas/mod-seguridad')
const rutasConvenio = require('./rutas/mod-convenios')
const rutasSeguimiento = require('./rutas/mod-seguimiento.js')
const app = express();
const puerto =3000;

// verbos 

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

//RUTAS//
//MOD SEGURIDAD//
app.use(require(rutasSeguridad.rutaAccion));
app.use(require(rutasSeguridad.rutaFuncion));
app.use(require(rutasSeguridad.rutaGrupo));
app.use(require(rutasSeguridad.rutaRol));
app.use(require(rutasSeguridad.rutaPerfil));

//MOD CONVENIOS//
app.use(require(rutasConvenio.rutaDependencia));
app.use(require(rutasConvenio.rutaInstitucion));
app.use(require(rutasConvenio.rutaCoordinador));
app.use(require(rutasConvenio.rutaConvenio));
app.use(require(rutasConvenio.rutaPlanificacion));

//MOD SEGUIMIENTO//

app.use(require(rutasSeguimiento.rutaInformes));
app.use(require(rutasSeguimiento.rutaEqInforme));
app.use(require(rutasSeguimiento.rutaActividadInforme));
app.use(require(rutasSeguimiento.rutaEstadoInforme));

app.listen(puerto); 
console.log('listening on port',puerto);
