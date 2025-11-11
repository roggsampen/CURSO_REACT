// FETCH API
const API_KEY = 'vb772cLJ4jE5u6CN93cURsaT3gKR1BCn';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

/*myRequest.then( (response) => {
    console.log(response);
    
    response.json().then( (datae) => {
        console.log(datae);
    });
}).catch((err) => {
    console.error(err);
});*/

//PROMESAS EN CADENA
myRequest.then( (response) => response.json()
.then( (datae) => {
    //console.log(datae);
    
    const imageUrl = datae.data.images.original.url;
    console.log(imageUrl);

    //creamos un elemento <img> en el main y insertamos la imagen
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;

    document.body.append(imgElement);
    
}))
.catch((err) => console.error(err));


