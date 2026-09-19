import { setTitle } from "../Modules/utils/functions.js";

/**
 * TODO: EJERCICIO 7 - Catálogo de Libros
 */
setTitle("EJERCICIO 7 - CATALOGO DE LIBROS");
const libros = [
    { id: 1, titulo: "JavaScript", disponible: true },
    { id: 2, titulo: "Python", disponible: false },
    { id: 3, titulo: "Java", disponible: true }
];

const libroId2 = libros.find(libro => libro.id === 2);
const librosDisponibles = libros.filter(libro => libro.disponible);
const titulosLibros = libros.map(libro => libro.titulo);

console.log(libroId2);
console.log(librosDisponibles);
console.log(titulosLibros);