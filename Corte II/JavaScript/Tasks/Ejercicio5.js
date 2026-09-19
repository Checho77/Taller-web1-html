import { setTitle } from "../Modules/utils/functions.js";

/**
 * TODO: EJERCICIO 5 - Filtrar Empleados
 */
setTitle("EJERCICIO 5 - FILTRAR EMPLEADOS");
const empleados = [
    { nombre: "Ana", salario: 3000 },
    { nombre: "Luis", salario: 5000 },
    { nombre: "Pedro", salario: 2500 },
    { nombre: "Sara", salario: 7000 }
];

const empleadosBienPagados = empleados.filter(empleado => empleado.salario >= 4000);
console.log(empleadosBienPagados);