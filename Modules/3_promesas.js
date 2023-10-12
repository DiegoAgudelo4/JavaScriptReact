//callback: Es una funcion que se le pasa como parametro a otra funcion
function respuesta(res){
    return console.log(res);
}

function sumar (op1, op2, functionCallBack){
    let resp=op1+op2;
    functionCallBack(resp);
}
sumar(10,20,respuesta);

//que tipo de dato es una promesa, un objeto, si no es un tipo de dato primitivo entonces es un objeto
//por naturaleza las promesas son asincronas.
//reciben dos parametros, resolve-reject
//no es necesario los dos
//qué es?: representa la terminación o el fracaso de una operación asíncrona

let promesa= new Promise((res,rej)=>{
    let estado=false;
    if(estado){
        res("resolvió la promesa");
    }else{
        rej("se rechazó la promesa");
    }
});

//hay dos opciones
//opcion 1
/*
promesa
    .then((valor)=>console.log(valor))
    .catch((error)=>console.log(error));

//opcion 2
promesa.then(
    (valor)=>console.log(valor),
    (error)=>console.log(error)
);

//ejemplo de respuesta asincrona
let promesa2=new Promise(res=>{
    console.log("inicio de promesa2");
    setTimeout(()=>{
        res("resolvió la promesa2");
    },3000)
    console.log("fin de promesa2");
});

promesa2.then(valor=>console.log(valor));
*/


//en ES6+ se agregó async-await
//para parar todo hasta que se resuelva la promesa
//async: indicar a una funcion que regresa a una promesa, se coloca  ala funcion 'await function'
//await: indicar que tiene que esperar la respuesta de una promesa

async function functionConAsync(){
    return "ejemplo con async";
}

//como es una promesa, hay que resolverla
functionConAsync().then(x=>console.log(x));

async function functionConAsyncAwait(){
    console.log("inicio");
    let promesa= new Promise((res)=>{
        setTimeout(()=>{
            res("Se resolvió la promesa");
        },300);
    });
    console.log(await promesa);
    console.log("finaliza");
}

functionConAsyncAwait();
