let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));


let valor = "               hola";
let valor2 = "hola           ";


console.log(valor2.trimEnd());
console.log(valor.trimStart());



let objeto = [["name", "oscar"], ["name", "carlos"]];

console.log(Object.fromEntries(objeto));