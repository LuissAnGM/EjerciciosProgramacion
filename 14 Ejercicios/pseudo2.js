//Ejercicio 2-Autorizacion de edades
const prompt=require("prompt-sync")();
let edad;

edad=parseInt(prompt("Ingresa tu edad:"));

if (edad>=18) {
    console.log("Acceso Permitido");
}
else { 
    console.log("Acceso Denegado");
}
