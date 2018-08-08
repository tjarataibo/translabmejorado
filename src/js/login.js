let formulario = document.getElementById('formularioLogin');
// console.log(formulario);
// El evento es un momento
function enviarSubmit(evento) {
  // preventDefault() detiene el evento, en este caso el envío no ocurre.
  evento.preventDefault();
  const correo = document.getElementById('emailLogin').value;
  const contrasena = document.getElementById('passwordLogin').value;
  if (correo.length !== 0 && contrasena.length !== 0) {
    firebase.auth().signInWithEmailAndPassword(correo, contrasena)
      .then(response => {
        location.href = './inicio.html';
      })
      .catch(function(error) {
        let errorCode = error.code;
        alert(errorCode);
      });
  };
}
// Se ejecuta la función
formulario.addEventListener('submit', enviarSubmit);