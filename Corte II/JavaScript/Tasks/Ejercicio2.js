import { setTitle } from "../Modules/utils/functions.js";

/**
 * TODO: EJERCICIO 2 - Tabla de Multiplicar
 * Crea una función llamada tablaMultiplicar.
 * Debe recibir 2 numeros:
 *  - El primero es el numero de la tabla de multiplicar
 *  - El segundo es la cantidad de operaciones a realizar
 * Debe imprimir la tabla de multiplicar solicitada
 * Ejemplo: 2 y 15 -> Tabla de Multiplicar del 2 al 15
 */
setTitle("EJERCICIO 2 - TABLA DE MULTIPLICAR");
function tablaMultiplicar(numero, cantidad) {
    for (let i = 1; i <= cantidad; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

tablaMultiplicar(2, 15);