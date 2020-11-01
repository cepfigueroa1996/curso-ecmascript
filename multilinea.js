//TRADICIONAL

let lorem = "texto de prueba salto de linea \n"+
			"segunda linea de la prueba";

//ES6

let lorem2 = `texto de prueba salto de linea 
segunda linea de la prueba`;


//EXTRAER ELEMENTOS

///TRADICIONAL

let personas={
	name: "Carlos",
	age:22,
	country: 'VE'
};

console.log(personas.name, personas.age);

//ES6

let {name, age, country} = personas;
console.log(name, age, country);


//ARREGLO

let team1 = ['Oscar', 'Carlos', 'Billy'];
let	team2 = ['daniela','paola', 'sasha'];

//es6


let equipos = ['pablo', ...team1, ...team2];

console.log(equipos);


//variables

//TRADICIONAL
{
	var globalVar = "hola";
}

{
	let globalLet = "hola"; //es6
}

const a = 'b';//este sera su valor y no se podra modificar;

a ="c"; //no permitido ya que solo se le puede asignar un valor constante 

console.log(a);