//Practica 2 Ejercicio 1-Srta San Marcos
function ConversionDmedidas(){

let busto = 89; // de cm a pulgadas
let cintura =58; // de cm a pulgadas
let cadera = 89; // de cm a pulgadas
let altura = 1.70; //de metro a pie
let peso = 53; // de kilogramo a libra

let pulgad = 0.393701; // de cm a pulgada  
let pie = altura * 3.28084; // de metro a pie
let libra = peso * 2.20462; //de kilogramo a libra

console.log("la srta pesa:"+libra.toFixed(2)+"libras");
console.log("la srta mide:"+pie.toFixed(2)+"pies");
console.log("la srta tiene de busto:"+(busto * pulgad).toFixed(2)+"pulgadas");
console.log("la srta tiene de cadera:"+(cadera * pulgad).toFixed(2)+"pulgas");
console.log("la srta tiene de cintura"+(cintura * pulgad).toFixed(2)+"pulgadas");
}

ConversionDmedidas();