//funcion flecha, arrow function

const saludar=function(nombre){
    return `Hola ${nombre}, ¿cómo estás?`;
}
console.log(saludar("Ana"));

//'function'(){}
//()'=>'{}
//si hay un solo parametro no hay necesidad de un parentesis
//si abre llaves  siempres hay que retornar, hay que colocar la palabra return


const flecha= (nombre)=>{
    return `Hola ${nombre}, ¿cómo estás?, flecha`;
}
console.log(flecha("Ana"));

//pero no siempre es necesario abrir llaves
const flecha2=nombre=>  `Hola ${nombre}, ¿cómo estás?, flecha2`;
console.log(flecha2("Ana"));