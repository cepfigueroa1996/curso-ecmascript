let name = "Carlos";
let age = 23;

obj = {name: name, age: age}; //tradicional

obj2 ={name, age}; //es6

////ARROW FUNCTION



const  names = [
	{name: 'Carlos', age: 22},
	{name: 'Daniela', age: 20},
	{name: 'Yesika', age: 19}
];

//TRADICIONAL

let list = names.map(function(item){
	console.log(item.name);
})

//ES6

let list2 = names.map(item =>{
	console.log(item.name);
})