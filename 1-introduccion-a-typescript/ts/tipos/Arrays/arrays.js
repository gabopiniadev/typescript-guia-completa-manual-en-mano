"use strict";
(() => {
    let avengers = ['IronMan', 'Thor', 'AntMan', 'Loki'];
    let numeros = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    numeros.push(11);
    console.log(numeros);
    console.log(avengers);
    avengers.forEach(v => console.log(v.toUpperCase()));
})();
