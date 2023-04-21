"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    console.log(parejaHeroes);
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    const aliadoss = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    aliados.forEach(v => console.log(v.toUpperCase()));
    aliadoss.forEach(v => console.log(v));
    //Enumeraciones
    let fuerza;
    (function (fuerza) {
        fuerza[fuerza["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        fuerza[fuerza["fuerzaBatman"] = 1] = "fuerzaBatman";
        fuerza[fuerza["fuerzaFlash"] = 5] = "fuerzaFlash";
        fuerza[fuerza["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(fuerza || (fuerza = {}));
    const fuerzaFlash = fuerza.fuerzaFlash;
    const fuerzaSuperman = fuerza.fuerzaSuperman;
    const fuerzaBatman = fuerza.fuerzaBatman;
    const fuerzaAcuaman = fuerza.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    activar_batiseñal();
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    pedir_ayuda();
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
    // Funciones Básicas
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    //Parametros por defecto
    const llamarBatman = (llamar = true) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    // Rest?
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    // Tipo funcion
    const noHaceNada = (numero, texto, booleano, arreglo) => {
    };
    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
    console.log(noHaceNadaTampoco);
})();
