// Ejercicio 5
// Este programa trata de pedir al usuario que teclee un número entre 1 y 5, si escribe
// alguno que esté fuera de ese rango deberá volver a pedir el número.
const prompt=require("prompt-sync")();

Num = parseInt(prompt("Ingresa un numero del 1 al 5: "));

    while (Num <1 || Num >5) {
    Num = parseInt(prompt("Ingresa de nuevo un numero del 1 al 5: "));
    }
        console.log ("Tu numero del 1 al 5 es: " + Num);
