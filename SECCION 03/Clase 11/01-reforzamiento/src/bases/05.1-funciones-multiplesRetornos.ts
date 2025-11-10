//INTERFACES (interpretarlo como 'luce como')
interface User {
    uid: string;
    userName: string;
}

function getUser(): User {
    return {
        uid: 'ABC-123',
        userName: 'El_papi123'
    };
}

const user = getUser();
console.log(user);

//SIMPLIFICAR FUNCION DE FLECHA
    // cuando tienen un solo retorno
const caminar = (name: string): string => `Hola ${name}, estas caminando`;

const mensaje2 = caminar('Vegeta');
console.log(mensaje2);

    //return implicito de un objeto en la funcion de flecha agregandole el () al return
const getUser2 = (): User => ({
        uid: 'ABC-123',
        userName: 'El_papi123' 
    });

const user2 = getUser2();
console.log(user2);

//Ejercicio
const myNumbers: number[] = [1, 2, 3, 4, 5];

myNumbers.forEach(function(val) {
    console.log({val});
});

//hacemos lo mismo pero con la funcion de flecha
const myPlaneta: string[] = ['Marte', 'Jupiter', 'Urano'];

myPlaneta.forEach((planet) => console.log(planet));