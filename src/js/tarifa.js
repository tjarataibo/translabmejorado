// Funcionalidad Menú
$(document).ready(function() {
  $('.sidenav').sidenav();
});
  
// Funcionalidad select
$(document).ready(function() {
  $('select').formSelect();
});
  
// Selecciona una hora para realizar cálculo
let tarifaSelec; // Creo una variable para seleccionar tarifa
let seleccionado = document.getElementById('selectHora'); // selectHora = Selección de hora
seleccionado.addEventListener('change', function() { // let seleccionado contendrá la selección de hora (selectHora)
  tarifaSelec = seleccionado.options[seleccionado.selectedIndex].value; // tarifaSelec contendrá la misma let que lo contiene con una opción que pueda elegir de tarifa 
  // Me entrega el resultado del precio del pasaje seleccionado
  document.getElementById('precio').innerHTML = `$${tarifaSelec * 1000}`; //* 1000 porque lo ingresé en decimales. precio es el id de la caja donde lo imprimo en pantalla
  console.log(tarifaSelec);
});
  
document.getElementById('btnResultado').addEventListener('click', dataJson); // Botón para calcular
  
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
      calcularTarifa(data); 
      obtenerSaldo(data);
    })
    .catch(error => console.log(error));
}
  
// Descuento de valor de pasaje en saldo existente, mostrando la diferencia
let saldoTarjeta1;
function calcularTarifa(data) {
  let saldoTarjeta = data['Saldo  tarjeta']; 
  saldoTarjeta1 = saldoTarjeta.replace('$', '');
  console.log(saldoTarjeta1); // Hasta aquí, saldo tarjeta

  let saldoRestante = (saldoTarjeta1 - tarifaSelec).toFixed(3);
  console.log(saldoRestante); // Diferencia
  let respuesta;
  if (saldoRestante >= 0) {
    respuesta = saldoRestante;
  } else {
    respuesta = 'Selecciona horario de viaje';
  }
  document.getElementById('diferencia').innerHTML = `$${respuesta}`;
}
  
function obtenerSaldo(data) {
  let saldo = data['Saldo  tarjeta']; // Saldo tarjeta
      
  console.log(saldo);
}
  
