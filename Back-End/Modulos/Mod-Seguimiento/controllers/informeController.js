//const { json } = require('body-parser');
const rutasFunciones = require('../../../rutas/rutas-funciones')
const con = require(rutasFunciones.conexion);

const addInforme = async(req,res)=>{

    try{
           const id = req.params.id;
           
            const{strPeriodo,strBeneficiarioDirecto,strBeneficioDirecto,strBeneficiarioIndirecto,strBeneficioIndirecto,strResultados,strObservaciones,strAnexo}=req.body;
            const strIdInforme=(id+'--'+strPeriodo)//concatenacion de id convenio+periodo para codigo de informe 
            const intIdplanificacion = await con.query ('select intidplanificacion from smaconvenios.planificacion Where stridconvenio = $1 And strperiodo = $2',[id,strPeriodo])//consulta sql para tener el id de la fila determinada para la planificacion (hacer procedimiento)
            const intIdplanificacion2 = intIdplanificacion.rows;// manda las filas de la consulta 
            const intIdplanificacion3 = intIdplanificacion2[0].intidplanificacion// da el valor de la fila exacta. y el idplanificacion 
            const strEstado = 'Entregado'

            //Ingreso datos Tabla Informe 
            const responseInforme = await con.query('Call smaconvenios.addinforme($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
            [strIdInforme,intIdplanificacion3,strPeriodo,id,strBeneficiarioDirecto,strBeneficioDirecto,strBeneficiarioIndirecto,strBeneficioIndirecto,strResultados,strObservaciones,strAnexo]);

           
            //Ingreso Tabla estado Informe 

            const responseEstadoInforme = await con.query('INSERT INTO smaconvenios.estadoinforme(stridinforme,strestadoinforme)VALUES ($1,$2);',[strIdInforme,strEstado])//Hacer procedimiento

            res.json ({
              message: " informe Ingresado",
              body: {
                informe:{strIdInforme,intIdplanificacion3,strPeriodo,id,strBeneficiarioDirecto,strBeneficioDirecto,strBeneficiarioIndirecto,strBeneficioIndirecto,strResultados,strObservaciones,strAnexo}
              }
            }) 

    }catch(error){
      res.status(500).send({succes:false, message:error.message});
      console.error(`Se produjo un error en la línea ${error.stack}`)
    }

}



 const getInforme = async (req, res) => {

    try{
      response= await con.query('SELECT * FROM smaconvenios.getinforme()');

      res.status(200).json(response.rows);

    }catch(error){
      res.status(500).send({succes:false, message:error.message});
    }
    
    
 }

module.exports={
  addInforme,
  getInforme
}