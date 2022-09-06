
function calcularHipotenusa(ladoA, ladoB) {
    if (typeof ladoA != 'number' || typeof ladoB != 'number') {
        return null;
    }

    return Math.sqrt(Math.pow(ladoA, 2) + Math.pow(ladoB, 2));
}

console.log(calcularHipotenusa(4, 3));  

console.log(calcularHipotenusa(7, 11));  