/*let arreglo = [{nombre:"Luis", edad: 18, peso:65, altura:1.65}, {nombre:"Emiliano", edad: 18, peso:90, altura:1.70}];  // Un arreglo se hace con los corchetes y puede incluir cualquier tipo de dato 
//let Persona1 = {nombre:"Luis", edad: 18, peso:65, altura:1.65} /*Los objetos se hacen con llaves y requieren de atributos que es
//lo que caracteriza a tu objeto, como una descripcion 
//let Persona2 = {nombre:"Emiliano", edad: 18, peso:90, altura:1.70}
//Un areglo utiliza clave y valor, que funcionan como identificadores a los datos

arreglo.map(Personas=>{
console.log(`El nombre es: ${Personas.nombre} y la edad es: ${Personas.edad}`); /* para mostrar algo en especifico dentro del objeto se utiliza .Clave
la clave es lo que guarda el valor
})*/

const prompt=require("prompt-sync")();
function AgregarDatos (){

    let Datos = [];
    let edad = null;
    let nombre= "";
    nombre = prompt("Ingresa el nombre: ");
    edad = parseInt(prompt("Ingresar la edad: "));
    
    let persona = {nombre,edad};

        Datos.push(persona);
        console.log(Datos);
}
AgregarDatos();