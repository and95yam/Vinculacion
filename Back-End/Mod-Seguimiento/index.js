const express = require('express');
const app = express();

// Verbos//

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Middlewares//
app.use(express.json());//convierte en objeto json 
app.use(express.urlencoded({ extended: true }));// procesa datos de forms 

//RUTAS//

app.use(require('./routes/rutasInforme.js'));

app.listen(3002);
console.log('listening on port 3002');