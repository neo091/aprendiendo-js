/*
Reto 1: Transformación de datos con .map()

Enunciado: Crea una función llamada inicializarConductores que reciba un array de strings (nombres de pila de conductores) y devuelva un nuevo array de objetos. Cada objeto debe tener la propiedad id (usando el índice del array) y la propiedad nombre con el string correspondiente.

Pista: La función callback del .map() puede recibir dos parámetros: (elemento, indice) => ....
*/
function inicializarConductores(nombres = []) {
  // Tu código aquí usando nombres.map(...)
}

// --- CASOS DE PRUEBA ---
console.log("--- Test Día 2 - Reto 1 ---");
console.log(inicializarConductores(["Andrés", "Leticia", "Carlos"]));
/* Debería devolver:
[
  { id: 0, nombre: "Andrés" },
  { id: 1, nombre: "Leticia" },
  { id: 2, nombre: "Carlos" }
]
*/
console.log(inicializarConductores([])); // Debería dar: []

/*
Reto 2: El contador total con .reduce()

Enunciado: Crea una función llamada calcularRecaudacionTotal que reciba un array de objetos viajes. Cada objeto tiene una propiedad importe (número) y otra metodoPago. La función debe devolver la suma total de todos los importes del array usando exclusivamente el método .reduce().

Pista: Recuerda pasarle el valor inicial 0 como segundo argumento al .reduce(callback, 0) para que no falle si el array está vacío o tiene objetos.
*/
function calcularRecaudacionTotal(viajes = []) {
  // Tu código aquí usando viajes.reduce(...)
}

// --- CASOS DE PRUEBA ---
const listaViajes = [
  { importe: 25, metodoPago: "tarjeta" },
  { importe: 12, metodoPago: "efectivo" },
  { importe: 40, metodoPago: "tarjeta" },
];

console.log("\n--- Test Día 2 - Reto 2 ---");
console.log(calcularRecaudacionTotal(listaViajes)); // Debería dar: 77 (25 + 12 + 40)
console.log(calcularRecaudacionTotal([])); // Debería dar: 0

/*
Reto 3: Filtrado selectivo con .filter()

Enunciado: Crea una función llamada filtrarViajesEfectivo que reciba el array de viajes (como los del reto anterior) y devuelva un nuevo array solo con los viajes cuyo metodoPago sea exactamente igual a "efectivo".
*/
function filtrarViajesEfectivo(viajes = []) {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
const misViajes = [
  { importe: 25, metodoPago: "tarjeta" },
  { importe: 12, metodoPago: "efectivo" },
  { importe: 15, metodoPago: "efectivo" },
];

console.log("\n--- Test Día 2 - Reto 3 ---");
console.log(filtrarViajesEfectivo(misViajes));
// Debería devolver solo los 2 objetos con método "efectivo"

/*

Reto 4: Encadenamiento (.filter() + .reduce())

Enunciado: Crea una función llamada recaudacionTarjeta que reciba el mismo array de viajes. Esta función debe devolver la suma total de los importes, pero únicamente de los viajes que se pagaron con "tarjeta".

Pista: Puedes aplicar un .filter() para quedarte solo con las tarjetas y, al resultado de ese filtro, aplicarle directamente un .reduce() en la misma línea.
*/
function recaudacionTarjeta(viajes = []) {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
console.log("\n--- Test Día 2 - Reto 4 ---");
console.log(recaudacionTarjeta(misViajes)); // Debería dar: 25 (el único de tarjeta)

/*
Reto 5: Extracción y limpieza (.filter() + .map())

Enunciado: Crea una función llamada obtenerEmailsDestacados que reciba un array de objetos usuarios. Cada usuario tiene { email: string, premium: booleano }. La función debe devolver un array de strings (solo los emails) de los usuarios que sean premium.
*/

function obtenerEmailsDestacados(usuarios = []) {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
const listaClientes = [
  { email: "juan@test.com", premium: false },
  { email: "leticia@test.com", premium: true },
  { email: "carlos@test.com", premium: true },
];

console.log("\n--- Test Día 2 - Reto 5 ---");
console.log(obtenerEmailsDestacados(listaClientes));
// Debería dar: ["leticia@test.com", "carlos@test.com"]

/*
Reto 6: El condicional dentro del .reduce() (Sin usar .filter())

Enunciado: Crea la misma función del Reto 4 (recaudacionTarjeta), pero esta vez no puedes usar .filter(). Debes hacerlo únicamente con un .reduce(). El condicional if (o un ternario) debe ir dentro del cuerpo del acumulador para decidir si sumas el importe o no.
*/
function recaudacionTarjetaSoloReduce(viajes = []) {
  // Tu código aquí usando solo un viajes.reduce(...)
}

// --- CASOS DE PRUEBA ---
console.log("--- Test Día 2 - Reto 6 ---");
console.log(recaudacionTarjetaSoloReduce(misViajes)); // Debería dar: 50 (25 + 25 de las tarjetas de tus pruebas)

/*
Reto 7: Buscar y verificar con .find() y .some()

Enunciado: Crea una función llamada verificarYEncontrar que reciba un array de usuarios (como los del reto 5). La función debe imprimir en consola true si existe al menos un usuario premium usando el método .some(). Además, debe retornar el objeto completo del primer usuario premium que encuentre usando el método .find().
*/
function verificarYEncontrar(usuarios = []) {
  // 1. Usa .some() para comprobar si hay algún premium y hazle console.log
  // 2. Usa .find() para obtener el primer premium y retornalo
}

// --- CASOS DE PRUEBA ---
console.log("\n--- Test Día 2 - Reto 7 ---");
// Debería imprimir true en consola y retornar el objeto de Leticia
console.log(verificarYEncontrar(listaClientes));

/*
Reto 8: El "GroupBy" con .reduce() (El salto de nivel)

Enunciado: Este es el reto definitivo de hoy. Crea una función llamada agruparPorMetodo que reciba el array de viajes. Debe devolver un solo objeto donde las claves sean los métodos de pago (tarjeta y efectivo) y los valores sean arrays con los viajes correspondientes.

Pista: El valor inicial del .reduce() debe ser un objeto vacío con las propiedades ya creadas o dinámicas: { tarjeta: [], efectivo: [] }.
*/
function agruparPorMetodo(viajes = []) {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
console.log("\n--- Test Día 2 - Reto 8 ---");
console.log(agruparPorMetodo(misViajes));
/* Debería devolver:
{
  tarjeta: [ { importe: 25, metodoPago: 'tarjeta' }, { importe: 25, metodoPago: 'tarjeta' } ],
  efectivo: [ { importe: 12, metodoPago: 'efectivo' }, { importe: 15, metodoPago: 'efectivo' } ]
}
*/
