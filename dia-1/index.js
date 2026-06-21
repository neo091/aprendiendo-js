/*
Reto 1: Suma de elementos positivos

Enunciado: Crea una función llamada sumarPositivos que reciba un array de números (tanto positivos como negativos) y 
devuelva la suma total solo de los números que sean mayores que cero.

*/

function sumarPositivos(numeros) {
  // 1. Crea una variable acumuladora inicializada en 0
  let suma = 0;

  // 2. Recorre el array con un bucle (for clásico o for...of)
  for (let num of numeros) {
    // 3. Añade la condición 'if' para verificar si es positivo
    if (num > 0) {
      suma += num; // suma = suma + num;
    }
  }

  // 4. Devuelve el resultado final
  return suma;
}

// --- CASOS DE PRUEBA (Ejecuta esto para comprobar) ---
console.log("--- Test Reto 1 ---");
console.log(sumarPositivos([1, -4, 7, 12])); // Debería dar: 20 (1 + 7 + 12)
console.log(sumarPositivos([-1, -2, -3])); // Debería dar: 0
console.log(sumarPositivos([])); // Debería dar: 0

/*
Reto 2: Filtrado manual de objetos

Enunciado: Crea una función llamada obtenerUsuariosActivos que reciba un array de objetos "usuario". Cada usuario tiene un id, un name y un booleano active. La función debe devolver un nuevo array que contenga únicamente los objetos de los usuarios que tengan active: true.
*/

function obtenerUsuariosActivos(usuarios) {
  // 1. Crea un array vacío para almacenar los resultados
  const activos = [];

  // 2. Recorre el array de usuarios
  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];

    // 3. Comprueba si la propiedad 'active' es verdadera
    if (usuario.active === true) {
      // 4. Introduce el objeto en el array de resultados
      activos.push(usuario);
    }
  }

  // 5. Devuelve el nuevo array
  return activos;
}

// --- CASOS DE PRUEBA (Ejecuta esto para comprobar) ---
const listaUsuarios = [
  { id: 1, name: "Andrés", active: true },
  { id: 2, name: "Leticia", active: false },
  { id: 3, name: "Carlos", active: true },
  { id: 4, name: "Marta", active: false },
];

console.log("--- Test Reto 2 ---");
console.log(obtenerUsuariosActivos(listaUsuarios));
/* Debería mostrar un array con solo 2 elementos:
[
  { id: 1, name: 'Andrés', active: true },
  { id: 3, name: 'Carlos', active: true }
]
*/

/*
Reto 3: El contador de impares (Acumulación condicional)

Enunciado: Crea una función llamada contarImpares que reciba un array de números. La función debe devolver la cantidad (cuántos hay, no la suma) de números impares que contiene el array.

Pista: Recuerda el operador residuo %.
*/

