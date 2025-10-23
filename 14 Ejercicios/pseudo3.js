//Ejercicio 3-Rango De Calificaciones
const prompt=require("prompt-sync")();
let calif;

calif=parseInt(prompt("Ingresa tu calificacion del 1 al 100:"));

if (calif >=90 && calif<=100){
    console.log("Tu calificacion es excelente");

}
else if (calif<90 && calif>=70) 
{
    console.log("Tu calificacion esta bien");
}
else if (calif<70){
    console.log("Reprobado")
}

