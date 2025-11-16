//PROMESAS
const myPromise = new Promise<number>( (resolve, reject) => {

    setTimeout(() => {
        resolve(100);
        reject('Mi amigo se perdió');
    }, 2000);

} );

myPromise.then((myMoney) => {
    //Si la PROMESA es exitosa
    console.log(`Tengo mi dinedo de ${myMoney} dolares.`);
}).catch((razonFallo) => {
    //Si la PROMESA falla
    console.warn(razonFallo);
}). finally(() => {
    //Siempre se ejecuta sea cual sea el resultado de la PROMESA
    console.log('Pues a seguir con mi vida.');
});


