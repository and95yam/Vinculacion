const con= require('../../conexionBase');

const addCoordinador = async(req,res)=>{

    try{
        const {strcicoordinador,intiddependencia,strnombrescoordinador,strcorreocoordinador,strtelefonocoordinador} = req.body;
        const response = await con.query('CALL smaconvenios.AddCoordinador($1,$2,$3,$4,$5)',[strcicoordinador,intiddependencia,strnombrescoordinador,strcorreocoordinador,strtelefonocoordinador]);
        console.log(response);//borrar cuando este full

        res.json({
            message: 'coordinador creado',
            body:{
                coordinador:{strcicoordinador,intiddependencia,strnombrescoordinador,strcorreocoordinador,strtelefonocoordinador}
            }
        })
    }catch(error){
        res.status(500).send({ success: false, message:error.message });
        
    }
}



const getCoordinador = async(req,res)=>{
    
    try{
        
        const response = await con.query('SELECT  * FROM smaconvenios.GetCoordinador()');
        
        res.status(200).json(response.rows);

    }catch(error){
        res.status(500).send({ success: false, message:error.message });
    }
}

const buscarCoordinador = async(req,res)=>{
    try{
        const id = req.params.id;
        const response = await con.query('SELECT * FROM smaconvenios.BuscarCoordinador($1)',[id]);
        res.status(200).json(response.rows);
    }catch(error){
        res.status(500).send({ success: false, message:error.message });
    }
}

const editarCoordinador = async(req,res)=>{
    try{
        const id = req.params.id;
        const{intiddependencia,strnombrescoordinador,strcorreocoordinador,strtelefonocoordinador}=req.body;
        const response =await con.query('CALL smaconvenios.ModCoordinador($1,$2,$3,$4,$5)',[id,intiddependencia,strnombrescoordinador,strcorreocoordinador,strtelefonocoordinador]);
        console.log(response);
        res.json('coordinador' +id +' actualizado' )
    }catch(error){
        res.status(500).send({ success: false, message:error.message });
    }
}



module.exports = {
    
    getCoordinador,
    buscarCoordinador,
    editarCoordinador,
    addCoordinador
   
}

