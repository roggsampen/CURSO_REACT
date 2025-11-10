//Funciones tradicionales
function saludar(name: string): string {
    return `Hola ${name}`;
}

const mensaje = saludar('Goku');
console.log(mensaje);

//Funciones de flecha
const caminar = (name: string): string => {
    return `Hola ${name}, estas caminando`;
}

const mensaje2 = caminar('Vegeta');
console.log(mensaje2);

//llamada de una funcion dentro del objeto console
function getUser() {
    return {
        uid: 'ABC-123',
        userName: 'El_papi123'
    };
}

const user = getUser();
console.log(user);

const getUser2 = () => {
    return {
        uid: 'ABC-123',
        userName: 'El_papi123' 
    }
}

const user2 = getUser2();
console.log(user2);

