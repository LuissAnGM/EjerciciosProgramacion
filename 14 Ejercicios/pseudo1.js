// Ejercicio 1-Positivo,Negativo y Cero

const prompt=require("prompt-sync")();
let numero1;

numero1=parseInt(prompt("Ingresa Tu Numero:"));

if (numero1>0) {
    console.log("Tu numero es positivo");

}
else if (numero1<0){
    console.log("Tu numero es negativo");

}else {
    numero1===0;
    console.log("Tu numero es Cero");

}