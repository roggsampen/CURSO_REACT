import type { GiphyResponse, Gif } from "../data/giphy.response";

// FETCH API
const API_KEY = 'vb772cLJ4jE5u6CN93cURsaT3gKR1BCn';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

//Funcion para crear un elemento <img> en el main y insertamos la imagen
const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}

//PROMESAS EN CADENA
myRequest.then( (response) => response.json()
.then( ({data: datae}: GiphyResponse) => {
    //console.log(datae);
    //const imageUrl = datae.data.images.original.url;
    const imageUrl = datae.images.original.url;
    console.log(imageUrl);
    createImageInsideDOM(imageUrl);
}))
.catch((err) => console.error(err));


