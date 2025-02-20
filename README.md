# ejerciciosServiciosWeb
aquí subire los ejercicios de desarrollo de servicios web

1️⃣ Variables y tipos de datos:
Crea una variable llamada nombre y asígnale tu nombre. Luego, imprime el valor en la consola.

// Declaración de una variable con el nombre 'nombre' y asignación de un valor tipo string
let nombre = 'Fernando';


// Imprime el valor de la variable 'nombre' en la consola
console.log(nombre);




2️⃣ Operaciones matemáticas:
Declara dos variables con números y realiza las operaciones básicas: suma, resta, multiplicación y división. Imprime los resultados.
// Declaración de variables numéricas
let numero1 = 5;
let numero2 = 6;


// Operaciones aritméticas básicas
let suma = numero1 + numero2;          // Suma de numero1 y numero2
let resta = numero1 - numero2;         // Resta de numero1 menos numero2
let multiplicacion = numero1 * numero2; // Multiplicación de numero1 por numero2
let division = numero1 / numero2;      // División de numero1 entre numero2


// Imprime los resultados en la consola
console.log('Suma:', suma, 'Resta:', resta, 'Multiplicación:', multiplicacion, 'División:', division);



3️⃣ Condicionales (if-else):
Escribe un programa que pregunte al usuario su edad y le diga si es mayor de edad (18 años o más) o no.
// Importa el módulo readline para interactuar con la consola
const readline = require('readline');


// Crea una interfaz para leer la entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Pregunta al usuario por un valor
rl.question('Por favor, ingresa un valor: ', (input) => {
  // Convierte la entrada en un número
  let edad = parseInt(input, 10);


  // Verifica si la conversión fue exitosa y si es mayor de edad
  if (!isNaN(edad)) {
    if (edad >= 18) {
      console.log('Sí es mayor de edad');
    } else {
      console.log('No es mayor de edad');
    }
  } else {
    console.log('Por favor, ingresa un número válido.');
  }


  // Cierra la interfaz de lectura
  rl.close();
});



4️⃣ Bucles (for-loop):
Escribe un programa que imprima los números del 1 al 10 en la consola.
// Declara la variable x sin inicializar
let x;


// Asigna el valor 1 a la variable x
x = 1;


// Inicia un bucle while que se ejecutará mientras x sea menor o igual a 10
while (x <= 10) {
    // Muestra el valor actual de x en la consola
    console.log(x);


    // Incrementa el valor de x en 1 en cada iteración para evitar un bucle infinito
    x = x + 1;
}



5️⃣ Funciones básicas:
Escribe una función llamada saludar(nombre) que reciba un nombre y devuelva un mensaje de saludo, por ejemplo: "Hola, Juan".
// Definición de la función con parámetros
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}


// Llamada a la función con argumentos
saludar('Ana');



 Nivel 2: Arreglos y Objetos
6️⃣ Manipulación de arreglos:
Crea un array con los nombres de 5 ciudades y muestra la segunda ciudad en la consola.
//declarar el arreglode ciudaddes
let ciudades = ["Monterrey", "Guadalajara", "Tepic", "NY", "Boston"];
//imprimir solo la segunda ciudad 
console.log(ciudades[1]);





7️⃣ Recorriendo arreglos con forEach:
Dado un arreglo let numeros = [2, 4, 6, 8, 10], usa forEach para imprimir cada número en la consola.
// Declara un arreglo llamado 'numeros' con una lista de valores
let numeros = [2, 4, 6, 8, 10];


// Usa el método forEach para recorrer cada elemento del arreglo
numeros.forEach(numeros => {
    // Muestra cada número del arreglo en la consola
    console.log(numeros);
});



8️⃣ Uso de objetos:
Crea un objeto persona con propiedades nombre, edad y profesión. Imprime su nombre.
// Se define un objeto llamado 'persona' con tres propiedades: nombre, edad y profesión
const persona = {
    nombre: "Fer",  // Propiedad 'nombre' con el valor "Fer"
    edad: "21",      // Propiedad 'edad' con el valor "21"
    profesion: "vendedor"  // Propiedad 'profesion' con el valor "vendedor"
};


// Se imprime en la consola el valor de la propiedad 'nombre' del objeto 'persona'
console.log(persona.nombre); // Salida: "Fer"



