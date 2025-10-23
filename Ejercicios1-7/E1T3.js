// Ejercicio 1
// Realiza un programa que calcule la potencia de un número, dado este y su exponente.
// pueden ocurrir tres casos:
// a. * El exponente sea positivo: imprime resultado en pantalla.
// b. * El exponente sea 0, el resultado es 1.
// c. * El exponente sea negativo, el resultado es 1/potencia con el exponente positivo

const prompt=require("prompt-sync")();
function Exponente (){

   let Num1
   let poten
   let resultado = 1;

    Num1 = parseInt(prompt("Ingresa tu numero que quieres Elevar: "));
    poten = parseInt(prompt("Ingresa la potencia: "));

        if (Num1>0){
            for (i=1;i<=poten;i++){
                resultado = resultado * Num1
            }
            console.log(`El resultado de ${Num1} elevado a ${poten} es igual a ${resultado}`);
        }
        else {
            console.log(`El resultado de ${Num1} elevado a ${poten} es igual a ${resultado}`);
        }
}
    Exponente();
