const rutasFunciones = require('../../../rutas/rutas-funciones')
const con = require(rutasFunciones.conexion);

const AddInstitucion = async(req,res)=>{

    try{
         const{strinstitucion}= req.body;
         const response = await con.query('CALL smaconvenios.AddInstitucion($1)',[strinstitucion]);
         console.log(response);

         res.json({
            message: 'institucion creada',
            body:{
                institucion:{strinstitucion}
            }
         })
    }catch(error){
        res.status(500).send({ success: false, message:error.message });
    }
}

const GetInstitucion = async(req,res)=>{

    try{
        const response = await con.query('SELECT  * FROM smaconvenios.GetInstitucion()');
        console.log(response.rows);
        res.status(200).json(response.rows);

    }catch(error){
        res.status(500).send({ success: false, message:error.message });
    }
}

const BuscarInstitucion = async(req,res)=>{

    try{
        const id= req.params.id;
        const response = await con.query('SELECT * FROM smaconvenios.BuscarInstitucion($1)',[id]);
        res.json(response.rows);
    }catch(error){
        res.status(500).send({ success: false, message:error.message });
    }
}

const EditarInstitucion = async(req,res)=>{

    try{
         const id = req.params.id; 
         const{strinstitucion}= req.body;
         const response = await con.query('CALL smaconvenios.ModInstitucion($1,$2)',[id,strinstitucion]);
         console.log(response);
         res.json('institucion actualizada');
    }catch(error){
        res.status(500).send({ success: false, message:error.message });
    }
}

module.exports = {
    AddInstitucion,
    GetInstitucion,
    BuscarInstitucion,
    EditarInstitucion
}