//Interfaces
/*interface Person {
    firstName: string;
    lastName: string;
    age: number;

    //el '?' lo hace opcional
    address?: {
        ubigeo: number;
        direccion: string;
    };
}*/

//Referencias a una Interfas
interface Person {
    firstName: string;
    lastName: string;
    age: number;

    //el '?' lo hace opcional
    address?: Address;
}

interface Address {
    ubigeo: number;
    direccion: string;
}

//*************************** */
const iroman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 23,
    address: {
        ubigeo: 15323,
        direccion: 'av. Miraflores 356'
    }
}

console.log(iroman);

