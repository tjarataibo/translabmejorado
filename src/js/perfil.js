// Funcionalidad Menú
$(document).ready(function() {
  $('.sidenav').sidenav();
});

// Tarjetas guardadas
//  const firestore = firebase.firestore();
// const settings = {/* your settings... */ timestampsInSnapshots: true};
//  firestore.settings(settings); 


// firebase.initializeApp({
//   apiKey: 'AIzaSyBW-LzUp2n2WdLw1T_aOpFzwR4ZZkY-Bms',
//   authDomain: 'translab-f6a7f.firebaseapp.com',
//   projectId: 'translab-f6a7f',
// });

// Initialize Cloud Firestore through Firebase
// var db = firebase.firestore();

// Agregar documentos
// function guardar() {
// var nombre = document.getElementById('nombre').value;
// var correo = document.getElementById('correo').value;
//   var numberTar = document.getElementById('numberTar').value;
// }

// db.collection('users').add({
// primero: nombre,
// segundo: correo,
//   first: numberTar
// })
// .then(function(docRef) {
//   console.log('Document written with ID: ', docRef.id);
// document.getElementById('nombre').value;
// document.getElementById('correo').value;
//   document.getElementById('numberTar').value;
// })
// .catch(function(error) {
//   console.error('Error adding document: ', error);
// });

// Leer documentos
// var container = document.getElementById('container');
// db.collection('users').onSnapshot((querySnapshot) => {
//   container.innerHTML = '';
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data().first}`);
//     container.innerHTML += `
/*  <div class="container">
           <div class="row">${doc.id}</div>
              <div class="grey lighten-5"></div>
                   <div class="input-field col s12 white">
                    <input id="e-mail" type="text" class="validate">
                    <label for="number">Correo</label>
                   </div>
                   <div class="input-field col s12">
                        <input id="numberTar" type="text" class="validate">
                        <label for="password">Número de tarjeta</label>
                   </div>
                   <div class="col s12 center">
                      <a class="waves-effect waves-light btn-large amber darken-2 "id="btnAgregarTarjeta" onclick="AgregarTarjeta">AGREGAR TARJETA</a>
                   </div>
                   <div class="input-field col s12 white">
                        <input id="print" type="text" class="validate">
                        <input>${doc.data().first}</input>
                        <label for="password" >Número de tarjeta</label>
                   </div>
                   <div class="input-field col s12 white">
                      <input id="print" type="text" class="validate">
                      <input>${doc.data().first}</input>
                      <label for="password" >Número de tarjeta</label>
                 </div>
                 <div class="input-field col s12 white">
                    <input id="print" type="text" class="validate">
                    <input>${doc.data().first}</input>
                    <label for="password" >Número de tarjeta</label>
                 </div>
              </div> 
           </div>
    `;
  });
});
 */

// Guardando tarjetas en un input mientras

let arreglo = [];
btnAgregarTarjeta.addEventListener('click', tarjetaGuar);

function tarjetaGuar() {
  let elementoArray = numberTar.value;
  arreglo.unshift(elementoArray);
  console.log(arreglo);
  numberTar.value = '';
  
  let tarjetaAlmacenada = document.getElementById('tarjetas');

  tarjetaAlmacenada.setAttribute('value', arreglo[0]);

}

