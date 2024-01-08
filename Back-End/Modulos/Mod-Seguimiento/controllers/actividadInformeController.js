const rutasFunciones = require('../../../rutas/rutas-funciones')
const con = require(rutasFunciones.conexion);

const addActInforme = async (req,res) => {

    try{
        const id = req.params.id;//id informe
        const {intNumActividad,strActividad,dtFechaInicioActividad,dtFechaFinActividad} = req.body;

        const response = await con.query('CALL smaconvenios.addactinforme($1,$2,$3,$4,$5)',[intNumActividad,id,strActividad,dtFechaInicioActividad,dtFechaFinActividad]);

        res.json({
            message: 'Actividad Agregada',
            body:{
                actividad:{intNumActividad,id,strActividad,dtFechaInicioActividad,dtFechaFinActividad}
            }
        })
    }catch(error){
        res.status(500).send({success:false,message:error.message});
    }

}

const getActInforme = async (req,res) => {
    try{
        
        const id = req.params.id; // id informe 
        const response = await con.query('SELECT * FROM smaconvenios.BuscarActInforme($1)',[id]);
        res.status(200).send(response.rows);
        

    }catch(error){
        res.status(500).send({success:false,message:error.message});
        
    }

}

const editActInforme = async (req,res) => {
    try{
        const id = req.params.id; // id informe
        const idact = req.params.idact; // id actividad 
        const {stractividad,dtfechainicioactividad,dtfechafinactividad}=req.body;

        const response = await con.query('CALL smaconvenios.ModActInforme($1,$2,$3,$4,$5)',[id,idact,stractividad,dtfechainicioactividad,dtfechafinactividad]);

        console.log(response.rows);
        res.json('actividad '+id+'actualizada');

    }catch(error){
        res.status(500).send({success:false,message:error.message});
    }
}

const delActInforme = async (req,res) => {
    try{
            const id= req.params.id;
            const idact = req.params.idact;

            const response = await con.query('CALL smaconvenios.DelActInforme($1,$2)',[idact,id]);
            res.json('actividad '+ idact+' eliminada');
    }catch(error){
        res.status(500).send({success:false,message:error.message});
    }
}

module.exports ={
    addActInforme,
    getActInforme,
    editActInforme,
    delActInforme
}