function promesaConRetraso() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promesa resuelta");
    }, 2000);
  });
}

// Uso de la función
promesaConRetraso().then((mensaje) => console.log(mensaje));
