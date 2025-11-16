import type { CSSProperties } from "react";

const fristName = 'Fernando';
const lastName = 'Herrera';

const fovaritesGames = ['Elden Ring', 'Valorant', 'Metal Slug'];
const isActive = true;

const address = {
    departamento: 'Lima',
    provincia: 'Miraflores'
}

const myStyles: CSSProperties = {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    marginTop: 30
}

export function MyAwesomeAoo() {

    return(
        <>
            <h1> {fristName} </h1>
            <h3> {lastName} </h3>

            <p>{fovaritesGames.join(', ')}</p>
            <p>{2+2}</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p
                style = {myStyles}
            > { JSON.stringify(address)} </p>

        </>
    );
}