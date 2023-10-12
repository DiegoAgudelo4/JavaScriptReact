/**
 *          REST (para parametro)
 * (...)
 *          SPREAD (para argumentos)
 */

//REST
//le dice que va a recibir muchos parametros, debe ir al final spread o rest
//sirve para recibir una cantidad n de parametros

function calcularSaldo(...valores){
    let total=0;
    //callback, una funcion que llama a otra funcion
    valores.forEach((valor)=>(total+=valor));
    return total;
}
//se pueden enviar todos los que quiera.
console.log(calcularSaldo(10,20,20,100));

//Spread
const saldoInicial=10;
const saldos=[10,20,30,40];
//sirve para arreglos y para objetos
const saldoTotal=[saldoInicial,...saldos];
console.log(saldoTotal);
console.log(calcularSaldo(...saldoTotal))