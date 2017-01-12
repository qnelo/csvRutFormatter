const csv = require('csv-parser');
const fs = require('fs');
const debug = require('util').debuglog('csv');
const rutClass = require('./rut-class');


/**
 * Clase rut, formatea ruts sin puntos ni guiones
 */
class csvClass {
    /**
     * @constructor
     * @param {String} file - arreglo de ruts
     */
    constructor(file) {
        this.file = file;
    }


    /**
     * formatea el rut
     * @param {Callback} cb callback
     * @returns {Array} csvArray
     * @memberOf csvClass
     */
    getArray(cb) {

        let csvArray = [];
        let formatedRut = '';
        let rut = new rutClass();
        let wstream = fs.createWriteStream('salida.csv');
        wstream.write('RUT,NOMBRE_O_RAZON_SOCIAL,TRAMO,ACTECO,CALLE,NUMERO,BLOQUE,DEPTO,VILLA_POBLACION,COMUNA,REGION,Nombre_gerenta,Telefono,\n');

        fs.createReadStream(this.file)
            .pipe(csv())
            .on('data', function (data) {

                formatedRut = rut.format(data.RUT + data.DV);
                csvArray.push(formatedRut);
                wstream.write(`${formatedRut},${data.NOMBRE_O_RAZON_SOCIAL},${data.TRAMO},${data.ACTECO},${data.CALLE},${data.NUMERO},${data.BLOQUE},${data.DEPTO},${data.VILLA_POBLACION},${data.COMUNA},${data.REGION},${data.Nombre_gerenta},${data.Telefono}\n`);
            })
            .on('end', function () {
                wstream.end();
                cb(csvArray);
            });
    }

}

module.exports = csvClass;