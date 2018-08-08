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

window.validatePassword = (password) => {
  console.log(password);
  if (password.toString().length <= 8) { // se comprueba el largo, maximo 8 
    if (isNaN(password) === false) { // se comprueba que sean numeros
      if (!password.trim() === ' ') { // se comprueba que no contenga espacios
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

window.validateCard = (tarjeta) => {
  console.log(tarjeta);
  if (tarjeta.toString().length <= 10) {
    if (isNaN(bip) === false) {
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