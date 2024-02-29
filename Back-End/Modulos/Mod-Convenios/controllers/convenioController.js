const {format, setMonth,parseISO} = require('date-fns');
const {dividirFechas} = require('../../../funciones/calculoPeriodoPlanificación.js');
const { es } = require('date-fns/locale');


const rutasFunciones = require('../../../rutas/rutas-funciones')
const con = require(rutasFunciones.conexion);



const addConvenio = async(req,res)=>{// INGRESA EL CONVENIO COMPLETO MAS LA PLANIFICACION 

    try{
        console.log('convenio');
        const{stridconvenio,strcicoordinador,strtituloconvenio,strnaturalezaconvenio,strclasificacionconvenio,strobjetivoconvenio,dtfechainicioconvenio,dtfechafinconvenio,intrazonconvenio,fltavanceconvenio,strarchivoconvenio,//tabla convenios
             intiddependencia,//tabla Convenio-Dependencia
             intidinstitucion,//tablaconvenio-Institucion   
             blnacademico,blninvestigacion,blnpracticas,blnvinculacion//Tabla
            }=req.body;//tabla Ejes 
        
        //Ingreso tabla convenio      
        const responseConvenio= await con.query('CALL smaconvenios.addconvenio($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)'//Lamado procedimiento
        ,[stridconvenio,strcicoordinador,strtituloconvenio,strnaturalezaconvenio,strclasificacionconvenio,strobjetivoconvenio,dtfechainicioconvenio,dtfechafinconvenio,intrazonconvenio,fltavanceconvenio,strarchivoconvenio]);//Datos 
        
        //Ingreso Tabla Convenio_dependencia
        const responseConvenioDependencia = await con.query('CALL smaconvenios.addconvenio_dependencia($1,$2)',[intiddependencia,stridconvenio]);
           
        //Ingreso Tabla convenio-Institucion
        const responseConvenioInstitucion = await con.query('CALL smaconvenios.addconvenio_institucion($1,$2)',[intidinstitucion,stridconvenio]);

        //Ingreso Tabla Ejes 
        const responseEjes = await con.query('CALL smaconvenios.addejes($1,$2,$3,$4,$5)',[stridconvenio,blnacademico,blninvestigacion,blnpracticas,blnvinculacion]);
        
        /*fechainicio= new Date(dtfechainicioconvenio)
        fechaFin= new Date(dtfechafinconvenio)
        console.log(dtfechainicioconvenio)
        console.log(dtfechafinconvenio)
        console.log('---------------')
        console.log(fechainicio)
        console.log(fechaFin)*/
        
        const fechasDivididas = dividirFechas(dtfechainicioconvenio, dtfechafinconvenio, intrazonconvenio);
        console.log('Fechas divididas :');
        console.log(fechasDivididas)
        fechasDivididas.forEach(async (segmento, index) => {
            let inicio = parseISO(segmento.inicio)
            let fin = parseISO(segmento.fin)
            let periodo=(segmento.inicio+'_'+segmento.fin)
            let descripcion=(format(inicio, "MMMM-d-yyyy", { locale: es })+' hasta '+format(fin,"MMMM-d-yyyy",{ locale: es }));
            //let descripcion=(segmento.inicio+' hasta '+segmento.fin)
            //console.log('descripcion',descripcion)
            console.log('periodo',periodo)
             const responsePlanificacion = await con.query('CALL smaconvenios.addplanificacion($1,$2,$3)',[periodo,stridconvenio,descripcion]);
                
        });
        
        

        res.json({
            message: 'convenio ingresado',
            body:{
                convenio:{stridconvenio,strcicoordinador,strtituloconvenio,strnaturalezaconvenio,strclasificacionconvenio,strobjetivoconvenio,dtfechainicioconvenio,dtfechafinconvenio,intrazonconvenio,strarchivoconvenio},
                conveniodependencia:{intiddependencia,stridconvenio},
                convenioinstitucion:{intidinstitucion,stridconvenio},
                ejes:{stridconvenio,blnacademico,blninvestigacion,blnpracticas,blnvinculacion}//,
                //planificacion:{datoperiodo,stridconvenio}
            }
        })

    }catch(error){
        res.status(500).send({success:false, message:error.message});
        console.error(`Se produjo un error en la línea ${error.stack}`);
    }

}

