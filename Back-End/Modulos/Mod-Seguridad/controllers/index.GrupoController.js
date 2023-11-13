const rutasFunciones = require('../../../rutas/rutas-funciones')
const con = require(rutasFunciones.conexion);

const addGrupo = async(req, res) => {

    try{
        const {strnombre,strdescripcion,intorden,intpadre,blnactivo} = req.body;
        const response = await con.query('CALL smaseguridad.addGrupo($1,$2,$3,$4,$5)',[strnombre,strdescripcion,intorden,intpadre,blnactivo]);
        console.log(response.rows);

        //Respuesta

        res.json({
            message: 'Grupo Agregado',
            body:{strnombre,strdescripcion,intorden,intpadre,blnactivo}
        })

    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const getGrupo = async(req, res) => {
    try{
        const response = await con.query('SELECT * FROM smaseguridad.getGrupo()');
        console.log(response.rows);
        res.status(200).json(response.rows);
    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const buscGrupo = async(req, res) => {
    try{
        const id = req.params.id
        const response = await con.query('select * from smaseguridad.buscarGrupo($1)',[id])
        res.json(response.rows);
        
    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const editGrupo = async(req, res) => {
    try{
        const id = req.params.id;
        const {strnombre,strdescripcion,intorden,intpadre,blnactivo} = req.body;
        const response = await con.query('CALL smaseguridad.modGrupo($1,$2,$3,$4,$5,$6)',[id,strnombre,strdescripcion,intorden,intpadre,blnactivo]);
        console.log(response.rows);
        res.json('Grupo Modificado');

    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const deleteGrupo = async(req, res) => {
    try{
        const id = req.params.id;
        const response = await con.query('CALL smaseguridad.elGrupo($1)',[id])
        console.log(response.rows);
        res.json('Grupo Eliminado');
    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

module.exports = {
    addGrupo,
    getGrupo,
    buscGrupo,
    editGrupo,
    deleteGrupo
}