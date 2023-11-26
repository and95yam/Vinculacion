const { addDays, format, isBefore, isEqual, parseISO } = require('date-fns');
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