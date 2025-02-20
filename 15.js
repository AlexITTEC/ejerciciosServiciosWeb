function esperarDosSegundos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promesa resuelta");
      }, 2000);
    });
  }
  
  async function ejecutarPromesa() {
    console.log("Esperando...");
    const mensaje = await esperarDosSegundos();
    console.log(mensaje);
  }
  
  // Llamada a la función asincrónica
  ejecutarPromesa();
  