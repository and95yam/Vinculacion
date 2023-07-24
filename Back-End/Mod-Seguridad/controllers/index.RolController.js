
const con =require('../../conexionBase');

const addRol =async (req,res)=>{

    try{

       const{strcodigo,strnombre,strdescripcion,blnactivo,intorden} = req.body;
       const response = await con.query('CALL smaseguridad.AddRol($1,$2,$3,$4,$5)',[strcodigo,strnombre,strdescripcion,blnactivo,intorden]);
       console.log(response);

       //RESPUESTA
        res.json({
            message: 'Rol Creado',
            body:{
                rol:{strcodigo,strnombre,strdescripcion,blnactivo,intorden}
            }
        })

    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
    
}

const getRol =async (req,res)=>{
   
    try{
        const response = await con.query('SELECT * FROM smaseguridad.rol');
        console.log(response.rows);
        res.status(200).json(response.rows);
    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
   

}

const buscarRol = async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await con.query( 'SELECT * FROM smaseguridad.buscarROL($1)',[id]);
        res.json(response.rows);

    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }

     
}

const modRol = async (req,res)=>{

    try{
        const id = req.params.id;
        const{strcodigo,strnombre,strdescripcion,blnactivo,intorden} = req.body;
        const response = await con.query('CALL smaseguridad.modROL($1,$2,$3,$4,$5,$6)',[id,strcodigo,strnombre,strdescripcion,blnactivo,intorden]);

        //RESPUESTA
        console.log(response);
        res.json('Rol {$id} acutualizado')
        
    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
    

}

const elRol = async (req,res)=>{

    try{
        const id= req.params.id;
        const response = await con.query('CALL smaseguridad.elrol($1);' ,[id]);
        console.log(response);
        res.json('ROl',id,'Eliminado');
    }catch(error){
        res.status(500).send({success:false,message: error.message});
    }
    
}





module.exports = {
    addRol,
    getRol,
    buscarRol,
    modRol,
    elRol
    
}