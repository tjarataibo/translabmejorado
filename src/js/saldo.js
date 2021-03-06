// Funcionalidad Menú
$(document).ready(function() {
  $('.sidenav').sidenav();
});
  
// Funcionalidad select
$(document).ready(function() {
  $('select').formSelect();
});
  
// Data en formato JSON
function dataJson() {
  const Bip = document.getElementById('numberTar').value; // Creo a Bip como una constante que contenga numberTar, que a su vez es el id del input donde ingreso la tarjeta
  console.log(Bip); // Se me muestra el número de la tarjeta
  let url = ''; 
  url += 'http://www.psep.cl/api/Bip.php?&'; // Api
  url += `numberBip=${Bip}`; 
  fetch(url)
    .then(response =>response.json())
    .then(data => {
      tarifa(data); 
      saldos(data);
    })
    .catch(error => console.log(error));
}

document.getElementById('btnCalcular').addEventListener('click', dataJson);
  
// Descuento de valor de pasaje en saldo existente, mostrando la diferencia
let saldoTar1; // Declaro una variable
function tarifa(data) {
  let saldoTarjeta = data['Saldo  tarjeta']; // Creo una variable que contenga la información de la tarjeta a consultar. Con un espacio no funciona
  saldoTar1 = saldoTarjeta.replace('$', ''); // Reemplazo el valor
  document.getElementById('saldito').innerHTML = `$${saldoTar1}`; // Pinto saldo en pantalla
  console.log(saldoTar1); // Hasta aquí, saldo tarjeta sin $
}


function saldos(data) {
  let saldo = data['Saldo  tarjeta']; // Saldo tarjeta
      
  console.log(saldo);
}

