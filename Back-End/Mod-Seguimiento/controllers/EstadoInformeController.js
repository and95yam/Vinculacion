const con = require('../../conexionBase');

const verEstadoInforme = async (req,res) => {

    try{
       const id = req.params.id

       const response = await con.query('SELECT * FROM smaconvenios.BuscarEstadoInforme($1)',[id]);

       res.json(response.rows);


    }catch(error){
        res.status(500).send({success:false,message:error.message});
    }
}

const evaluarInforme = async (req,res) => {

    try{

        const id = req.params.id; 
        const{strestadoInforme,strObservacionesInforme,blnfirmado}=req.body;
 
        const response = await con.query('CALL smaconvenios.modestadoinforme($1,$2,$3,$4,current_date)',[id,strestadoInforme,strObservacionesInforme,blnfirmado]);
        console.log(response.rows);
        res.json('Estado del informe '+id+'Evaluado');

    }catch(error){
        res.status(500).send({success:false,message:error.message});
    }
}

module.exports ={
    verEstadoInforme,
    evaluarInforme
}