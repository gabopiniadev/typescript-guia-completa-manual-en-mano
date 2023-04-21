"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundi esta Salvado!!`;
    let myFunctions1; // Declaramos nuestra variable como tipo Funcion.
    let myFunctions2; //Declaramos nuestra variable como Funcion y recibe 
    //Parametros Numericos.
    let myFunctions3; //Declaramos nuestra variable como Funcion y recibe parametros
    //Strings
    let myFunctions4; //Declaramos nuestra variable como Funcion y no recibe ningun parametros.
    myFunctions2 = addNumbers;
    console.log(myFunctions2(10, 59));
    myFunctions3 = greet;
    console.log(myFunctions3('Gabriel'));
    myFunctions4 = saveTheWorld;
    console.log(myFunctions4());
})();
