import { setTitle } from "../Modules/utils/functions.js";

/**
 * TODO: EJERCICIO 1 - Calculadora Básica
 * Crea una función llamada calculadora que reciba dos números y un operador (+, -, *, /).
 * La función debe retornar el resultado de la operación
 * Debe imprimir un ejemplo con cada operador
 * Tener en cuenta la division por 0
 * Ejemplo: calculadora(10, 5, "+"); -> Resultado esperado: 15 
 */
setTitle("EJERCICIO 1 - CALCULADORA BASICA");
function calculadora(numero1, numero2, operador) {
    switch (operador) {
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2;
        case "*":
            return numero1 * numero2;
        case "/":
            if (numero2 === 0) {
                return "Error: No se puede dividir entre 0";
            }
            return numero1 / numero2;
        default:
            return "Operador no válido";
    }
}

console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 5, "*"));
console.log(calculadora(10, 5, "/"));
console.log(calculadora(10, 0, "/"));