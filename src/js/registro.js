var db = firebase.firestore();
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', eee => {
  eee.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const contrasena = document.getElementById('contrasena').value;
  if (nombre.length !== 0 && correo.length !== 0 && contrasena.length !== 0) {
    console.log('if');
    firebase.auth().createUserWithEmailAndPassword(correo, contrasena)
      .then(Response => {
        const userId = Response.user.uid;
        firebase.database().ref('users/' + userId).set({
          nombre: nombre,
          correo: correo 
        });
        console.log('Usuario registrado con éxito');
        location.href = './inicio.html';  
      });   
  }  
}); 