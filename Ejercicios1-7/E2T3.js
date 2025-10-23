// Ejercicio 2
//. Realiza un programa que calcule la aceptación de una solicitud con base a los
//  siguientes parámetros: edad, nota y sexo.
//a. * Mínimo: Nota (5), edad (18), sexo M -> POSIBLE
//b. * Mínimo: Nota (5), edad (18), sexo F -> ACEPTADA
//c. * Otros casos -> NO ACEPTADA

const prompt=require("prompt-sync")();

Nota = parseInt(prompt("Ingresa tu nota: "));
Edad = parseInt(prompt("Ingresa tu edad: "));
Sexo = prompt("Ingresa tu sexo(M/F): ").toUpperCase();

if (Nota == 5 && Edad == 18 && Sexo =="M") {
    console.log ("Es posible");
}
else if (Nota == 10 && Edad == 18 && Sexo == "F") {
    console.log ("Es Aceptada");
}
else{
    console.log("No aceptada");
}