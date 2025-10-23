// Practica 2 Ejercicio 10-Par, Impar o mayor a Cero
const prompt = require("prompt-sync")();

let N=parseInt(prompt("Ingresa un numero: "));

if (N>0){
    if (N % 2 ===0){
        console.log("Tu numero es par");
    }
    if (N % 2 !==0){
        console.log("Tu numero es impar");
    }
}
