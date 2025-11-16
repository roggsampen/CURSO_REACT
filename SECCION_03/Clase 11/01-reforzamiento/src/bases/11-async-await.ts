import type { GiphyResponse, Gif } from "../data/giphy.response";

// FETCH API
const API_KEY = 'vb772cLJ4jE5u6CN93cURsaT3gKR1BCn';



//Funcion para crear un elemento <img> en el main y insertamos la imagen
const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}

//FUNCION QUE REGRESA UNA PROMESA
const getImageUrl = async(): Promise<string> => {

    const myRequest = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

    const {data: datae}: GiphyResponse = await myRequest.json();

    return datae.images.original.url;
}

/*getImageUrl().then((url) => {
    createImageInsideDOM(url)
});*/
//es lo mismo que lo de arriba
getImageUrl().then(createImageInsideDOM);

//NOTA: La primera promesa de fetch se resuelve con un objeto Response que contiene información de la cabecera y el estado. Se necesita llamar al método .json() para procesar el cuerpo de la respuesta, el cual a su vez devuelve otra promesa


//PROMESAS EN CADENA
/*myRequest.then( (response) => response.json()
.then( ({data: datae}: GiphyResponse) => {
    //console.log(datae);
    //const imageUrl = datae.data.images.original.url;
    const imageUrl = datae.images.original.url;
    console.log(imageUrl);
    createImageInsideDOM(imageUrl);
}))
.catch((err) => console.error(err));*/


