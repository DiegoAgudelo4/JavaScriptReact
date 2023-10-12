import Animal from "./Animal.js";
//forma directa
import validarToken,{API_KEY,PERFILES} from "./helpers.js";
//u otra forma, bajo un alias
//import validarToken,* as helpers from "./helpers.js";

const prueba = new Animal("Leon");
console.log(prueba.print());

console.log(validarToken());
console.log(API_KEY);
console.log(PERFILES[0]);

//console.log(helpers.API_KEY);
//console.log(helpers.PERFILES[0]);