const con = require('../../conexionBase');

const addConvenio = async(req,res)=>{

    try{
           const id = req.params.id;
           
            const{strPeriodo,strBeneficiarioDirecto,strBeneficioDirecto,strBeneficiarioIndirecto,strBeneficioIndirecto,strResultados,strObservaciones,strAnexo,//Tabla Informe
                 intIdDepencencia,strCiEquipo,strNombreEquipo,strActividadEquipo,//Tabla Equipo_Informe
                 intNumActividad,strActividad,dtFechaInicioActividad,dtFechaFinActividad,//Tabla Actividad_Informe 
            }=req.body;
            const strIdInforme=(id+'-'+strPeriodo)//concatenacion de id convenio+periodo para codigo de informe 
            const intIdplanificacion = await con.query ('select intidplanificacion from smaconvenios.planificacion Where stridconvenio = $1 And strperiodo = $2',[id,strPeriodo])//consulta sql para tener el id de la fila determinada para la planificacion (hacer procedimiento)
            
            //Ingreso datos Tabla Informe 
            const responseInforme = await con.query('',[]);
           
    }catch(error){
        res.status(500).send({succes:false, message:error.message});
    }

}



module.exports={
    addConvenio
}