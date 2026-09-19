import { setTitle } from "../Modules/utils/functions.js";

/**
 * TODO: EJERCICIO 10 - Sistema de Gestión de Estudiantes
 */
setTitle("EJERCICIO 10 - SISTEMA DE GESTION DE ESTUDIANTES");
const estudiantes2 = [
    { id: 1, nombre: "Ana", nota: 4.5, edad: 20 },
    { id: 2, nombre: "Luis", nota: 3.8, edad: 18 },
    { id: 3, nombre: "Carlos", nota: 4.9, edad: 22 },
    { id: 4, nombre: "Laura", nota: 2.9, edad: 19 }
];

const estudiantesAprobados = estudiantes2.filter(estudiante => estudiante.nota >= 3.0);
console.log(estudiantesAprobados);

const estudiantesMayoresEdad = estudiantes2.filter(estudiante => estudiante.edad >= 18);
console.log(estudiantesMayoresEdad);

const nombresEstudiantes = estudiantes2.map(estudiante => estudiante.nombre);
console.log(nombresEstudiantes);

const estudianteId3 = estudiantes2.find(estudiante => estudiante.id === 3);
console.log(estudianteId3);

const promedioNotas = estudiantes2.reduce((acumulador, estudiante) => acumulador + estudiante.nota, 0) / estudiantes2.length;
console.log(promedioNotas);

const estudianteNotaMasAlta = estudiantes2.reduce((mejor, actual) =>
    actual.nota > mejor.nota ? actual : mejor
);
console.log(estudianteNotaMasAlta);

const estudiantesConEstado = estudiantes2.map(estudiante => ({
    ...estudiante,
    estado: estudiante.nota >= 3.0 ? "Aprobó" : "Reprobó"
}));
console.log(estudiantesConEstado);

const copiaEstudiantes = [...estudiantes2];
console.log(copiaEstudiantes);