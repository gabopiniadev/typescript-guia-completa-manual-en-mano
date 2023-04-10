(() => {

    const batman:string = 'Batman';
    const linternaVerde:string = "Linterna Verde";
    const volcanNegro:string = `Heroe: Volcan Negro`;

    console.log(`Yo soy ${batman}`);
    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || 'No hay Data!') //El signo de interrogacion nos indica que si por alguna razon, el resultado de batman[10] es error, el sistema nos indique el error

})()