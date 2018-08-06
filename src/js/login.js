let formulario = document.getElementById('formularioLogin');
// console.log(formulario);
// manejar algo quiere decir que controlar lo que contiene
// el evento es un momento
function enviarSubmit(evento) {
  // preventDefault() detiene el evento, en este caso el envio no ocurre.
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
// se ejecuta la funcion
formulario.addEventListener('submit', enviarSubmit);