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
/*  for(i=0;i<Datos.length;i++){
    if (Datos[i]%2==0){
        resultado+=Datos[i];
    }
/* .length nos manda la cantidad de datos dentro del arreglo, para imprimir 
un dato en especifico se le llama segun su lugar, comenzando con un 0 utilizando corchetes [0],[1],[4] pero solo uno por uno

Para llamar la cantidad de datos y sus valores correspondientes dentro del arreglo en el backstep se separan mencionando la
iteracion debido a su repeticion, para luego los datos dentro del arreglo sean escritos como "${Datos[i]}" */

 // console.log(`La suma de los datos es ${resultado}`)


// arreglos con for 
/* function DatosArreglos (){
    let Datos = [3,7,9,3,2,6];
for (let numeros of Datos){
    console.log (`los datos del arreglo son ${numeros}`);
}
 }
 DatosArreglos ();
 */

/* function DatosArreglos (){
let Datos = [3,7,9,3,2,6];
 */
/* for...in */
/* for (let numeros in Datos){

    console.log(`los datos son ${Datos[numeros]}`)
}
}
 DatosArreglos (); */

 /* function DatosArreglos (){
let Datos = [3,7,9,3,2,6]; */

/* /* for... each 
Datos.forEach(function(numeros)){
    console.log(numeros);
    }

/* con Arrow 
Datos.forEach(numeros=>console.log(numeros))
}
 DatosArreglos(); */

 // arreglo con reduce
/* 
function DatosArreglos (){
let Datos = [3,7,9,3,2,6];
let suma =0;
Datos.reduce((a,b)=>suma=a+b)
console.log(suma);
}
 DatosArreglos ();*/

 // arreglo con filter

/* function DatosArreglos (){
let Datos = [3,7,9,3,2,6];

const newArreglo=Datos.filter((numeros)=>{
    return numeros<7;
})
console.log(newArreglo);
}
 DatosArreglos (); */

 /* arreglo con map */
/* function DatosArreglos (){
let Datos = [3,7,9,3,2,6];
Datos.map(numeros=>console.log(numeros*2))
}
 DatosArreglos (); */

 // con while
function DatosArreglos (){
let Datos = [3,7,9,3,2,6];
let i=0;
/* while (i<Datos.length){
    console.log(Datos[i]);
    i++;
}  */
/* do while */
do {
    console.log(Datos[i]);
    i++;
}while(i<Datos.length)
}
 DatosArreglos ();


}  
DatosArreglos();