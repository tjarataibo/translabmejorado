//Funcionalidad Menú
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
  
//Funcionalidad de tarjetas guardadas 
// document.getElementById('btnAgregarTarjeta').addEventListener('click', function Redirect() {

//     window.location="file:///translab/perfil.html";
// })


//Tarjetas guardadas
let arrayTarjetas=[];
btnAgregarTarjeta.addEventListener('click',agregarArray);

function agregarArray(){
    let  elementoArray=numberTar.value
    arrayTarjetas.unshift(elementoArray);
    console.log(arrayTarjetas)
    numberTar.value='';
    //Pintar en pantalla las tarjetas guardadas
    let tarjetaAlmacenada = document.createElement("input"); 
    tarjetaAlmacenada.setAttribute("type", "tel");
    tarjetaAlmacenada.setAttribute("id", "tarjetasGuardadas");
    tarjetaAlmacenada.setAttribute("value", arrayTarjetas[0]);
    document.body.appendChild(tarjetaAlmacenada);
//..............................creando el Select de las tarjetas guardadas
    let tarjetaGuardadaEnSelect = '';
    tarjetaGuardadaEnSelect += `<select id="selectTarjeta">`
    for(i=0;i<arrayTarjetas.length;i++){
        tarjetaGuardadaEnSelect += `<option value="">${arrayTarjetas[i]}</option>`
    }
    tarjetaGuardadaEnSelect += `</select>`
    document.getElementById('tarjetas').innerHTML = tarjetaGuardadaEnSelect;
}
