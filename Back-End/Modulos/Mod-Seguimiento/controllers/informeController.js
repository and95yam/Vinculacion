//const { json } = require('body-parser');
const { response } = require('express');
const rutasFunciones = require('../../../rutas/rutas-funciones')
const con = require(rutasFunciones.conexion);

const addInforme = async(req,res)=>{

    try{
           const id = req.params.id;
           
            const{strPeriodo,strBeneficiarioDirecto,strBeneficioDirecto,strBeneficiarioIndirecto,strBeneficioIndirecto,strResultados,strObservaciones,strAnexo}=req.body;
            const strIdInforme=(id+'_'+strPeriodo)//concatenacion de id convenio+periodo para codigo de informe 
            console.log(strIdInforme)
            console.log('id',id)
            console.log('periodo',strPeriodo)

            const intIdplanificacion = await con.query ('select intidplanificacion from smaconvenios.planificacion Where stridconvenio = $1 And strperiodo = $2',[id,strPeriodo])//consulta sql para tener el id de la fila determinada para la planificacion (hacer procedimiento)
            console.log(intIdplanificacion.rows)
            const intIdplanificacion2 = intIdplanificacion.rows;// manda las filas de la consulta 
            
            const intIdplanificacion3 = intIdplanificacion2[0].intidplanificacion// da el valor de la fila exacta. y el idplanificacion

            
           
             
            const strEstado = 'Entregado'

            //Ingreso datos Tabla Informe 
            const responseInforme = await con.query('Call smaconvenios.addinforme($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
            [strIdInforme,intIdplanificacion3,strPeriodo,id,strBeneficiarioDirecto,strBeneficioDirecto,strBeneficiarioIndirecto,strBeneficioIndirecto,strResultados,strObservaciones,strAnexo]);

           
            //Ingreso Tabla estado Informe 

            const responseEstadoInforme = await con.query('INSERT INTO smaconvenios.estadoinforme(stridinforme,strestadoinforme)VALUES ($1,$2);',[strIdInforme,strEstado])//Hacer procedimiento

            const numeroFilas = await con.query('select count(strperiodo) from smaconvenios.planificacion where stridconvenio =$1',[id])//regresa conteo de filas de planificacion
            const numeroFilas2 = numeroFilas.rows;
            const numeroFilas3 = parseInt(numeroFilas2[0].count)

            const avance1= await con.query('select fltavanceconvenio from smaconvenios.convenio where stridconvenio =$1',[id])
            const avance2=avance1.rows;
            const avance3=parseFloat(avance2[0].fltavanceconvenio);
            console.log(avance3)
            const avance4 = (100/numeroFilas3)+avance3;
            console.log(avance4)
            const actualizarAvance = await con.query('update smaconvenios.convenio set fltavanceconvenio=$1 where stridconvenio= $2',[avance4,id])
             


            res.json ({
              message: "informe Ingresado",
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
      const response= await con.query('SELECT * FROM smaconvenios.getinforme()');

      res.status(200).json(response.rows);

    }catch(error){
      res.status(500).send({succes:false, message:error.message});
      console.error(`Se produjo un error en la línea ${error.stack}`)
    }   
 }

 const getInformeCoord = async (req,res)=>{

  try{
     const id = req.params.id;

      const response = await con.query("select * from smaconvenios.getInformeCoordinador($1)",[id])
     res.status(200).json(response.rows);
    
  }catch(error){
    res.status(500).send({succes:false, message:error.message});
    console.error(`Se produjo un error en la línea ${error.stack}`)

  }
 }

 const getDatosInformeCoord = async (req,res)=>{

  try{
     const id = req.params.id;

      const response = await con.query("select * from smaconvenios.getdatosinforme($1)",[id])
      res.status(200).json(response.rows);
    
  }catch(error){
    res.status(500).send({succes:false, message:error.message});
    console.error(`Se produjo un error en la línea ${error.stack}`)

  }
 }
 
 const getInformesConvenio = async (req,res)=>{
  try{
    const id = req.params.id;

    const response = await con.query('SELECT * from smaconvenios.getdatosinformeconvenio($1)',[id]);
    res.status(200).json(response.rows);

  }catch(error){
    res.status(500).send({succes:false, message:error.message});
    console.error(`Se produjo un error en la línea ${error.stack}`)
  }
 }

 const editarInforme = async (req,res)=>{
  try{
      const id = req.params.id;
      const idConvenio = req.params.idConvenio;
      const{strPeriodo,strBeneficiarioDirecto,strBeneficioDirecto,strBeneficiarioIndirecto,strBeneficioIndirecto,strResultados,strObservaciones,strAnexo}=req.body;
      console.log('idInforme', id); 
      console.log('idConvenio',idConvenio)

      const intIdPlanificacion1 = await con.query('select intidplanificacion from smaconvenios.planificacion Where stridconvenio = $1 And strperiodo = $2',[idConvenio,strPeriodo]);
      console.log(intIdPlanificacion1.rows)
      const intIdPlanificacion2 = intIdPlanificacion1.rows//manda las filas de la consulta 
      const intIdPlanificacion3 = intIdPlanificacion2[0].intidplanificacion// el valor de idplanificacion
      console.log('aqui',intIdPlanificacion2[0])
      //modificacion de datos en la tabla informe
      const response = await con.query('CALL smaconvenios.modinforme($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
      [id,intIdPlanificacion3,strPeriodo,idConvenio,strBeneficiarioDirecto,strBeneficioDirecto,strBeneficiarioIndirecto,strBeneficioIndirecto,strResultados,strObservaciones,strAnexo])
      console.log(response);
      res.json({message:'informe actualizado'})
  }catch(error){
    res.status(500).send({succes:false, message:error.message});
    console.error(`Se produjo un error en la línea ${error.stack}`)
  }

 }

 
 

module.exports={
  addInforme,
  getInforme,
  getInformeCoord,
  getDatosInformeCoord,
  getInformesConvenio,
  editarInforme
}