import { setTitle } from "../Modules/utils/functions.js";

/**
 * TODO: EJERCICIO 4 - Inventario de Estudiantes
 */
setTitle("EJERCICIO 4 - INVENTARIO DE ESTUDIANTES");
const estudiante = {
    nombre: "Laura",
    edad: 20,
    carrera: "Ingeniería",
    materias: [
        "Matemáticas",
        "Programación"
    ]
};

estudiante.edad = 21;
estudiante.materias.push("Bases de Datos");

console.log(Object.entries(estudiante));