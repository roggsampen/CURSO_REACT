// RESTRUCTURACION DE ARRAYS

const caracterNames = ['Goku', 'Vegeta', 'Trunks'];

const [ p1, p2 ] = caracterNames;
const [ , , p3] = caracterNames;

console.log({ p1, p2, p3 });

//RESTRUCTURACION CON VALORES DE FUNCIONES, porque esta retornando un array
const returnArrayFn = () => {
    //return ['ABC', 123];
   
    //usar cuando siempre va usar un string al inicio y un number al final
    return ['ABC', 123, true] as const;
}

const [ letras, numeros, booleanos ] = returnArrayFn();

console.log({ letras, numeros, booleanos});
console.log(numeros + 100); //aca tyscript no sabe si es un string o un numero



