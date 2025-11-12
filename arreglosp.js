// agregar datos a un arreglo-Manipular
/* function Arreglos (){
    let frutas = ["Manzana", "Platano"];
    frutas.push(uvas);
    console.log (frutas);
}
Arreglos(); */



//Arreglos sin nada dentro, como agregarle cosas y cuantas cosas
const prompt = require ("prompt-sync") ();
function Arreglos (){

    let frutas = [];
    let iteracion = 0;
    let dimension;

    dimension=parseInt(prompt("Ingresa la cantidad de datos: "));
        while (iteracion<dimension){
            let frutitas=prompt("Ingresa la fruta: ");
            frutas.push(frutitas);
            iteracion ++;
        }
        for (let fruta of frutas){
            console.log (fruta);
        }
}
Arreglos();