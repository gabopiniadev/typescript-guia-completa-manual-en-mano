(() => {

    let avengers:number = 123;
    let avenger:any = 12345;
    avenger = 'Hola Mundo!';

    let power;
    let exists;

    avenger = 'Dr. Strange';
    //avenger = 123.45678;

    console.log((avenger as string).charAt(4)); // esto es un Casteo a la varuable avenger

    
})()