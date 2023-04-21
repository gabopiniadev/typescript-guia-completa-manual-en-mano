(() => {

    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name:string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundi esta Salvado!!`;

    let myFunctions1: Function; // Declaramos nuestra variable como tipo Funcion.
    let myFunctions2: (y: number, z: number) => number; //Declaramos nuestra variable como Funcion y recibe 
    //Parametros Numericos.
    let myFunctions3: (y: string) => string; //Declaramos nuestra variable como Funcion y recibe parametros
    //Strings
    let myFunctions4: () => string; //Declaramos nuestra variable como Funcion y no recibe ningun parametros.

    myFunctions2 = addNumbers
    console.log(myFunctions2(10, 59));

    myFunctions3 = greet
    console.log(myFunctions3('Gabriel'));

    myFunctions4 = saveTheWorld
    console.log(myFunctions4());


})()