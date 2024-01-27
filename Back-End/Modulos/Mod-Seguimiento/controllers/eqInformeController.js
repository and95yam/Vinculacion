const rutasFunciones = require('../../../rutas/rutas-funciones')
const con = require(rutasFunciones.conexion);

const addEqInforme = async (req,res)=> {

    try{

        const id = req.params.id
        const {intIdDependencia,strCiEquipo,strNombreEquipo,strActividadEquipo} = req.body;

        const response = await con.query('CALL smaconvenios.addeqinforme($1,$2,$3,$4,$5)',
        [id,intIdDependencia,strCiEquipo,strNombreEquipo,strActividadEquipo]);

        res.json({
            message: 'Miembro Agregado',
            body:{
                miembro:{id,intIdDependencia,strCiEquipo,strNombreEquipo,strActividadEquipo}
            }
        })

    }catch(error){
       res.status(500).send({success:false,message: error.message});
        console.error(`Se produjo un error en la línea ${error.stack}`);
    }
    
}

const getEqInforme = async (req, res) =>{
    try{

        const id = req.params.id;
        const response = await con.query('select * from   smaconvenios.buscareqinforme($1)',[id]);
        
        res.status(200).send(response.rows);

    }catch(error){
        res.status(500).send({success:false,message: error.message});
        console.error(`Se produjo un error en la línea ${error.stack}`);
    }
}

const editEqInforme = async (req, res) =>{
    try{

        const id= req.params.id;//codigo informe
        const idci =req.params.idci;// ci miembro del equipo
        const {intIdDependencia,strCiEquipo,strNombreEquipo,strActividadEquipo} = req.body;
        const response = await con.query('CALL smaconvenios.modequipoinforme($1,$2,$3,$4,$5,$6)',[id,intIdDependencia,strCiEquipo,strNombreEquipo,strActividadEquipo,idci]);

        console.log(response);
        res.json({message: 'miembro actualizado'})

    }catch(error){
        res.status(500).send({success:false,message: error.message});
        console.error(`Se produjo un error en la línea ${error.stack}`);
    }
}

const delEqInforme = async (req,res) => {
    try{
        const id = req.params.id;//codigo informe
        const idci= req.params.idci;// ci miembro equipo

        const response = await con.query('CALL smaconvenios.delequipoinforme($1,$2)',[id,idci])
        console.log(response);
        res.json({message: 'miembro eliminado'});
    }catch(error){

    }
}

module.exports ={
    addEqInforme,
    getEqInforme,
    editEqInforme,
    delEqInforme
}