//Ejercicio 6
// En este programa se pedirá al usuario que teclee un número cada vez. El proceso acaba
// cuando teclee un 0 en caso contrario mostrará la suma de todos los números tecleados
const prompt=require("prompt-sync")();
function SumaDnumeros (){
    
let resultado = 0;
Num = parseInt(prompt("Ingresa cualquier numero: "));
resultado += Num;

    while (Num != 0){
        Num = parseInt(prompt("Ingresa cualquier otro numero: "));

        resultado += Num;
    }
    console.log ("La suma de estos numeros es de: " + resultado);
}
    SumaDnumeros();