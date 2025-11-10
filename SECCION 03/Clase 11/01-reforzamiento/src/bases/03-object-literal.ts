//Objetos literales

const iroman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 23,
    address: {
        ubigeo: 15323,
        direccion: 'av. Miraflores 356'
    }
}

//no rompe la referencia, sigue apuntado al mismo espacio de memoria que iroman. Es decir se se le hace algun cambio a esta constante tambien se le hace a la constante iroman
const elPinguino = iroman;

//hace un clon pero solo a las propiedades principales es decir rompe la referencia en los primeros niveles
const spiderman = {...iroman};

//hace un clon y baja a todos los niveles y rompe la referencia
const batman = structuredClone(iroman);

elPinguino.firstName = "El Pinguino";

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.address.direccion = 'Av. Arequipa 85'; //aca no rompio la referencia por ser otro nivel

batman.firstName = 'Batman';
batman.lastName = 'El caballero de la Noche';
batman.address.direccion = 'AV. GARCILAZO DE LA VEGA 774';

console.log(elPinguino, iroman, spiderman, batman);

