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


