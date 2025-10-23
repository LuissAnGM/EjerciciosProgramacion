// Ejercicio 3
/* El director de una escuela está organizando un viaje de estudios y requiere determinar
cuánto debe cobrar a cada alumno y cuánto debe pagar a la compañía de viajes por el
servicio. La forma de cobrar es la siguiente:
a. * Si son 100 alumnos o más, el costo por cada alumno es de $65.
b. * De 50 a 99 alumnos, el costo es de $70.
c. * De 30 a 49 alumnos, el costo es de $95.
d. * Menos de 30 alumnos, el costo de la renta del autobús es de $4000, sin
importar el número de alumnos.
Realiza un programa que permita determinar el pago a la compañía de autobuses y lo
que debe pagar cada alumno por el viaje.*/

const prompt=require("prompt-sync")();
function viaje (){
    let costo = 0;

    Alum = parseInt(prompt("Cuantos alumnos iran de viaje: "));

    if (Alum >=100){
       costo = Alum * 65;
        console.log (`Si van ${Alum} Alumnos de viaje cada alumno pagara 65 pesos, siendo un total de ${costo} pesos para el bus`);
    }
    else if (Alum>=50 && Alum <=99){
        costo = Alum * 70;
        console.log (`Si van ${Alum} Alumnos de viaje cada alumno pagara 70 pesos, siendo un total de ${costo} pesos para el bus`);
    }
    else if (Alum>=30 && Alum <=49){
        costo = Alum * 95;
        console.log (`Si van ${Alum} Alumnos de viaje, cada alumno pagara 95 pesos, siendo un total de ${costo} pesos para el bus`);
    }
    else {
        costo = 4000;
        console.log (`Si van ${Alum} Alumnos de viaje, el costo de la renta del bus seria de ${costo}`)
    }
}
    viaje();