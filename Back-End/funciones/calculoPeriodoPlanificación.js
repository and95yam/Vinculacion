const { addDays, format, isBefore, isEqual, parseISO } = require('date-fns');
const { es } = require('date-fns/locale');

function calcularFechaSiguiente(fechaInicio, dias, fechaFin) {
  const fechaInicioObj = new Date(fechaInicio);
  let fechaSiguiente = addDays(fechaInicioObj, dias);

  // Compara la fecha siguiente con la fecha fin
  const fechaFinObj = new Date(fechaFin);
  if (isBefore(fechaSiguiente, fechaFinObj) || isEqual(fechaSiguiente, fechaFinObj)) {
    const fechaSiguienteFormateada = format(fechaSiguiente, 'yyyy-MM-dd', { locale: es });
    return fechaSiguienteFormateada;
  }
  console.log('sale');
  return null; // Devuelve null para indicar que no hay más fechas
}

module.exports = {
    calcularFechaSiguiente: calcularFechaSiguiente
}