//IMPORTACIONES DE REACT AL INICIO
import { useState, type CSSProperties } from "react";

//IMPORTACIONES DE TERCEROS

//IMPORTACIONES PERSONALIZADAS

//IMPORTACIONES CSS AL ULTIMO
// import './ItemCounter.css';
    //para importar el css como modulo
import styles from './ItemCounter.module.css'

interface Props {
    name: string;
    quantity?: number;
};

// const myStyles2:CSSProperties = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: 10,
//     marginTop: 10
// }

// const myStyles3:CSSProperties = {
//     width: 150,
//     color: 'red'
// }

export const ItemCounter = ({name: nombre, quantity: cantidad = 1}: Props) => {

    //Hooks: estado local del componente
    const [count, setCount] = useState(cantidad);

    const handleAumenta = () => {
        setCount( count + 1 );
    }

    const handleDisminuye = () => {
        if(count === 1) return;
        setCount( count - 1 );
    }

    return(
        <section
            //para usar el css con modulos
            className={styles['item-row']}
            // className="item-row"
            //style = {myStyles2}
        >
            <span
                //para usar el css con modulos
                className={ styles.itemText }
                // className="item-text"
                // style={myStyles3}
            >{ nombre }</span>
            <button
                onClick={handleAumenta}
                //onClick={dandoClic}
                // onClick = {() => {
                //     dandoClic();
                // }}
            >+1</button>
            <span>{count}</span>
            <button
                onClick={handleDisminuye}
            >-1</button>
        </section>
    );
}