9️⃣ Manipulación de objetos:
Agrega una nueva propiedad nacionalidad al objeto persona del ejercicio anterior y muéstrala en consola.
// Se define un objeto llamado 'persona' con tres propiedades iniciales: nombre, edad y profesión
const persona = {
    nombre: "Fer",  // Propiedad 'nombre' con el valor "Fer"
    edad: "21",      // Propiedad 'edad' con el valor "21"
    profesion: "vendedor"  // Propiedad 'profesion' con el valor "vendedor"
};


// Se agrega una nueva propiedad al objeto 'persona' llamada 'nacionalidad' con el valor "Mexicano"
persona.nacionalidad = "Mexicano";


// Se imprime en la consola el valor de la nueva propiedad 'nacionalidad'
console.log(persona.nacionalidad); // Salida: "Mexicano"



🔟 Filtrar elementos de un array:
Dado el arreglo let edades = [12, 18, 25, 10, 30, 16], usa filter() para crear un nuevo arreglo solo con los mayores de edad.
// Se define un array llamado 'edades' con varios valores numéricos
let edades = [12, 18, 25, 10, 30, 16];


// Se usa el método 'filter' para filtrar las edades mayores o iguales a 18
const resultado = edades.filter((edad) => edad >= 18);


// Se imprime en la consola el nuevo array con las edades filtradas
console.log(resultado); // Salida: [18, 25, 30]





📌 Nivel 3: Funciones y Métodos Avanzados
1️⃣1️⃣ Mapear un array:
Dado let numeros = [1, 2, 3, 4, 5], usa .map() para obtener un nuevo array donde cada número esté elevado al cuadrado.
// Definimos un arreglo con los números del 1 al 5
let numeros = [1, 2, 3, 4, 5];


// Usamos el método .map() para crear un nuevo arreglo con los números elevados al cuadrado
let numcuad = numeros.map(numeros => numeros**2);


// Mostramos el resultado en la consola
console.log(numcuad); // Imprime [1, 4, 9, 16, 25]



1️⃣2️⃣ Reducir un array:
Dado let precios = [10, 20, 30, 40], usa .reduce() para obtener el total de la suma de los precios.
// Definimos un arreglo con los precios
let precios = [10, 20, 30, 40];


// Usamos el método .reduce() para sumar todos los valores del arreglo
let sumprecios = precios.reduce((acumulador, precios) => acumulador + precios, 0);


// Mostramos el resultado en la consola
console.log(sumprecios); // Imprime 100



1️⃣3️⃣ Funciones asíncronas (setTimeout):
Escribe una función que imprima "Hola después de 3 segundos" utilizando setTimeout().
// Definimos una variable de tipo cadena con el valor "hola"
let saludo = "hola";


// Usamos setTimeout para ejecutar una función después de 3 segundos (3000 milisegundos)
setTimeout(() => {
    // Esta función se ejecuta después de 3 segundos y muestra el valor de la variable 'saludo'
    console.log(saludo);
}, 3000); // El tiempo de espera es de 3000 milisegundos (3 segundos)



1️⃣4️⃣ Manejo de Promesas:
Crea una función que devuelva una promesa que se resuelva después de 2 segundos con el mensaje "Promesa resuelta".
// Definimos una función que devuelve una promesa
function promesaConRetraso() {
  // La promesa se resuelve después de un retraso de 2 segundos (2000 milisegundos)
  return new Promise((resolve) => {
    // setTimeout ejecuta la función después de 2 segundos
    setTimeout(() => {
      // La promesa se resuelve con el mensaje "Promesa resuelta"
      resolve("Promesa resuelta");
    }, 2000);
  });
}


// Uso de la función
// Cuando la promesa se resuelva, se ejecutará el .then() y mostrará el mensaje en la consola
promesaConRetraso().then((mensaje) => console.log(mensaje)); // Imprime "Promesa resuelta" después de 2 segundos



1️⃣5️⃣ Uso de async/await:
Modifica la función del ejercicio anterior para que use async y await.
// Definimos una función que devuelve una promesa que se resuelve después de 2 segundos
function esperarDosSegundos() {
  return new Promise((resolve) => {
      setTimeout(() => {
          // La promesa se resuelve con el mensaje "Promesa resuelta" después de 2 segundos
          resolve("Promesa resuelta");
      }, 2000);
  });
}


// Definimos una función asincrónica que utiliza await para esperar la resolución de la promesa
async function ejecutarPromesa() {
  // Imprime "Esperando..." en la consola
  console.log("Esperando...");
 
  // Usamos await para esperar que la promesa se resuelva y almacenamos el resultado en 'mensaje'
  const mensaje = await esperarDosSegundos();
 
  // Una vez resuelta la promesa, se imprime el mensaje en la consola
  console.log(mensaje);
}


