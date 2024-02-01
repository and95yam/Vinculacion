const rutasFunciones = require('../../../rutas/rutas-funciones')
const con = require(rutasFunciones.conexion);

const verEstadoInforme = async (req,res) => {

    try{
       const id = req.params.id

       const response = await con.query('SELECT * FROM smaconvenios.BuscarEstadoInforme($1)',[id]);

       res.json(response.rows);


    }catch(error){
        res.status(500).send({success:false,message:error.message});
    }
}

const evaluarInforme = async (req,res)=>{
    
    try{
        const id = req.params.id; 
        const {strEstadoInforme,strObservacionesInforme}=req.body;

        const response = await con.query('call smaconvenios.EvaluarInforme($1,$2,$3)',[id,strEstadoInforme,strObservacionesInforme])
        res.json({message:'informe evaluado'})

    }catch(error){
        res.status(500).send({success:false,message:error.message});
    }
}




module.exports ={
    verEstadoInforme,
    evaluarInforme
}