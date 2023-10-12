/**
 * solo hay dos tipos de funciones
 * Funciones Declarativas (nombradas)
 */
//se puede llamar, porque javascript la sube a primer nivel (hoisting, elevar)
console.log(calcular(1));
                  //parametro
function calcular(valor=10){
    return valor*1000;
}
            //argumento
console.log(calcular(1));


/**
 * Funciones de Expression (anonimas)
 */


//no se puede llamar antes porque la funcion está dentro de una variable
const sumar=function(valor=10){
    return valor*1000;
}
console.log(sumar(1));

function saludar(){
    return "hola";
}
//en javascript, cuando una propiedad llama una funcion, se llama método.
const jugador={nombre:"María", age:20, estado: true, funcion: saludar()};
console.log(jugador);


