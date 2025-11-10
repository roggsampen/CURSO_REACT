export interface Hero {
    id: number;
    name: string;
    owner: Owner;
    poder: Poder;
}

//REGRAL
export type Owner = 'DC' | 'Marvel';

//ENUMERACION
export enum Poder {
    volar, //0
    nadar, //1
    rayoLaser = 'Laser' //laser
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
    poder: 0
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
    poder: Poder.rayoLaser
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
    poder: Poder.nadar
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
    poder: Poder.rayoLaser
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
    poder: 1
  },
  {
    id: 6,
    name: 'Linterna Verde',
    owner: 'Marvel',
    poder: Poder.rayoLaser
  }
];

export default heroes;