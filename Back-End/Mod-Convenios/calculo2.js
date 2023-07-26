const moment = require('moment');
//npm install moment

const fechaInicio = '2023-07-01';
const fechaFin = '2023-07-31';
const diasPorPeriodo = 10;

const periodos = calcularPeriodos(fechaInicio, fechaFin, diasPorPeriodo);

console.log(periodos);

function calcularPeriodos(fechaInicio, fechaFin, diasPeriodo) {
    const periodos = [];
    let fechaActual = moment(fechaInicio);
    const fechaFinMoment = moment(fechaFin);
  
    while (fechaActual.isSameOrBefore(fechaFinMoment)) {
      const periodo = {
        inicio: fechaActual.format('YYYY-MM-DD'),
        fin: fechaActual.add(diasPeriodo - 1, 'days').format('YYYY-MM-DD'),
      };
      periodos.push(periodo);
      fechaActual = fechaActual.add(1, 'days');
    }
  
    return periodos;
  }

  