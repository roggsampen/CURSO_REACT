
//Arrays
const myArray = [1,2,3, true, {}];
const miArreglo = [1, 2, 3, 4];
const miArreglo2 = [1, 2, 3, 4, 'Hola', '5'];

miArreglo2.push(11);
miArreglo2.push('12');

for(const num of miArreglo2) {
    console.log(num + ': algo');
    console.log(num + 10);
}

//con Tyscrips lo podemos solucionar antes que genere el error
const miArray2: number[] = [1, 2, 3, 4, 5, 6];

//referencia enlazada de un array (no hacerlo si quieres un nuevo array), en este caso el push le afectaria a  ambos array
const miArray3 = miArray2;
miArray3.push(7);

console.log({miArray2, miArray3});

/*ahora veremos como podemos separar esos 2 arrays y que sean diferentes, se hace con el operador spread '...'. Pero esto solo afecta al 1er nivel
ahora si quieres afectar a todos los niveles, podemos usar el structureClones()*/
const miArray4 = [...miArray2];
miArray4.push(9);
console.log({miArray2, miArray4});

//tambien podemos hacer que el array acepte dos tipos de dato, pero tener en cuenta que siempre se debe definir con un solo tipo de dato
const miArray5: (number|string) [] = [1, 2, 3, 4, 'hola'];

miArray5.push(5);
miArray5.push('Mundo');

console.log({miArray5});




