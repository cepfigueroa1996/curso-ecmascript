

//TRADICIONAL
function miFuncion(name, age, country) {
	var name = name || 'oscar';
	var age = age || 32;
	var country = country || 'VE';
	console.log(name, age, country);
}



//ES6
function miFuncion(name = 'oscar', age = 32, country = 'VE') {
	console.log(name, age, country);
}

miFuncion();
miFuncion('Carlos', 23, 'cl');


