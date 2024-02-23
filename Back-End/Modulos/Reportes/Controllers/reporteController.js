const rutasFunciones = require('../../../rutas/rutas-funciones');
const con = require(rutasFunciones.conexion);
const PDF = require('pdfkit');
const fs= require('fs');
const { resolve } = require('path');

const reporteConvenio = async(data)=>{
    return new Promise((resolve,reject)=>{
        const doc = new PFDDocument();
        doc.pipe(fs.createWriteStream('output.pdf'));

        doc.fontSize(16).text('Reporte',{align:'center'});
        doc.moveDown();

        data.foreach((item)=>{
            doc.text(`${item.strtituloconvenio}-${item.stridcoordinador}`);
        });

        doc.end();

        resolve();
    });
        
}

const getDatosConvenio = async (req,res)=>{
    try{
        const datos = await con.query('select * from smaconvenios.getconvenio()');
        
        //Generar PDF
        await generatePDF(datos.rows);

        //leer archivo y convertirlo en base64
        const fileContent = fs.readFileSync('output.pdf');
        const base64File = fileContent.toString('base64');

        //Eliminar archivo
        fs.unlinkSync('output.pdf');
        
        res.status(200).json({success:true, file: base64File});
        
    }catch(error){
        res.status(500).send({ success: false, message: error.message });
    }
};


module.exports = {
    reporteConvenio,
    getDatosConvenio
}