// Llamada a la función asincrónica
ejecutarPromesa();




📌 Nivel 4: Manipulación de Strings y Objetos Complejos
1️⃣6️⃣ Expresiones Regulares:
Crea una función que valide si una cadena de texto es un correo electrónico válido.
// Definimos la función esCorreoValido que recibe un correo y valida su formato usando una expresión regular
function esCorreoValido(correo) {
  // Expresión regular para validar un correo electrónico
  // ^[^\s@]+: debe empezar con caracteres que no sean espacios ni '@'
  // @[^\s@]+: seguido de un '@' y luego caracteres que no sean espacios ni '@'
  // \.[^\s@]+$: y debe terminar con un punto seguido de caracteres que no sean espacios ni '@'
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
  // La función devuelve true si el correo cumple con el formato de la expresión regular, false en caso contrario
  return regexCorreo.test(correo);
}


// Ejemplos de uso con diferentes correos
console.log(esCorreoValido("ejemplo@email.com")); // true: formato correcto
console.log(esCorreoValido("correo@dominio")); // false: falta el dominio después del punto
console.log(esCorreoValido("usuario@.com")); // false: el dominio no puede empezar con un punto
console.log(esCorreoValido("sin-arroba.com")); // false: no tiene el símbolo '@'
console.log(esCorreoValido("nombre@dominio.com.mx")); // true: formato correcto con dominio completo



1️⃣7️⃣ Transformación de texto:
Dado un string "Hola, cómo estás?", conviértelo a mayúsculas y elimina las comas.
// Definimos el string original
let texto = "Hola, cómo estás?";


// Convertimos el texto a mayúsculas y eliminamos las comas
let textoTransformado = texto.toUpperCase().replace(",", "");


console.log(textoTransformado); // Imprime "HOLA CÓMO ESTÁS?"



1️⃣8️⃣ Ordenamiento de un array:
Dado let palabras = ["banana", "manzana", "pera", "uva"], usa .sort() para ordenarlas alfabéticamente.
// Definimos el array de palabras
let palabras = ["banana", "manzana", "pera", "uva"];


// Usamos .sort() para ordenarlas alfabéticamente
let palabrasOrdenadas = palabras.sort();


console.log(palabrasOrdenadas); // Imprime ["banana", "manzana", "pera", "uva"]



1️⃣9️⃣ Simulación de un endpoint con fetch (JSONPlaceholder):
Usa fetch() para obtener información de https://jsonplaceholder.typicode.com/todos/1 y muestra el resultado en consola.
// Hacemos la solicitud a la API
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json()) // Convertimos la respuesta a JSON
  .then(data => console.log(data)) // Mostramos los datos en la consola
  .catch(error => console.error("Error al obtener los datos:", error)); // Manejamos errores



2️⃣0️⃣ Creación de un pequeño CRUD en memoria:
Crea un array llamado tareas que almacene objetos { id, descripcion, completado }. Agrega funciones para:
Agregar una tarea.
Eliminar una tarea por id.
Marcar una tarea como completada.
// Array para almacenar las tareas
let tareas = [];


// Función para agregar una tarea
function agregarTarea(id, descripcion) {
    tareas.push({ id, descripcion, completado: false });
    console.log(`Tarea "${descripcion}" agregada.`);
}


// Función para eliminar una tarea por ID
function eliminarTarea(id) {
    const index = tareas.findIndex(tarea => tarea.id === id);
    if (index !== -1) {
        console.log(`Tarea "${tareas[index].descripcion}" eliminada.`);
        tareas.splice(index, 1);
    } else {
        console.log(`No se encontró una tarea con ID ${id}.`);
    }
}


// Función para marcar una tarea como completada
function completarTarea(id) {
    const tarea = tareas.find(tarea => tarea.id === id);
    if (tarea) {
        tarea.completado = true;
        console.log(`Tarea "${tarea.descripcion}" marcada como completada.`);
    } else {
        console.log(`No se encontró una tarea con ID ${id}.`);
    }
}


// Ejemplo de uso:
agregarTarea(1, "Aprender JavaScript");
agregarTarea(2, "Practicar Fetch API");
agregarTarea(3, "Construir un pequeño CRUD");


console.log("Tareas actuales:", tareas);


completarTarea(2);
eliminarTarea(1);


console.log("Tareas actualizadas:", tareas);
