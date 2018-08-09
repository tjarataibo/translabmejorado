// Validar correo
window.validateEmail = (email) => {
  console.log(email);
  if (email.indexOf('@') < 0) {
    return false;
  }

  const tokens = email.split('@');
  if (tokens.length !== 2) { // Verifica que el correo SÓLO tenga 2 partes, lo que está antes del arroba y después del arroba 
    return false; // Si es distinto de 2, será false
  }

  if (tokens[1].indexOf('.') < 0) {
    return false;
  }

  const domTokens = tokens[1].split('.');
  if (domTokens.length !== 2) {
    return false;
  }
  if (domTokens[0].length < 1) {
    return false;
  }
  if (domTokens[1].length < 1) {
    return false;
  }

  return true;
};

// Validar contraseña
window.validatePassword = (password) => {
  console.log(password);
  if (password.toString().length <= 8) {
    return true; // Se verifica que contenga máximo 8 números 
  }
  if (isNaN(tarjeta) === false) {
    return false;
  }
  if (!password.trim() === ' ') { // Se verifica que no contenga espacios
    return true;
  }
};


// window.validatePassword = (password) => {
//   console.log(password);
//   if (password.toString().length <= 8) { // Se verifica que contenga máximo 8 números 
//     if (isNaN(password) === false) { // Si no son números, no se acepta
//       if (!password.trim() === ' ') { // Se verifica que no contenga espacios
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// };

// Validar tarjeta
window.validateCard = (tarjeta) => {
  console.log(tarjeta);
  if (tarjeta.toString().length <= 10) {
    if (isNaN(tarjeta) === false) {
      if (!tarjeta.toString().trim() === ' ') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};