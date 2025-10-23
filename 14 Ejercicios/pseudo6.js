// Practica 2 Ejercicio 2-Horas de sueño 
const prompt=require("prompt-sync")();
let dias =365;
let horasDormidas=parseInt(prompt("Cuantas horas duermes al dia?:"));
let edad=parseInt(prompt("Cuantos años tienes?:"));

let horasdescansadas = horasDormidas * edad * dias;{
    console.log("has dormido aproximadamente " + horasdescansadas.toFixed(0) +" hrs a lo largo de tu vida");
}
