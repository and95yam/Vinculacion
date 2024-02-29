/*const moment = require('moment');
//npm install moment

const fechaInicio = '2012-03-05';
const fechaFin = '2013-03-05';
const mesesPorPeriodo = 6;

const periodos = calcularPeriodos(fechaInicio, fechaFin, mesesPorPeriodo);

console.log(periodos);

function calcularPeriodos(fechaInicio, fechaFin, mesesPorPeriodo) {
  const periodos = [];
  let fechaActual = moment(fechaInicio);
  const fechaFinMoment = moment(fechaFin);

  while (fechaActual.isSameOrBefore(fechaFinMoment)) {
    const periodo = {
      inicio: fechaActual.format('YYYY-MM-DD'),
      fin: fechaActual.add(mesesPorPeriodo, 'months').subtract(1, 'days').format('YYYY-MM-DD'),
    };
    if(fechaFinMoment >= fechaActual){
      periodos.push(periodo);
      fechaActual = fechaActual.add(1, 'days');
    }
    
  }

  return periodos;
}*/

const moment = require('moment');
moment.locale('es'); // Establecer el idioma en español

const { addDays, format, isBefore, isEqual, parseISO } = require('date-fns');
const { es } = require('date-fns/locale');

function calcularFechaSiguiente(fechaInicio, meses, fechaFin) {
  console.log('entra funcion')
  console.log(fechaInicio)
  console.log(meses)
  console.log(fechaFin)

  const fechaInicioObj = new Date(fechaInicio);
  let fechaSiguiente = addDays(fechaInicioObj, dias);

  
  // Compara la fecha siguiente con la fecha fin
  const fechaFinObj = new Date(fechaFin);
  console.log(fechaInicioObj)
  console.log(fechaSiguiente)
  console.log(fechaFinObj)


  if (isBefore(fechaSiguiente, fechaFinObj) || isEqual(fechaSiguiente, fechaFinObj)) {
    const fechaSiguienteFormateada = format(fechaSiguiente, 'yyyy-MM-dd', { locale: es });

    console.log(fechaSiguienteFormateada)
    return fechaSiguienteFormateada;
  }
  console.log('sale');
  return null; // Devuelve null para indicar que no hay más fechas
}

module.exports = {
    calcularFechaSiguiente: calcularFechaSiguiente
}


  