const prompt=require("prompt-sync")();
function SumaDsueldos () {

    let Datos = [];
    let nombre = ""
    let edad = null;
    let sueldo = null;
    let i = 1;

        let cantidad = parseInt(prompt("Ingresa la cantidad de personas que quieres registrar: "));
        while (i <= cantidad){

            console.log(`Datos de la persona ${i}`);

            nombre = prompt("Ingresa el nombre de la persona a registrar: ");
            edad = parseInt(prompt("Ingresa la edad de la persona a registrar: "));
            sueldo = parseInt(prompt("Ingresa el sueldo de la persona a registrar: "));
            i++;

            let Personas = {nombre,edad,sueldo};
            Datos.push(Personas);
        }
        let SueldosT = 0;

        Datos.map(Personas=>{SueldosT += Personas.sueldo; console.log(`${Personas.nombre} de ${Personas.edad} años tiene un sueldo de ${Personas.sueldo} pesos`)});

            console.log(`dando un total de ${SueldosT} pesos`)
}
SumaDsueldos ();