function contarImpares(numeros) {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
console.log("--- Test Extra 1 ---");
console.log(contarImpares([1, 2, 3, 4, 5, 6, 7])); // Debería dar: 4 (1, 3, 5, 7)
console.log(contarImpares([2, 4, 6, 8])); // Debería dar: 0
console.log(contarImpares([-3, -2, 1])); // Debería dar: 2 (-3, 1)

/*
Reto 4: Filtrado por propiedad dinámica (Filtrado de objetos)

Enunciado: Crea una función llamada filtrarPorPrecio que reciba dos parámetros: un array de objetos productos (cada uno con nombre y precio) y un número precioMaximo. La función debe devolver un nuevo array solo con los productos cuyo precio sea menor o igual al precioMaximo.

*/

function filtrarPorPrecio(productos, precioMaximo) {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
const inventario = [
  { nombre: "Teclado", precio: 50 },
  { nombre: "Ratón", precio: 25 },
  { nombre: "Monitor", precio: 200 },
  { nombre: "Alfombrilla", precio: 15 },
];

console.log("\n--- Test Extra 2 ---");
console.log(filtrarPorPrecio(inventario, 30));
// Debería devolver: [ { nombre: 'Ratón', precio: 25 }, { nombre: 'Alfombrilla', precio: 15 } ]
console.log(filtrarPorPrecio(inventario, 10));
// Debería devolver: []

/*
Reto 5: El buscador de extremos (Mantener un estado de comparación)

Enunciado: Crea una función llamada encontrarMayor que reciba un array de números y devuelva el número más grande de todo el array. No uses Math.max(). Hazlo con un bucle comparando elemento a elemento.

Pista: Inicializa tu variable de control con el primer elemento del array (numeros[0]) y compárala con los demás en cada vuelta.
*/

function encontrarMayor(numeros) {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
console.log("--- Test Extra 3 ---");
console.log(encontrarMayor([3, 12, 5, 23, 8])); // Debería dar: 23
console.log(encontrarMayor([-5, -1, -10])); // Debería dar: -1
console.log(encontrarMayor([42])); // Debería dar: 42

/*

Reto 6: El buscador de la palabra más larga (Recorrido de strings en objetos)

Enunciado: Crea una función llamada palabraMasLarga que reciba un array de strings (palabras) y devuelva el string que tenga la mayor longitud (más caracteres). Si hay empate, devuelve la primera que encuentres.

Pista: Puedes saber el tamaño de cualquier string usando su propiedad .length.
*/

function palabraMasLarga(palabras = []) {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
console.log("--- Test Extra 4 ---");
console.log(palabraMasLarga(["sol", "mar", "pantalla", "fuego"])); // Debería dar: "pantalla"
console.log(palabraMasLarga(["react", "vite", "js"])); // Debería dar: "react"
console.log(palabraMasLarga([])); // Debería dar: undefined o ""

/*
Reto 7: Inversión manual de un Array (Intercambio/Construcción inversa)

Enunciado: Crea una función llamada invertirArray que reciba un array de cualquier tipo de datos y devuelva un nuevo array con los elementos en orden inverso. No puedes usar .reverse(). Hazlo recorriendo el array original.

Pista: Puedes recorrer el array hacia atrás en un bucle for clásico, o recorrerlo hacia adelante e ir metiendo los elementos al principio del nuevo array.
*/

function invertirArray(elementos = []) {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
console.log("\n--- Test Extra 5 ---");
console.log(invertirArray([1, 2, 3, 4])); // Debería dar: [4, 3, 2, 1]
console.log(invertirArray(["a", "b", "c"])); // Debería dar: ["c", "b", "a"]

/*
Reto 8: El liquidador de gastos (Acumulador con condiciones de objeto)

Enunciado: Imagina que tienes una lista de transacciones. Crea una función llamada calcularGastoTotal que reciba un array de objetos transacciones (donde cada una tiene { tipo: 'ingreso' o 'gasto', cantidad: número }). La función debe devolver la suma total únicamente de las transacciones que sean de tipo 'gasto'.
*/

function calcularGastoTotal(transacciones = []) {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
const cuentaMes = [
  { tipo: "ingreso", cantidad: 1200 },
  { tipo: "gasto", cantidad: 45 },
  { tipo: "gasto", cantidad: 120 },
  { tipo: "ingreso", cantidad: 300 },
];

console.log("\n--- Test Extra 6 ---");
console.log(calcularGastoTotal(cuentaMes)); // Debería dar: 165 (45 + 120)
console.log(calcularGastoTotal([])); // Debería dar: 0

/*
Reto 9: El formateador de nombres (Transformación manual de strings)

Enunciado: Crea una función llamada capitalizarNombres que reciba un array de strings con nombres en minúsculas y devuelva un nuevo array donde cada nombre tenga la primera letra en mayúscula.

Pista 1: Puedes acceder a la primera letra de un string con nombre[0] o nombre.charAt(0).
Pista 2: Para cortar el resto del nombre usa nombre.slice(1).
*/
function capitalizarNombres(nombres = []) {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
console.log("--- Test Extra 7 ---");
console.log(capitalizarNombres(["juan", "leticia", "andrés"]));
// Debería dar: ["Juan", "Leticia", "Andrés"]
console.log(capitalizarNombres([]));
// Debería dar: []

/*
Reto 10: El validador de stock (Verificación total)

Enunciado: Crea una función llamada todosTienenStock que reciba un array de objetos productos (cada uno con nombre y stock como número). La función debe devolver true si todos los productos tienen un stock mayor que cero. Si encuentra un solo producto con stock 0, debe devolver false inmediatamente.

Pista: No necesitas recorrer todo el array si encuentras uno que rompe la regla. Puedes usar return false dentro del bucle para cortar la ejecución (efecto break).
*/

function todosTienenStock(productos = []) {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
const almacenA = [
  { nombre: "Ratón", stock: 5 },
  { nombre: "Teclado", stock: 12 },
  { nombre: "Monitor", stock: 2 },
];

const almacenB = [
  { nombre: "Ratón", stock: 3 },
  { nombre: "Teclado", stock: 0 }, // <-- Este rompe la regla
  { nombre: "Monitor", stock: 8 },
];

console.log("--- Test Extra 8 ---");
console.log(todosTienenStock(almacenA)); // Debería dar: true
console.log(todosTienenStock(almacenB)); // Debería dar: false
console.log(todosTienenStock([])); // Si está vacío, por defecto debería ser true (no hay fallos)