const getConvenio = async(req,res)=>{//SE UTILIZA PARA VER CONVENIOS ACTUALMENTE 
    try{
        
        const response = await con.query('SELECT * FROM smaconvenios.getconvenio()');
       // const response = await con.query('SELECT * From smaconvenios.VerTablaDatosConvenioAnalistaVinculacion()');
       const vig = response.rows;

        vig.forEach(item => {
            if (item.strvigencia && item.dtfechainicioconvenio) {
              if (typeof item.strvigencia === 'object' && item.strvigencia.years !== undefined) {
                item.strvigencia = item.strvigencia.years;
              }
      
             // if (typeof item.c_dtfechainicioconvenio === 'string') {
                const fechaInicioOriginal = new Date(item.dtfechainicioconvenio);
                const fechaFinOriginal = new Date(item.dtfechafinconvenio);
                item.dtfechainicioconvenio = fechaInicioOriginal//.toLocaleDateString('es-ES').replace(/\//g, '-');
                item.dtfechafinconvenio = fechaFinOriginal//.toLocaleDateString('es-ES').replace(/\//g, '-');
               /* item.dtfechainicioconvenio = fechaInicioOriginal.toLocaleDateString('es-ES');
                item.dtfechafinconvenio = fechaFinOriginal.toLocaleDateString('es-ES');*/
              //}
            }
          });
       
          res.status(200).json(vig);

    }catch(error){
        res.status(500).send({success:false, message:error.message});
    }    
   
}

const buscConvenio = async(req,res)=>{// Muestra todos los datos de un convenio en especifico 
    try{
        const id= req.params.id;
        const response = await con.query('SELECT * FROM smaconvenios.VerDatosConvenio($1)',[id])

        res.json(response.rows);
    
    }catch(error){
        res.status(500).send({success:false, message:error.message});
    }
}

