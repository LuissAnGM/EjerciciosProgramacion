// Practica 2 Ejercicio 6-Indice de contaminación
const prompt=require("prompt-sync")();

cont=parseInt(prompt("Cual es el indice de contaminacion: "));

if (cont<38){
    console.log("El indice es aceptable");

}
else if (cont>=38 && cont<=55)
{
    console.log("El indice de contaminacion es desagradable");
}

else if (cont>55)
{
    console.log("Es peligroso");
}