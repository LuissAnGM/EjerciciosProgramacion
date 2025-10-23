//Ejercicio 7
// Este programa le pide al usuario que vaya tecleando números una y otra vez, pero solo
// números pares, en caso de que teclee un número impar el programa acabará y dirá la
// cantidad de números pares ingresados (el 0 cuenta como par).
const prompt=require("prompt-sync")();
function SumaDpares (){

let resultado = 0;
Npar = parseInt(prompt("Ingresa tu numero par: "));
    while (Npar % 2 ==0){
        resultado++;
        Npar = parseInt(prompt("Ingrese el siguiente numero par: "));
}
    console.log("El total de los numeros pares es de: " + resultado);
 }

SumaDpares();