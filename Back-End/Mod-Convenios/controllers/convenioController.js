const con = require('../../conexionBase');
const llamado = require('../controllers/dependenciaController');

const addConvenio =async(req,res)=>{

    llamado.getDependencia();
}

const getConvenio =async(req,res)=>{

}

const buscarConvenio =async(req,res)=>{

}

const editarConvenio =async(req,res)=>{

}

const eliminarConvenio =async(req,res)=>{

} 

module.exports= {
    addConvenio,
    getConvenio,
    buscarConvenio,
    editarConvenio,
    eliminarConvenio
}