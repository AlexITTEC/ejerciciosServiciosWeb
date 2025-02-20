function esCorreoValido(correo) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  }
  
  // Ejemplos de uso
  console.log(esCorreoValido("ejemplo@email.com")); // true
  console.log(esCorreoValido("correo@dominio")); // false
  console.log(esCorreoValido("usuario@.com")); // false
  console.log(esCorreoValido("sin-arroba.com")); // false
  console.log(esCorreoValido("nombre@dominio.com.mx")); // true
  
