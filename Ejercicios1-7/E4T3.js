// Ejercicio 4
// Hacer un programa que pregunte al usuario si desea continuar. Si el usuario pulsa una
// letra n (mayúscula o minúscula), el programa finalizará. Cualquier otra entrada repetirá
// la pregunta.
const prompt=require("prompt-sync")();

let Leta = "";

    while (Leta.toUpperCase() != "N"){
        Leta = prompt("Deseas continuar? (presiona 'n'para no hacerlo) ");
    }

