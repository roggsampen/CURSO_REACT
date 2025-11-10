//TAREA
const useState = (namer: string) => {
    return [
        namer,
        (setNamer:string) => {console.log(setNamer)}
    ] as const
}

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


