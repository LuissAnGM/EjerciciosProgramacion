//Ejercicio 4-Tabla de multiplicar 
const prompt=require("prompt-sync")();

let multipl=0
let numer=parseInt(prompt("Ingresa el numero que quieres multiplicar:"));

let cantidad=parseInt(prompt("Ingresa la cantidad de veces que quieres que se multiplique:"));

    console.log(`Tabla del ${numer} hasta ${cantidad}:`);

for (let i = 1; i<=cantidad; i++){

    console.log(`${numer} x ${i} = ${numer * i}`);
}