const verTablaConvenios = async (req, res) => {
  try {
    const response = await con.query('SELECT * FROM smaconvenios.VerTablaDatosConvenioAnalistaVinculacion()');
    const vig = response.rows;

    vig.forEach(item => {
      if (item.c_strvigencia && item.c_dtfechainicioconvenio) {
        if (typeof item.c_strvigencia === 'object' && item.c_strvigencia.years !== undefined) {
          item.c_strvigencia = item.c_strvigencia.years;
        }

       // if (typeof item.c_dtfechainicioconvenio === 'string') {
          const fechaOriginal = new Date(item.c_dtfechainicioconvenio);
          item.c_dtfechainicioconvenio = fechaOriginal.toLocaleDateString('es-ES').replace(/\//g, '-'); // Puedes cambiar 'es-ES' a tu idioma preferido
        //}
      }
    });

    res.status(200).json(vig);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
}

  
  

const verConveniosCoordinador = async(req,res)=>{
    try{
            const id = req.params.id;
            const response = await con.query('SELECT * FROM smaconvenios.BuscarConvenioCordinador($1)',[id]);
            const vig= response.rows; 

            vig.forEach(item=>{
                if(item.c_strvigencia && item.c_dtfechainicioconvenio){
                    if(typeof item.c_strvigencia == 'object' && item.c_strvigencia.years !== undefined){
                        item.c_strvigencia =item.c_strvigencia.years;
                    }

                    const fechaInicioOriginal2 = new Date (item.c_dtfechainicioconvenio);
                    const fechaFinOriginal2= new Date (item.c_dtfechafinconvenio);
                    item.c_dtfechainicioconvenio = fechaInicioOriginal2//.toLocaleDateString('es-ES').replace(/\//g, '-');
                    item.c_dtfechafinconvenio = fechaFinOriginal2//.toLocaleDateString('es-ES').replace(/\//g, '-');
                } 
            });

            res.status(200).json(vig);

              

    }catch(error){
        res.status(500).send({success:false, message:error.message});
    }
}

const verConveniosInforme = async(req,res)=>{
    try{
        const id = req.params.id;
        const response = await con.query('select * from smaconvenios.GetConvenioParaInforme($1)',[id]);
        
        const vig= response.rows; 

            vig.forEach(item=>{

                

                    const fechaInicioOriginal2 = new Date (item.dtfechainicioconvenio);
                    const fechaFinOriginal2= new Date (item.dtfechafinconvenio);
                    item.dtfechainicioconvenio = fechaInicioOriginal2.toLocaleDateString('es-ES').replace(/\//g, '-');
                    item.dtfechafinconvenio = fechaFinOriginal2.toLocaleDateString('es-ES').replace(/\//g, '-');
                
            });

            res.status(200).json(vig);
          

}catch(error){
    res.status(500).send({success:false, message:error.message});
}
}

const verConveniosInvitado= async(req,res)=>{

    try{
        response = await con.query('SELECT * FROM smaconvenios.VerTablaDatosConveniosInvitado()');

        const vig= response.rows; 

            vig.forEach(item=>{
                if(item.c_strvigencia && item.c_dtfechainicioconvenio){
                    if(typeof item.c_strvigencia == 'object' && item.c_strvigencia.years !== undefined){
                        item.c_strvigencia =item.c_strvigencia.years;
                    }

                    const fechaInicioOriginal2 = new Date (item.c_dtfechainicioconvenio);
                    const fechaFinOriginal2= new Date (item.c_dtfechafinconvenio);
                    item.c_dtfechainicioconvenio = fechaInicioOriginal2//.toLocaleDateString('es-ES').replace(/\//g, '-');
                    item.c_dtfechafinconvenio = fechaFinOriginal2//.toLocaleDateString('es-ES').replace(/\//g, '-');
                } 
            });

            res.status(200).json(vig);
        

       // res.status(200).json(response.rows);

    }catch(error){
    res.status(500),send({success:false, message:error.message});
    }

}


const modConvenio = async( req, res )=>{
    try{
         id = req.params.id;
         console.log('modificar convenio');
         const{strcicoordinador,strtituloconvenio,strnaturalezaconvenio,strclasificacionconvenio,strobjetivoconvenio,strarchivoconvenio,//tabla convenios
             intiddependencia,//tabla Convenio-Dependencia
             intidinstitucion,//tablaconvenio-Institucion   
             blnacademico,blninvestigacion,blnpracticas,blnvinculacion//Tabla ejes
            }=req.body;
         
            //Modificar datos tabla convenio//
         const responseConvenio2 = await con.query('CALL smaconvenios.modConvenio($1,$2,$3,$4,$5,$6,$7)',
         [id,strcicoordinador,strtituloconvenio,strnaturalezaconvenio,strclasificacionconvenio,strobjetivoconvenio,strarchivoconvenio]);   
         
         console.log(responseConvenio2);
         

         

         //Obtener el codigo de la fila correspondiente en la tabla convenio_dependencia//
         const idcd = await con.query('SELECT * FROM smaconvenios.GetIdConvenioDependencia($1)',[id])
         const codConDep =idcd.rows 
         const dcCod = codConDep[0].c_intidc_d// si hay error revisar aqui 
         
         ;
        
         //Modificar datos tabla convenio_dependencia 
         const responsecd2 = await con.query('CALL smaconvenios.ModConvenio_dependencia($1,$2,$3)',[dcCod,intiddependencia,id]);
         console.log(responsecd2.rows);
        // res.json('convenio_dependencia{$dcCod} Actualizada');
        
         //Obtener el codigo de la fila correspondiente en la tabla convenio_institucion
         const idci = await con.query('select * from smaconvenios.GetIdConvenioInstitucion($1)',[id])
         const codConIns = idci.rows;
         const icCod = codConIns[0].c_intidc_i;// si hay error revisar aqui  

         //Modifficar datos tabla convenio_institucion

         const responsecid = await con.query('CALL smaconvenios.modconvenio_institucion($1,$2,$3)',[icCod,intidinstitucion,id]);
         console.log(responsecid.rows);
         //res.json('convenio_institucion {$icCod} Actualizado');
         
         //Modificar datos tabla ejes

         const responseEjes = await con.query('CALL smaconvenios.modejes($1,$2,$3,$4,$5)',[id,blnacademico,blninvestigacion,blnpracticas,blnvinculacion])
         console.log(responseEjes.rows);
         res.json('Convenio Actualizado');

         //res.json('ejes {$id} Actualizados');

        




    }catch(error){
        res.status(500).send({success:false, message:error.message});
        console.error(`Se produjo un error en la línea ${error.stack}`);
    }
}


    


module.exports = {
addConvenio,
getConvenio,
buscConvenio,
verTablaConvenios,
verConveniosCoordinador,
verConveniosInforme,
verConveniosInvitado,
modConvenio
}

