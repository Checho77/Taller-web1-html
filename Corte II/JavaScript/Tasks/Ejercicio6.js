import { setTitle } from "../Modules/utils/functions.js";

/**
 * TODO: EJERCICIO 6 - Estadísticas de Ventas
 */
setTitle("EJERCICIO 6 - ESTADISTICAS DE VENTAS");
const ventas = [250, 400, 150, 600, 800];

const totalVendido = ventas.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
const ventaMasAlta = Math.max(...ventas);
const promedioVentas = totalVendido / ventas.length;

console.log(`Total vendido: ${totalVendido}`);
console.log(`Venta más alta: ${ventaMasAlta}`);
console.log(`Promedio de ventas: ${promedioVentas}`);