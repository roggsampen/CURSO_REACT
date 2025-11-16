//import { heroes } from "../data/heroes.data";
//import { heroes as misSuperHeroes } from "../data/heroes.data"; //renombrar la importacion
//import superHeroes from "../data/heroes.data"
import { heroes, type Hero, type Owner, Poder } from "../data/heroes.data";


const getHeroById = (id: number): Hero | undefined => {
    
    const objetoHeroe = heroes.find((elem) => {
        return elem.id === id;
    });

    /*if (!objetoHeroe) {
        throw new Error(`No existe un heroe con el id: ${id}`);
    }*/

    return objetoHeroe;
}

console.log( getHeroById(1) );

//---------------------
export const getHeroesByOwner = (power: Poder): Hero[] | undefined => {

    const objetoOwner = heroes.filter( (val) => {
        return val.poder === power;
    });

    return objetoOwner;
}

