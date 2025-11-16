//TAREA
const useState = (namer: string) => {
    return [
        namer,
        (setNamer:string) => {console.log(setNamer)}
    ] as const
}
//nota: 'as const' le dice a TypeScript que el arreglo tiene una estructura fija (una tupla), permitiéndole saber que el primer elemento siempre es un string y el segundo siempre es una función, lo cual es crucial para la seguridad

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');

//----------
const heroe1 = {
    nombre: 'Peter',
    skill: 'Hombre araña'
}

const { nombre: a, skill} = heroe1;
console.log(a, skill);

//-----------
const heroe2 = ['Batman', 'Caballero de la Noche'];

const [ c, d ] = heroe2;
console.log(c, d);


