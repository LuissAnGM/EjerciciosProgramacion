//Practica 2 Ejercicio 4-Compra y Descuentos

const libros = 568
const discos = 45 
const tocadisco = 678

const cantidadDlibros = 4
const cantidadDdiscos = 3
const cantidadDtocadisco = 1

const descuentoLibro = 0.20;      // 20% del descuento en libros
const descuentoDisco = 0.15;      // 15% del descuento en los discos
const descuentoProntoPago = 0.02; // 2% de la compra total

let subtotalLibros = libros * cantidadDlibros * (1 - descuentoLibro);
let subtotalDiscos = discos * cantidadDdiscos * (1 - descuentoDisco);
let subtotalTocadiscos = tocadisco * cantidadDtocadisco;

let totalDcompra = subtotalLibros+subtotalDiscos+subtotalTocadiscos;
let descuentofinal = totalDcompra * descuentoProntoPago;
let totalFinal = totalDcompra - descuentofinal;

console.log("el total final a pagar, con descuento es de "+ totalFinal.toFixed(2)+" pesos");