import { ItemCounter } from "./shopping-cart/ItemCounter";

interface arrayCart {
    nombreProducto: string;
    cantidadProducto: number;
}

const arrayProductos: arrayCart[] = [
    {nombreProducto: 'Nintendo Switch', cantidadProducto: 1},
    {nombreProducto: 'Steam', cantidadProducto: 2},
    {nombreProducto: 'Play Station', cantidadProducto: 5},
]

export function FirstStepsApp() {
    return(
    <>
        <h1>Carrito de Compras</h1>

        {
            arrayProductos.map(({nombreProducto, cantidadProducto}) => (
                //return implicito
                <ItemCounter key={nombreProducto} name={nombreProducto} quantity={cantidadProducto} />
            ))
        }
        
        {/* <ItemCounter name="Nintendo Switch" quantity={12} />
        <ItemCounter name="Steam" quantity={13} />
        <ItemCounter name="Play Station" quantity={14} /> */}
    </>
    );
}