const { addMonths, format, isBefore, isEqual, parseISO } = require('date-fns');
const { es } = require('date-fns/locale');

function calcularFechaSiguiente(fechaInicio, meses, fechaFin) {
  console.log('entra funcion');
  console.log(fechaInicio);
  console.log(meses);
  console.log(fechaFin);

  const fechaInicioObj = new Date(fechaInicio);
  let fechaSiguiente = addMonths(fechaInicioObj, meses);

  // Compara la fecha siguiente con la fecha fin
  const fechaFinObj = new Date(fechaFin);
  console.log(fechaInicioObj);
  console.log(fechaSiguiente);
  console.log(fechaFinObj);

  if (isBefore(fechaSiguiente, fechaFinObj) || isEqual(fechaSiguiente, fechaFinObj)) {
    const fechaSiguienteFormateada = format(fechaSiguiente, 'yyyy-MM-dd', { locale: es });

    console.log(fechaSiguienteFormateada);
    return fechaSiguienteFormateada;
  }
  console.log('sale');
  return null; // Devuelve null para indicar que no hay más fechas
}

module.exports = {
  calcularFechaSiguiente: calcularFechaSiguiente,
};

const dtfechainicioconvenio='2023-01-15'
const dtfechafinconvenio ='2025-01-15'
const intrazonconvenio=6

let  fechaActual = dtfechainicioconvenio;
let objfecha1 = new Date(dtfechainicioconvenio);// cadena 1 para obtener periodo de planificacion 
let aux=1;
let aux2=1

        
        while(fechaActual!==null){
           /* if(aux%2==0){
              aux2=0
              aux=1
            }else{aux2=1
             aux=0}*/
            const strperiodo =calcularFechaSiguiente(fechaActual, ((intrazonconvenio)-1), dtfechafinconvenio);
            console.log('entrada bucle');
            console.log(strperiodo)
            
            
            
            if(strperiodo!==null){
                console.log('entrada 2');
                const objfecha= new Date(strperiodo);
                const datoperiodo = format(objfecha,'yyyy-MM');
                fecha1 = new Date(fechaActual);// se actualiza la cadena  
                let fecha2 = format(fecha1,'yyyy-MM');// se formatea la cadena 1
                const periodo = fecha2+' a '+datoperiodo;// se concatena 
                console.log('_________________')   
                console.log('periodo: '+periodo)
                console.log('_________________')
               // console.log('id convenio: '+stridconvenio)
                //const responsePlanificacion = await con.query('CALL smaconvenios.addplanificacion($1,$2)',[periodo,stridconvenio]);

                fechaActual=strperiodo;

                console.log(periodo);
               

               
            }else{
                console.log('saliendo');
                break;
            }
        }