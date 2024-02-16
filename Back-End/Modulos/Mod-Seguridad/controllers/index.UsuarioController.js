const rutasFunciones = require('../../../rutas/rutas-funciones')
const con = require(rutasFunciones.conexion);

const addUser = async (req,res)=>{

    try{

        const{perid,cedulaUsuario,nombreUsuario,primerApellido,segundoApellido, correo,estado,idrol}=req.body
        
    
        const response = await con.query('call smaseguridad.AddUsuario($1,$2,$3,$4,$5,$6,$7,$8)',[perid,cedulaUsuario,nombreUsuario,primerApellido,segundoApellido,correo,estado,idrol])   
            
         console.log(response)
         res.json({message:'Usuario Creado'})

    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }

}

const getUser= async (req,res)=>{

    try{

        const response = await con.query('select * from smaseguridad.GetUsers()');
        console.log(response.rows);
        res.json(response.rows);


    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
}

const ModUser = async (req,res)=>{

    try{
        const id = req.params.id;
        const{c__estado,c__idrol}=req.body;
        const response =await con.query('call smaseguridad.modUser($1,$2,$3)',[id,c__estado,c__idrol]);
        res.json({message:"Actualizado"});


    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }

}

module.exports ={
    addUser,
    getUser,
    ModUser
}
