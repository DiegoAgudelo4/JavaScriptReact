//de un objeto se sacan propiedades

const jugador={nombre:"Luis", edad:24, posicion:"Delantero"};

//ES5
//const nombre=jugador.name;
//const edad=jugador.edad;

//ES6+
const {nombre, edad}=jugador;
console.log(nombre);


//de un arreglo se sacan elementos, por posiciones
const jugadores=["Messi", "Luis", "Ronaldo"];

//es5
const Messi=jugadores[0];
console.log(Messi);

//es6+
const [x, ,y]=jugadores;
console.log(x,y);

//se intercambian sin usar una variable auxiliar
let a=10;
let b=20;

[b,a]=[a,b];

console.log(a);
console.log(b);