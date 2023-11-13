const rutasFunciones = require('../../../rutas/rutas-funciones')
const con = require(rutasFunciones.conexion);


const addFuncion = async (req,res)=>{
    try{
        const {intacc_id,introl_id,intgru_id,intorden,blnactivo,blnpermisoagregar,blnpermisoeditar,blnpermisoeliminar} = req.body;
        const response= await con.query('CALL smaseguridad.addFuncion($1,$2,$3,$4,$5,$6,$7,$8)',[intacc_id,introl_id,intgru_id,intorden,blnactivo,blnpermisoagregar,blnpermisoeditar,blnpermisoeliminar]);
        console.log(response.rows);

        //respuesta 

        res.json({
            message: 'Funcion Agregada',
            body:{intacc_id,introl_id,intgru_id,intorden,blnactivo,blnpermisoagregar,blnpermisoeditar,blnpermisoeliminar}
        })

    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const getFuncion = async (req,res)=>{

    try{
        const response = await con.query('SELECT * FROM smaseguridad.getFuncion()');
        console.log(response.rows);
        res.status(200).json(response.rows);
    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }

}

const buscFuncion = async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await con.query('select * from smaseguridad.buscarFuncion($1)',[id]); 
        res.json(response.rows)


    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const modFuncion = async (req,res)=>{
    try{
         const id= req.params.id;
         const{intacc_id,introl_id,intgru_id,intorden,blnactivo,blnpermisoagregar,blnpermisoeditar,blnpermisoeliminar} = req.body;
         const response = await con.query('CALL smaseguridad.modFuncion($1,$2,$3,$4,$5,$6,$7,$8,$9)',[id,intacc_id,introl_id,intgru_id,intorden,blnactivo,blnpermisoagregar,blnpermisoeditar,blnpermisoeliminar]);
         console.log(response.rows);
         res.json('Funcion Modificada');   

    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const delFuncion = async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await con.query('CALL smaseguridad.elFuncion($1)',[id]);
        console.log(response.rows);
        res.json('Funcion Eliminada'); 

    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

module.exports = {
    addFuncion,
    getFuncion,
    buscFuncion,
    modFuncion,
    delFuncion
}