//Practica 2 Ejercicio 9-Suma De Pares
let sumatoria = 0
let i

for (i = 500; i <=800; i++){
    if (i % 2 ===0){
        sumatoria += i;
    }
}
console.log ("La suma de los pares es de "+ sumatoria);