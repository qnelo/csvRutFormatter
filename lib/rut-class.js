const RutJS = require('rutjs');

/**
 * Clase rut, formatea ruts sin puntos ni guiones
 */
class rutClass  {
    /**
     * @constructor
     * @param {Array} arrayOfRuts - arreglo de ruts
     */
    constructor(arrayOfRuts) {
        this.rutFormatted = new RutJS('1');
        this.arrayOfRut = arrayOfRuts;
    }

    /**
     * formatea el rut
     * @param {String} rut - rut
     * @returns {String} rut formateado
     */
    format(rut) {
        this.rutFormatted.setRut(rut);
        return this.rutFormatted.getNiceRut();
    }

    /**
     * formatea el arreglo de ruts
     * @returns {Array} arreglo de ruts formateados
     */
    formattedArray() {
        let formatted = [];
        for (let index = 0; index < this.arrayOfRut.length; index++) {
            formatted.push(this.format(this.arrayOfRut[index]));
        }
        return formatted;
    }
}

module.exports = rutClass;