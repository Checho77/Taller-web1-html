import { setTitle } from "../Modules/utils/functions.js";

/**
 * TODO: EJERCICIO 3 - Gestión de Producto
 */
setTitle("EJERCICIO 3 - GESTION DE PRODUCTO");
const productos = ["Laptop", "Mouse", "Teclado"];

productos.push("Monitor");
productos.unshift("Audífonos");
productos.pop();

console.log(productos);