function actualizarHora() {
   var fechaActual = new Date();
   var hora = fechaActual.getHours();
   var minutos = fechaActual.getMinutes();
   var segundos = fechaActual.getSeconds();
 
   // Formatear los minutos y segundos para que siempre tengan dos dígitos
   minutos = (minutos < 10 ? "0" : "") + minutos;
   segundos = (segundos < 10 ? "0" : "") + segundos;
 
   // Obtener el elemento HTML por su id
   var horaActualElemento = document.getElementById("hora-actual");
 
   // Actualizar el contenido del elemento HTML con la hora actual
   horaActualElemento.textContent = hora + ":" + minutos + ":" + segundos;
 }
 
 // Llamar a la función actualizarHora cada segundo
 setInterval(actualizarHora, 1000);
 