class NumberConverter {

    constructor() {

    }

    /**
     * Converte um número decimal para binario
     * @param {*} decimalNumber 
     */
    toBin(decimalNumber) {
        return this._baseConverter(decimalNumber, 2);
    }

    /**
     * Converte um número decimal para hexadecimal
     * @param {*} decimalNumber 
     */
    toHex(decimalNumber) {
        return this._baseConverter(decimalNumber, 16);
    }

    /**
     * Converte um número decimal para octal
     * @param {*} decimalNumber 
     */
    toOct(decimalNumber) {
        return this._baseConverter(decimalNumber, 8);
    }

    /**
     * Método usado para mudança de base numérica
     * @param {*} decimalNumber 
     * @param {*} base 
     */
    _baseConverter(decimalNumber, base) {

        var stack = new Stack();
        var mod = null;
        var strNumber = '';
        var digitos = '0123456789ABCDEF';

        while (decimalNumber > 0) {
            mod = Math.floor(decimalNumber % base);
            stack.push(mod);
            decimalNumber = Math.floor(decimalNumber / base);
        }

        while (!stack.isEmpty()) {
            strNumber += digitos[stack.pop()];
        }

        return strNumber;

    }

}