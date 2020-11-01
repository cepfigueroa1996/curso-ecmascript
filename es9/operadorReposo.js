let obj = {
	name: 'Carlos',
	age: 22,
	country: 'VE'
}

let { name, ...all } = obj;

console.log(name, all);

let obj2 = {

	age: 22,
	country: 'VE'
}

let obj3 = {
	name: 'Carlos',
	...obj2
}

console.log(obj3);


