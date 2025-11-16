//DESESTRUCTURACION
const person = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironmman'
};

const nombre = person.nombre;
const edad = person.edad;
const clave = person.clave;

console.log({nombre, edad, clave});

//lo podemos desestruturar de la siguiente manera
const employed = {
    cargo: 'Analista',
    sueldo: '5000'
}

const {cargo, sueldo: sueldaso} = employed;

console.log({cargo, sueldaso});

/*************** */
interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string; //rank: string | undefined;
}

const useContext = (hero: Hero) => {
    const {name, age, key, rank} = hero;

    return {
        keyName: key,
        KeyUser: {
            userName: name,
            userAge: age
        },
        keyRank: rank
    }
}

const hero1 = {
    name:'Batman',
    age: 40,
    key: 'Caballero de la Noche',
    rank: 'rank 1'
}

const context = useContext(hero1);
console.log(context);


//O TAMBIEN LO PUEDES DESESTRUCTURAR EN LOS MISMOS PARAMETROS
const useEmpleado = ({name, age, key, rank}: Hero) => {

    return {
        key,
        user: {
            name,
            age
        },
        rank
    }
}

const hero2 = {
    name:'Peter',
    age: 30,
    key: 'Hombre araña',
    rank: 'rank 2'
}

const {
    key, 
    user,
    //user: {name, age},
    rank
} = useEmpleado(hero2);
const {name, age} = user;

console.log({key, rank, name, age});




