/*const { addDays, format, isBefore, isEqual, parseISO } = require('date-fns');
const { es } = require('date-fns/locale');

function calcularFechaSiguiente(fechaInicio, dias, fechaFin) {
  console.log('entra funcion')
  console.log(fechaInicio)
  console.log(dias)
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
*/

const moment = require('moment');

function dividirFechas(fechaInicio, fechaFin, numeroMeses) {
  const inicio = moment(fechaInicio);
  const fin = moment(fechaFin);

  const duracionTotalMeses = fin.diff(inicio, 'months', true) + 1; // Sumamos 1 para incluir también el primer mes
  const duracionSegmentoMeses = numeroMeses;

  const fechasDivididas = [];
  let fechaActual = inicio.clone();

  while (fechaActual.isBefore(fin)) {
      let siguienteFecha = fechaActual.clone().add(duracionSegmentoMeses, 'months').subtract(1, 'days');
      if (siguienteFecha.isAfter(fin)) {
          fechasDivididas.push({ inicio: fechaActual.format('YYYY-MM-DD'), fin: fin.format('YYYY-MM-DD') });
          break;
      } else {
          fechasDivididas.push({ inicio: fechaActual.format('YYYY-MM-DD'), fin: siguienteFecha.format('YYYY-MM-DD') });
          fechaActual = siguienteFecha.add(1, 'days');

          // Si cambiamos de año, ajustamos la siguiente fecha para que sea el último día del mes correcto
          if (fechaActual.year() !== siguienteFecha.year()) {
              siguienteFecha = fechaActual.clone().endOf('month');
          }
      }
  }

  return fechasDivididas;
}

module.exports = {
  dividirFechas:dividirFechas
}

