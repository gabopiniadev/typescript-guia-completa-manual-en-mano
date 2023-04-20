(() => {
    const hero:string = 'Flash';

    function returnName():string {
        return hero;
    }

    const activateBatisignal = ():string => {
        return 'BatiSignal Activada!';
    }

    console.log(activateBatisignal());

    const heroName = returnName();

    console.log(heroName);
})()