"use strict";
const msgJS = 'Hola Mundo'; //Esto es formato JavaScript
const msgTS = 'Hola Mundo'; //Esto es formato TypeScript
const heroe = {
    name: 'IronMan',
    edad: 45
};
heroe.edad = 20;
console.log(heroe.edad);
(() => {
    const a = 10;
    console.log(a);
})();
