// Hacemos la solicitud a la API
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json()) // Convertimos la respuesta a JSON
  .then(data => console.log(data)) // Mostramos los datos en la consola
  .catch(error => console.error("Error al obtener los datos:", error)); // Manejamos errores
