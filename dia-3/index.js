/*
Reto 1: El limpiador de Slugs (Formateo de URLs)

Enunciado: Crea una función llamada generarSlug que reciba una frase (string) metida por un usuario. La función debe limpiar el string para que sea apto para una URL. Para ello debe:

    Eliminar los espacios en blanco del principio y del final.

    Pasar todo a minúsculas.

    Sustituir todos los espacios intermedios por un único guion -.

Pista: Puedes encadenar los métodos de string uno detrás de otro igual que hiciste con los arrays (string.trim().toLowerCase()...).
*/

function generarSlug(frase = "") {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
console.log("--- Test Día 3 - Reto 1 ---");
console.log(generarSlug("  Hola Mundo desde JavaScript   "));
// Debería dar: "hola-mundo-desde-javascript"

console.log(generarSlug("NETTO APP PWA  "));
// Debería dar: "netto-app-pwa"

console.log(generarSlug(""));
// Debería dar: ""

/*
Reto 2: Inversión manual de Strings (Análisis carácter a carácter)

Enunciado: Crea una función llamada invertirTexto que reciba un string y devuelva el texto completamente invertido. No vale transformarlo en array y usar métodos de array. Hazlo recorriendo el string carácter a carácter (con un bucle) y acumulando las letras en un string nuevo.

Pista: Los strings se pueden recorrer con un bucle for...of o mediante índices como si fueran arrays (texto[i]). También puedes concatenar letras sumándolas: nuevoString = letra + nuevoString.
*/

function invertirTexto(texto = "") {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
console.log("\n--- Test Día 3 - Reto 2 ---");
console.log(invertirTexto("react")); // Debería dar: "tcaer"
console.log(invertirTexto("alacant")); // Debería dar: "tnacala"
console.log(invertirTexto("")); // Debería dar: ""

/*
Reto 3: El extractor de extensiones (Análisis de sufijos)

Enunciado: Crea una función llamada obtenerExtension que reciba el nombre de un archivo como string (ej: "api.ts", "index.test.js", "avatar.png") y devuelva únicamente la extensión (sin el punto). Si el archivo no tiene extensión, debe devolver un string vacío "". No puedes usar .endsWith().

Pista: Puedes usar .split('.') para trocear el string por los puntos y quedarte con el último elemento del array resultante usando .pop() o array[array.length - 1].
*/

function obtenerExtension(nombreArchivo = "") {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
console.log("--- Test Día 3 - Reto 3 ---");
console.log(obtenerExtension("lib/api.ts")); // Debería dar: "ts"
console.log(obtenerExtension("componente.tsx")); // Debería dar: "tsx"
console.log(obtenerExtension("README")); // Debería dar: ""

/*
Reto 4: El truncador de texto (UI Card Previews)

Enunciado: En las interfaces web (como un historial de viajes o un blog), a veces el texto es muy largo y hay que cortarlo para que quepa en la tarjeta. Crea una función llamada truncarTexto que reciba dos parámetros: un texto (string) y un limite (número).
Si la longitud del texto supera el límite, debe cortar el texto en ese número de caracteres y añadirle "..." al final. Si no lo supera, debe devolver el texto original intacto.

Pista: Usa el método .slice(0, limite).
*/

function truncarTexto(texto = "", limite = 10) {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
console.log("\n--- Test Día 3 - Reto 4 ---");
console.log(
  truncarTexto("Viaje largo desde Gran Alacant hasta el aeropuerto", 20),
);
// Debería dar: "Viaje largo desde Gr..."

console.log(truncarTexto("Hola", 10));
// Debería dar: "Hola" (No supera el límite)

/*
Reto 5: El censurador de palabras (Reemplazo selectivo)

Enunciado: Crea una función llamada censurarTexto que reciba tres parámetros: un texto completo, una palabraProhibida y una palabraSustituta. La función debe buscar todas las apariciones de la palabra prohibida en el texto y cambiarlas por la sustituta.
*/

function censurarTexto(
  texto = "",
  palabraProhibida = "",
  palabraSustituta = "",
) {
  // Tu código aquí
}

// --- CASOS DE PRUEBA ---
const parrafo =
  "El conductor del taxi nº 4 llegó a tiempo. El taxi estaba limpio.";

console.log("\n--- Test Día 3 - Reto 5 ---");
console.log(censurarTexto(parrafo, "taxi", "vehículo"));
// Debería dar: "El conductor del vehículo nº 4 llegó a tiempo. El vehículo estaba limpio."
