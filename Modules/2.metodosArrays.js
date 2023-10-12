let equipos=["Medellín", "Nacional"];

//nunca van a cambiar la variable original, no son mutables, inmutables
//nunca los vamos a usar
for(let i=0;i<equipos.length;i++){
    console.log(equipos[i]);
}
//push-pop-shift, son mutables, modifican la variable original

//ingresa uno al final
equipos.push("Envigado");
console.log(equipos);

//elimina el ultimo
equipos.pop();
console.log(equipos);

//elimina el primero
equipos.shift();
console.log(equipos);

//inmutables map- filter-reduce-some-every}}

//el map puede: recorrer-extraer, transformar
let alumnos=["Ana", "Juan","Pedro"];
alumnos.map((alumno)=>{
    console.log(alumno);
})
let productos=[{name:"libro", cost: 10},{name:"cuaderno", cost: 5},{name:"borrador", cost: 15}]
let nombreProductos=productos.map((producto)=>{
    //se muestra solo el nombre
    console.log(producto.name);

    //agregamos el iva en la misma variable
    producto.iva=producto.cost*0.19;
    console.log(producto);
});
//se crea en un nuevo arreglo
let pdtosIVA=productos.map((p)=>{
    return {...p, iva:19};
});
console.log(pdtosIVA);

let FPC=[
    {nombre:"Nacional", ciudad:"Medellin", ligas:17, libertadores:2},
    {nombre:"Medellin", ciudad:"Medellin", ligas:10, libertadores:0},
    {nombre:"America", ciudad:"Cali", ligas:15, libertadores:0},
    {nombre:"Cali", ciudad:"cali", ligas:7, libertadores:0},
    {nombre:"OnceCaldas", ciudad:"Manizales", ligas:9, libertadores:1},
    {nombre:"Pasto", ciudad:"Pasto", ligas:3, libertadores:0},
];
//cada funcion itera
//Every: Todos cumplen-devuelve un booleano
let todosTienenLigas=FPC.every(equipo =>equipo.ligas>0);
console.log(todosTienenLigas);
let todosTienenLibertadores=FPC.every(equipo =>equipo.libertadores>0);
console.log(todosTienenLibertadores);

//Some: alguno cumple-devuelve un booleano
let algunoTieneLibertadores=FPC.some(equipo =>equipo.libertadores>0);
console.log(algunoTieneLibertadores);

//filter: devuelve los objetos que cumplan la condicion
let ganaronLibertadores=FPC.filter(eq=>eq.libertadores>0 && eq.ciudad==="Medellin").map(eq=>eq.nombre);
console.log(ganaronLibertadores);

//Reduce: recibe dos parametros
//{},0 inicializa la variable, en este caso, contador.
let totalLibertadores=FPC
        .filter(eq=>eq.libertadores>0)
        .reduce((contador, eq)=>(contador+=eq.libertadores),0);
console.log(totalLibertadores);

//{ligas:0,libertadores:0} inicializa la variable titulos
let totalTitulos=FPC.reduce((titulos,eq)=>{
    return{
            ligas:titulos.ligas+=eq.ligas,
            libertadores:titulos.libertadores+=eq.libertadores
        };
},
{ligas:0,libertadores:0});
console.log(totalTitulos);