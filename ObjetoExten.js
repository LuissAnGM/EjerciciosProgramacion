const prompt=require(`prompt-sync`)();
function ObjetosExtensos (){

    let Datos = [];
    let nombre = "";
    let edad = null;
    let dedicacion = "";
    let i = 0;

        let cantidad = parseInt(prompt("Agrega la cantidad de personas que deseas: "));

    while(i < cantidad){

        nombre = prompt("Ingresa el nombre de la persona que quieres agregar: ");
        edad = parseInt(prompt("Ingresa la edad de la persona que quieres agregar: "));
        dedicacion = prompt("Ingresa a lo que se dedica esta persona: ");
        i++;

        let Personas = {nombre,edad,dedicacion};
         Datos.push(Personas);
    }
   
    console.log(Datos);
}
ObjetosExtensos();