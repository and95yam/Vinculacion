const moment = require('moment');

const fechaInicio = '2023-07-01';
const diasPorPeriodo = 90;

const periodos = calcularPeriodos(fechaInicio, diasPorPeriodo);

console.log(periodos);




function calcularPeriodos(fechaInicio, diasPorPeriodo) {
  const periodos = [];
  let fechaActual = moment(fechaInicio);

  while (true) {
    const periodo = {
      inicio: fechaActual.format('YYYY-MM-DD'),
      fin: fechaActual.add(diasPorPeriodo - 1, 'days').format('YYYY-MM-DD'),
    };
    periodos.push(periodo);
    fechaActual = fechaActual.add(1, 'days');

    // Si la fecha final del periodo supera la fecha actual, detén el bucle
    if (fechaActual.isAfter(moment())) {
      break;
    }
  }

  return periodos;
}

