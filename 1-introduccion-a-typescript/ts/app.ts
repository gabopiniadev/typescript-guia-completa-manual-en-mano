const msgJS = 'Hola Mundo'; //Esto es formato JavaScript
const msgTS: string = 'Hola Mundo'; //Esto es formato TypeScript

const heroe = {
    name: 'IronMan',
    edad: 45
}

heroe.edad = 20;

console.log(heroe.edad);

(() => {

    const a:number = 10;

    console.log(a);


})()