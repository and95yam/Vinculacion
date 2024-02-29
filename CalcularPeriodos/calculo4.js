const moment = require('moment');
const { format,setMonth } = require('date-fns');
const { es } = require('date-fns/locale');

/*function dividirFechas(fechaInicio, fechaFin, numeroMeses) {
    const inicio = moment(fechaInicio);
    const fin = moment(fechaFin);

    const duracionTotalMeses = fin.diff(inicio, 'months') + 1; // Sumamos 1 para incluir también el primer mes
    const duracionSegmentoMeses = Math.floor(duracionTotalMeses / numeroMeses);

    const fechasDivididas = [];
    let fechaActual = inicio.clone();

    while (fechaActual.isBefore(fin)) {
        const siguienteFecha = fechaActual.clone().add(duracionSegmentoMeses, 'months').subtract(1, 'days');
        if (siguienteFecha.isAfter(fin)) {
            fechasDivididas.push({ inicio: fechaActual.format('YYYY-MM-DD'), fin: fin.format('YYYY-MM-DD') });
            
            break;
        } else {
            fechasDivididas.push({ inicio: fechaActual.format('YYYY-MM-DD'), fin: siguienteFecha.format('YYYY-MM-DD') });
            fechaActual = siguienteFecha.add(1, 'days');
        }
    }

    return fechasDivididas;
}*/


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

// Ejemplo de uso
const fechaInicio = '2024-02-29';
const fechaFin = '2029-02-27';
const numeroMeses = 12;

/*const fechasDivididas = dividirFechas(fechaInicio, fechaFin, numeroMeses);
console.log('Fechas divididas:');
fechasDivididas.forEach((segmento, index) => {
    console.log(segmento.inicio,'hasta',segmento.fin)
    console.log()
    //console.log(Segmento ${index + 1}: Desde ${segmento.inicio} hasta ${segmento.fin});
});*/

//const dtfechainicioconvenio =fechaInicio
//const dtfechafinconvenio= fechaFin
//const intrazonconvenio =numeroMeses


const fechasDivididas = dividirFechas(fechaInicio, fechaFin, numeroMeses);
console.log(fechasDivididas)
        console.log('Fechas divididas :');
        fechasDivididas.forEach(async (segmento, index) => {
                //console.log(segmento.inicio,' hasta ',segmento.fin)
                let periodo=(segmento.inicio+'_'+segmento.fin)
                let descripcion=(format(segmento.inicio, "MMMM-d-yyyy", { locale: es })+' hasta '+format(segmento.fin,"MMMM-d-yyyy",{ locale: es }));
                console.log('descripcion',descripcion)
                console.log('periodo',periodo)
                ///const responsePlanificacion = await con.query('CALL smaconvenios.addplanificacion($1,$2)',[periodo,stridconvenio]);
                
        });