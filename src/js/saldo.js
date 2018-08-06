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
  const Bip = document.getElementById('numberTar').value;
  console.log(Bip);
  let url = '';
  url += 'http://www.psep.cl/api/Bip.php?&'; // Api
  url += `numberBip=${Bip}`;
  fetch(url)
    .then(response =>response.json())
    .then(data => {
      calcularTarifa(data); 
      obtenerSaldo(data);
    })
    .catch(error => console.log(error));
}

document.getElementById('btnCalcular').addEventListener('click', dataJson);
  
// Descuento de valor de pasaje en saldo existente, mostrando la diferencia
let saldoTarjeta1;
function calcularTarifa(data) {
  let saldoTarjeta = data['Saldo  tarjeta']; 
  saldoTarjeta1 = saldoTarjeta.replace('$', '');
  console.log(saldoTarjeta1); // Hasta aquí, saldo tarjeta
}

function obtenerSaldo(data) {
  let saldo = data['Saldo  tarjeta']; // Saldo tarjeta
      
  console.log(saldo);
}

document.getElementById('saldito').innerHTML = `$${saldoTarjeta1}`;
  
  
