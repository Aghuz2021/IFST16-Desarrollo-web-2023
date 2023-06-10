//PUNTO 1 - OPERACIONES
function avanzaReloj(){
   momentoActual = new Date();
   hora = String(momentoActual.getHours()).padStart(2, '0');
   minuto = String(momentoActual.getMinutes()).padStart(2,'0');
   segundo = String(momentoActual.getSeconds()).padStart(2,'0');
 
   horaAMostrar = hora + " : " + minuto + " : " + segundo;
 
   document.form_reloj.reloj.value = horaAMostrar;
   console.log(horaAMostrar);
   setTimeout(avanzaReloj,1000);
 }
 
avanzaReloj();

function operacion(op) {
   var num1 = parseInt(document.getElementById("numeroUno").value);
   var num2 = parseInt(document.getElementById("numeroDos").value);
   var resultado;
 
   switch (op) {
     case 1:
       resultado = sumar(num1, num2);
       break;
     case 2:
       resultado = restar(num1, num2);
       break;
     case 3:
       resultado = multiplicar(num1, num2);
       break;
     case 4:
       resultado = dividir(num1, num2);
       break;
     default:
       alert("Operación inválida");
       return;
   }
 
   document.getElementById("Resultado").value = resultado;
 }
 
 function sumar(a, b) {
   return a + b;
 }
 
 function restar(a, b) {
   return a - b;
 }
 
 function multiplicar(a, b) {
   return a * b;
 }
 
 function dividir(a, b) {
   if (b === 0) {
     alert("NO ES POSIBLE REALIZAR UNA DIVISION POR 0. FAVOR DE INGRESAR NUEVAMENTE");
     return "ERROR";
   }
   return a / b;
 }
 

