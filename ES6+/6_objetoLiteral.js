const nombre="Luis"
const equipo="Liverpool";
const edad=24;

//ES5
const jugador={nombre:nombre, equipo: equipo, edad:edad};
console.log(jugador)

//ES76+ si los nombres de la propiedad y el nombre del valor es el mismo se puede colocar así...
const jugador2={nombre, equipo, edad};
console.log(jugador2)