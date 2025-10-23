//Practica 2 Ejercicio 5-Dos Números
const prompt = require("prompt-sync")();

let numA = parseInt(prompt("Ingresa un número: "));
let numB = parseInt(prompt("Pon otro: "));

if (numA > numB){
    console.log("la suma da "+(numA+numB));   
}
if (numB>numA){
    console.log("La sumatoria es "+ (numB+numA));
}
if (numA===numB){
    console.log("el producto es "+(numA*numB));
}