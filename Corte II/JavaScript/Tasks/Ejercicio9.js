import { setTitle } from "../Modules/utils/functions.js";

/**
 * TODO: EJERCICIO 9 - Desestructuración
 */
setTitle("EJERCICIO 9 - DESESTRUCTURACION");
const computador = {
    marca: "Lenovo",
    procesador: "Intel i7",
    ram: 16,
    almacenamiento: 512
};

const {
    marca,
    ram,
    almacenamiento: ssd,
    tarjetaGrafica = "Integrada"
} = computador;

console.log(marca);
console.log(ram);
console.log(ssd);
console.log(tarjetaGrafica);