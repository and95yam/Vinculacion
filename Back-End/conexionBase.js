const {Pool} = require('pg');

const pool = new  Pool({
    hoost: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'DbVinculacion',
    port: 5432
})  

module.exports = pool;