const moment = require('moment');
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
}


  