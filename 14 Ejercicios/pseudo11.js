// Practica 2 Ejercicio 7-Algoritmo de Números N
const prompt=require("prompt-sync")();
let i
let c = 0;
N=parseInt(prompt("Ingresa un numero: "));

for (i=1; i<=N; i++){

if (i % 2!==0){
    console.log(i);
    c = c +1;
    }
}
    console.log("Hay " + c + " números impares.");