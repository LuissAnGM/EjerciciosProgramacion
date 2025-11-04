// Declaracion de arreglos 
/*
Tipos de datos-Primitivos
Number
String 
boolean
Null
undifined
tipos de datos-compuestos
object
Array
function
*/

function DatosArreglos (){
    let Datos = [3,7,9,3,2,6];
    let resultado = 0;
 for(i=0;i<Datos.length;i++){
    if (Datos[i]%2==0){
        resultado+=Datos[i];
    }
/* .length nos manda la cantidad de datos dentro del arreglo, para imprimir 
un dato en especifico se le llama segun su lugar, comenzando con un 0 utilizando corchetes [0],[1],[4] pero solo uno por uno

Para llamar la cantidad de datos y sus valores correspondientes dentro del arreglo en el backstep se separan mencionando la
iteracion debido a su repeticion, para luego los datos dentro del arreglo sean escritos como "${Datos[i]}" */
 }
 console.log(`La suma de los datos es ${resultado}`)
}
DatosArreglos();