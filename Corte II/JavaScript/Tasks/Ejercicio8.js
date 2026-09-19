import { setTitle } from "../Modules/utils/functions.js";

/**
 * TODO: EJERCICIO 8 - Copias y Referencias
 */
setTitle("EJERCICIO 8 - COPIAS Y REFERENCIAS");
const usuario = {
    nombre: "Carlos",
    edad: 30
};

const usuarioCopiaReferencia = usuario;
usuarioCopiaReferencia.nombre = "Andrés";
console.log(usuario.nombre);
console.log(usuarioCopiaReferencia.nombre);

const usuarioCopiaSpread = { ...usuario };
usuarioCopiaSpread.nombre = "Mateo";
console.log(usuario.nombre);
console.log(usuarioCopiaSpread.nombre);

/**
 * Diferencia: con "=" se copia la referencia, así que modificar la copia
 * también modifica el original. Con Spread ("...") se crea un objeto nuevo
 * e independiente, así que modificar la copia NO afecta al original.
 */