const moment = require('moment');
moment.locale('es'); // Establecer el idioma en español

function calcularFechaSiguiente(fechaInicio, razonMeses, fechaFin) {
    const fecha = moment(fechaInicio);
    const fechaFinMoment = moment(fechaFin, 'YYYY-MM-DD');

    if (fecha.isSameOrAfter(fechaFinMoment)) {
        return null;
        console.log('nulo si es ')
    }

    const fechaSiguiente = fecha.clone().add(razonMeses, 'months');

    if (fechaSiguiente.isBefore(fechaFinMoment)) {
        return `${fecha.format('MMMM YYYY')}--${fechaSiguiente.format('MMMM YYYY')}`;
    } else {
        return `${fecha.format('MMMM YYYY')}--${fechaFinMoment.format('MMMM YYYY')}`;
    }
}

const fechaInicio = '2023-01-15';
const razonMeses = 6-1;
const fechaFin = '2023-12-31';

let fechaActual = fechaInicio
let objfecha1 = new Date(fechaFin)

while(fechaActual!==null){
    const strperiodo =calcularFechaSiguiente(fechaActual,razonMeses,fechaFin)
    console.log('entra al bucle')
    console.log(strperiodo)

    if(strperiodo!==null){
        console.log('entra al if')
        const objfecha = strperiodo.split('--')[1]
        console.log('objfecha',objfecha)

    }
}

