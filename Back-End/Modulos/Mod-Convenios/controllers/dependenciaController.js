const rutasFunciones = require('../../../rutas/rutas-funciones')
const con = require(rutasFunciones.conexion);

const addDependencia = async(req,res)=>{

    try{

        const{strnombredependencia,strtipodependencia} = req.body;
        const response= await con.query('CALL smaconvenios.AddDependencia($1,$2)',[strnombredependencia,strtipodependencia]);
        

        //RESPUESTA 
        res.json({
            message: 'dependencia creada',
            body:{
                dependencia:{strnombredependencia,strtipodependencia}
            }
        })

    }catch(error){
        res.status(500).send({ success: false, message:error.message });
    }
}

const getDependencia= async(req,res)=>{

    try{
        const response = await con.query('SELECT  * FROM smaconvenios.GetDependencia()');
        console.log(response.rows);
        res.status(200).json(response.rows);
    }catch(error){
       // res.status(500).send({ success: false, message:error.message });
    }
    
}

const buscarDependencia = async(req,res)=>{
    try{
        const id = req.params.id;
        const response = await con.query('SELECT * FROM smaconvenios.BuscarDependencia($1)',[id]);
        res.json(response.rows);

    }catch(error){
        res.status(500).send({succes:false,message:error.message});
    }
}

const editarDependencia = async(req,res)=>{
    try{
    const id= req.params.id;
    const{strnombredependencia,strtipodependencia} = req.body;
    const response = await con.query('CALL smaconvenios.ModDependencia($1,$2,$3)',[id,strnombredependencia,strtipodependencia]);
    
    console.log(response);
    res.status(200).json({ success: true, message: 'Dependencia actualizada exitosamente' });

    

    }catch(error){
        res.status(500).send({succes:false,message:error.message});
    }
}


module.exports = {
    addDependencia,
    getDependencia,
    buscarDependencia,
    editarDependencia
}