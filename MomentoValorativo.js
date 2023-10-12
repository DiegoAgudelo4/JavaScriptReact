/**
 * parte 1
 * a. Recorrer dos días de tareas
 * b. Convertir las duraciones de las tareas en horas,  en lugar de minutos
 * c. filtrar todo lo que tomó dos horas o más
 * d. multiplique el resultado por una tarifa por hora para facturacion (25)
 * e. sumar todo
 */
var monday=[
    {
        name:"write a tutorial",
        duration:"180"
    },
    {
        name:"some web development",
        duration:"120"},
];
var tuesday=[
    {
        name:"some more web development",
        duration:"180"},
    {
        name:"a whole lot of nothing",
        duration:"240"
    },
];
/*==========a. Recorrer dos días de tareas==========*/
var tasks = monday.concat(tuesday);

// Utiliza map para recorrer todas las tareas y mostrar el nombre y la duración
tasks.map((task)=> {
    console.log("Tarea: " + task.name + ", Duración: " + task.duration + " minutos");
});

//==========b. Convertir las duraciones de las tareas en horas,  en lugar de minutos==========
// Itera sobre las tareas y convierte las duraciones de minutos a horas
var tasksInHours = tasks.map((task)=> {
    var durationInHours = parseFloat(task.duration) / 60; // Convierte a horas
    task.duration = durationInHours; // Limita a dos decimales
    return task;
});

// Muestra las tareas con las duraciones convertidas a horas
tasksInHours.map((task)=> {
    console.log("Tarea: " + task.name + ", Duración: " + task.duration + " horas");
});
/*==========c. filtrar todo lo que tomó dos horas o más========== */
// Filtra las tareas que tomaron dos horas o más
var tasksTwoHoursOrMore = tasksInHours.filter((task)=> {
    return parseFloat(task.duration) >= 2.0; // Filtra tareas de 2 horas o más
});

// Muestra las tareas que tomaron dos horas o más
console.log("Tareas que tomaron dos horas o más:");
tasksTwoHoursOrMore.forEach((task)=> {
    console.log("Tarea: " + task.name + ", Duración: " + task.duration + " horas");
});

/*==========d. multiplique el resultado por una tarifa por hora para facturacion (25)========== */
var hourlyRate = 25; // Tarifa por hora
var billingDetails = tasksTwoHoursOrMore.map((task)=> {
    var cost = (parseFloat(task.duration) * hourlyRate); // Multiplica por la tarifa
    return {
        name: task.name,
        duration: task.duration,
        cost: cost
    };
});
// Muestra los detalles de facturación de las tareas
console.log("Detalles de facturación de las tareas que tomaron dos horas o más:");
billingDetails.map((task)=> {
    console.log("Tarea: " + task.name + ", Duración: " + task.duration + ", Costo: " + task.cost);
});
/* ==========e. sumar todo========== */
// Suma todos los costos de las tareas
var totalCost = billingDetails.reduce((acc, currentCost)=> {
    return acc + currentCost.cost; // Suma los valores numéricos
}, 0);

// Muestra el costo total
console.log("Costo total de las tareas que tomaron dos horas o más: $" + totalCost);


/**
 * Parte 2
 *  Punto 1
 * a. name de todos los dog
 * b. name del sex=f
 * c. total de edades
 * d. promedio de edades de los humanos
 * e. nombre humanos mayores de 50
 */

const arr=[
    {name:"luna",sex:"f",age:200,species:"dog"},
    {name:"jimmy",sex:"m",age:60,species:"human"},
    {name:"snoop",sex:"m",age:60,species:"human"},
    {name:"jennifer",sex:"f",age:60,species:"human"},
    {name:"yeller",sex:"f",age:20,species:"dog"},
];

//===========a. name de todos los dog===========
const dogNames = arr
    .filter(item => item.species === "dog")
    .map(dog => dog.name);

console.log(dogNames);
//=========== b. name del sex=f ===========
const femaleNames = arr
    .filter(item => item.sex === "f")
    .map(female => female.name);

console.log(femaleNames);
//=========== c. total de edades ===========
const totalAges = arr
    .map(person => person.age)
    .reduce((acc, age) => acc + age, 0);

console.log(totalAges);
//=========d. promedio de edades de los humanos=========
const humanAges = arr
    .filter(person => person.species === "human")
    .map(person => person.age);
const averageAge = totalAges / humanAges.length;
console.log("El promedio de edades de los humanos es:", averageAge);
//===========e. nombre humanos mayores de 50===========
const olderThan50Humans = arr
    .filter(person => person.species === "human" && person.age > 50)
    .map(person => person.name);

console.log("Nombres de humanos mayores de 50 años:", olderThan50Humans);


/**
 * 2. ambitos
 */
const a=1;
function suma(){
    const b=2;
    return suma2();
}
const b=3;
const c=1;
function suma2(){
    const c=3;
    return a+b+c;
}
console.log(suma());
/**
 * 3. Desestructuracion
 */
let obj={
    e:8,
    r:2,
}
let{r,e}=obj
console.log(e);

/**
 * 4 nose
 */

let j,k=[3,9,7];
console.log(k);