//Funcionalidad Menú
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
  
  //Funcionalidad select
  $(document).ready(function(){
  $('select').formSelect();
  });
  
  //DATA
  let tarifaSelec;
  let seleccionado = document.getElementById('selectHora');
      seleccionado.addEventListener('change',function (){
      tarifaSelec = seleccionado.options[seleccionado.selectedIndex].value;
      //Me entrega el resultado del precio del pasaje seleccionado
      document.getElementById('precio').innerHTML=`$${tarifaSelec*1000}` //*1000 porque lo ingresé en decimales
      console.log(tarifaSelec);
      });
  
  document.getElementById('btnResultado').addEventListener('click',dataJson);
  
  //Data en formato JSON
  function dataJson(){
  const Bip=document.getElementById('numberTar').value
  console.log(Bip)
  let url='';
   url +='http://www.psep.cl/api/Bip.php?&' //Api
   url+=`numberBip=${Bip}`
  fetch(url)
  .then(resp =>resp.json())
  .then(data => {calcularTarifa(data)
      obtenerSaldo(data)})
  .catch(e => console.log(e))
  }
  
  //Descuento de valor de pasaje en saldo existente, mostrando la diferencia
  let saldoTarjeta1;
  function calcularTarifa(data){
      let saldoTarjeta= data["Saldo  tarjeta"] 
      saldoTarjeta1= saldoTarjeta.replace("$",'')
      console.log(saldoTarjeta1) //Hasta aquí, saldo tarjeta

      let saldoRestante= (saldoTarjeta1-tarifaSelec).toFixed(3);
      console.log(saldoRestante) //Diferencia
      let respuesta;
      if (saldoRestante>=0){
           respuesta=saldoRestante
      }else{
           respuesta='Selecciona horario de viaje'
      }
      document.getElementById('diferencia').innerHTML=`$${respuesta}`;
  }
  
  function obtenerSaldo(data){
      let saldo= data["Saldo  tarjeta"] //Saldo tarjeta
      
      console.log(saldo)
  }
  
