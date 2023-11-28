const rutasFunciones = require('../../../rutas/rutas-funciones')
const con = require(rutasFunciones.conexion);

const addPerfil = async(req,res)=>{
    try{
        const { lngusr_id,introl_id,blnactivo,lngasignadopor,lngfechaasignacion,lngmodificadopor,lngfechamodificacion,strnombretema,blndefault} = req.body;
        const response = await con.query('CALL smaseguridad.addPerfil($1,$2,$3,$4,$5,$6,$7,$8,$9)',[lngusr_id,introl_id,blnactivo,lngasignadopor,lngfechaasignacion,lngmodificadopor,lngfechamodificacion,strnombretema,blndefault])
        console.log(response.rows); 

        //Respuesta 

        res.json({
            message: 'Perfil Agregado',
            body:{
                perfil:{lngusr_id,introl_id,blnactivo,lngasignadopor,lngfechaasignacion,lngmodificadopor,lngfechamodificacion,strnombretema,blndefault}
            }
        })
        
    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const getPerfil = async(req,res)=>{

    try{
        const response = await con.query('SELECT * FROM smaseguridad.getPerfil()');
        console.log(response.rows);
        res.status(200).json(response.rows);
    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
    
}

const buscarPerfil = async(req,res)=>{
    try{
         const id = req.params.id;
         const response = await con.query('SELECT * FROM smaseguridad.buscarPerfil($1)',[id]);
         res.json(response.rows);

    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const modPerfil = async(req,res)=>{
    try{
        const id = req.params.id;
        const{lngusr_id,introl_id,blnactivo,lngasignadopor,lngfechaasignacion,lngmodificadopor,lngfechamodificacion,strnombretema,blndefault} = req.body;
        const  response = await con.query('CALL smaseguridad.modPerfil($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',[id,lngusr_id,introl_id,blnactivo,lngasignadopor,lngfechaasignacion,lngmodificadopor,lngfechamodificacion,strnombretema,blndefault]);
        console.log(response);
        res.json('Perfil actualizado');
    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const delPerfil = async(req,res)=>{
    try{
       const id= req.params.id;
       const response = await con.query('CALL smaseguridad.elPerfil($1)',[id]);
       console.log(response);
       res.json('perfil eliminado');

    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const perfilyRol = async(req,res)=>{
    try{
    const response= await con.query('select tp.lngusr_id as  id_usuario,tp.strnombretema as perfil,tr.strcodigo as codigo_rol, tr.strnombre as rol, tr.strdescripcion, tp.blnactivo, tp.lngfechaasignacion From smaseguridad.rol AS tr JOIN smaseguridad.perfil AS tp On tr.intid = tp.introl_id');
    
    console.log(response.rows);
    res.status(200).json(response.rows);

    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const buscPerfilyRol = async (req, res)=>{
    try{
         console.log('aqui estoy');
         
             const id = req.params.id; var sentencia ="select tp.lngusr_id as  id_usuario,tp.strnombretema as perfil,tr.strcodigo as codigo_rol, tr.strnombre as rol, tr.strdescripcion, tp.blnactivo, tp.lngfechaasignacion From smaseguridad.rol AS tr JOIN smaseguridad.perfil AS tp On tr.intid = tp.introl_id  where  tp.lngusr_id = '"+id+"' and tp.blnactivo=true";
            console.log(sentencia);
             const response = await con.query (sentencia);
             console.log(response);
             res.json(response.rows);
             
    }catch(error){
        res.status(500).send({succes: false, message: error.message})
    }
}


module.exports ={
    addPerfil,
    getPerfil,
    buscarPerfil,
    modPerfil,
    delPerfil,
    perfilyRol,
    buscPerfilyRol
}