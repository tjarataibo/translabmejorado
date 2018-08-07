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

// Selecciona una hora para realizar cálculo
let selecTar; // Creo una variable para seleccionar tarifa
let selector = document.getElementById('selectHora'); // selectHora = Selección de hora
selector.addEventListener('change', function() { // let selector contendrá la selección de hora (selectHora)
  selecTar = selector.options[selector.selectedIndex].value; // tarifaSelec contendrá la misma let que lo contiene con una opción que pueda elegir de tarifa 
  // Me entrega el resultado del precio del pasaje seleccionado
  document.getElementById('precio').innerHTML = `$${selecTar * 1000}`; //* 1000 porque lo ingresé en decimales. precio es el id de la caja donde lo imprimo en pantalla
  console.log(selecTar);
});
  
document.getElementById('btnResultado').addEventListener('click', dataJson); // Botón para calcular
  

function saldos(data) {
  let saldo = data['Saldo  tarjeta']; // Saldo tarjeta
      
  console.log(saldo);
}
  
// Descuento de valor de pasaje en saldo existente, mostrando la diferencia
let saldoTar1; // Declaro una variable
function tarifa(data) {
  let saldoTarjeta = data['Saldo  tarjeta']; // Creo una variable que contenga la información de la tarjeta a consultar. Con un espacio no funciona
  saldoTar1 = saldoTarjeta.replace('$', ''); // Reemplazo el valor
  console.log(saldoTar1); // Hasta aquí, saldo tarjeta sin $

  let saldoRestante = (saldoTar1 - selecTar).toFixed(3);// toFixed = El número se redondea si es necesario, y la parte fraccional se rellena con ceros si es necesario para que tenga la longitud especificada. Si lo ponía en 2, me manda número decimal
  console.log(saldoRestante); // Diferencia
  let respOnse;
  if (saldoRestante >= 0) {
    respOnse = saldoRestante;
  } else {
    respOnse = 'Selecciona horario de viaje';
  }
  document.getElementById('diferencia').innerHTML = `$${respOnse}`; // Pinto saldo restante en pantalla
}

  
