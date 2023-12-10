const rutasFunciones = require('../../../rutas/rutas-funciones')
const con = require(rutasFunciones.conexion);

const getPlanificacion = async(req,res)=>{
    
    try{
        const id = req.params.id;
        const response = await con.query('select * from smaconvenios.buscarplanificacionconvenio($1)',[id]);
        res.status(200).json(response.rows)

    }catch(error){
        res.status(500).send({success:false, message:error.message});
        console.error(`Se produjo un error en la línea ${error.stack}`);
    }
}

module.exports = {
    getPlanificacion
}