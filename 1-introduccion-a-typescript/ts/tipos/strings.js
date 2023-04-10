"use strict";
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Heroe: Volcan Negro`;
    console.log(`Yo soy ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No hay Data!'); //El signo de interrogacion nos indica que si por alguna razon, el resultado de batman[10] es error, el sistema nos indique el error
})();
