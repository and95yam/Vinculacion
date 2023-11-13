const rutasFunciones = require('../../../rutas/rutas-funciones')
const con = require(rutasFunciones.conexion);

const addAccion = async(req,res) => {

    try{
        
        const{strtitulo,strdescripcion,strurl,blnactivo,strseudonimo} = req.body
        const response = await con.query('CALL smaseguridad.addAccion($1,$2,$3,$4,$5)',[strtitulo,strdescripcion,strurl,blnactivo,strseudonimo]);
        console.log(response.rows);

        //Respuesta 

        res.json({
            message:'Accion agregada',
            body:{strtitulo,strdescripcion,strurl,blnactivo,strseudonimo}

        })

    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const getAccion = async(req,res) => {
    try{
        
        const response = await con.query('SELECT * FROM smaseguridad.getAccion()');
        console.log(response.rows);
        res.status(200).json(response.rows);

    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const buscAccion = async(req,res) => {

    try{
        const id = req.params.id;
        const response = await con.query('SELECT * FROM smaseguridad.buscarAccion($1)',[id]);
        res.json(response.rows);

    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const modAccion = async(req,res) => {
    try{
         const id = req.params.id; 
         const{strtitulo,strdescripcion,strurl,blnactivo,strseudonimo} = req.body;
         const response = await con.query('CALL smaseguridad.modAccion($1,$2,$3,$4,$5,$6)',[id,strtitulo,strdescripcion,strurl,blnactivo,strseudonimo]);
         console.log(response);
         res.json('Accion modificada');

    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const delAccion = async(req,res) => {

    try{
        const id = req.params.id;
        const response = await con.query('CALL smaseguridad.elAccion($1)',[id]);
        console.log(response);
        res.json('Accion eliminada');
    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}


module.exports={
    addAccion,
    getAccion,
    buscAccion,
    modAccion,
    delAccion
}