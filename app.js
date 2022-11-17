let concesionaria = require('./modulo/moduloConcesionaria'); // requerimos las funionalidades
let fs = require('fs')
let autosDB = JSON.parse(fs.readFileSync('./data/autos.json', 'utf-8'))//20°
let personasDB = JSON.parse(fs.readFileSync('./data/personas.json', 'utf-8'))//19° 

console.log("Listado de autos completo:")
console.log(concesionaria.autos)

console.log("buscar auto por patente")
console.log(concesionaria.buscarAuto("ABC584"))

console.log("vender auto")
console.log(concesionaria.venderAuto('ABC584'))

console.log("autos para la venta")
console.log(concesionaria.autosParaLaVenta())

console.log("autos nuevos con menos de 100km")
console.log(concesionaria.autosNuevos())

console.log("lista de autos vendidos")
console.log(concesionaria.listaDeVentas())
 
console.log("importe total de autos vendidos")
console.log(concesionaria.totalDeVentas())

console.log("puede comprar o no un auto según capacidad de pago")
console.log(concesionaria.puedeComprar(autosDB[0], personasDB[0]))
console.log(concesionaria.puedeComprar(autosDB[0], personasDB[1]))

console.log("lista de autos que puede comprar una persona según su capacidad de pago")
console.log(concesionaria.autosQuePuedeComprar(personasDB[2]))

