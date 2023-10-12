//a partir de escmascript 6 hay 3 tipos de variables
//          Ambito/Scope      Restriccion
//var           Global            sí
//let           No Global         sí
//const         No global         No si es primitivo

function explicarVar(){
    var edad=20;
    edad=30;
    if(true){
        var edad=90;
        console.log(edad);
    }
    console.log(edad);
}

explicarVar();

function explicarlet(){
    let nota=20;
    nota=30;
    if(true){
        let nota=90;
        console.log(nota);
    }
    console.log(nota);
}
explicarlet();

//el const se puede modificar dentro del condicional porque está dentro de la funcion
//esto se puede hacer pero no al contrario, no es global.
function explicarConst(){
    const pi=20;
    const numeros=[1,2,3,4];
    console.log(typeof numeros);
    numeros.push(5);
    
    //pi=30;
    if(true){
        const pi=90;
        console.log(pi);

    }
    console.log(pi);
    console.log(numeros);
}
explicarConst();
