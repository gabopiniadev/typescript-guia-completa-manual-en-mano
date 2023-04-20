"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'BatiSignal Activada!';
    };
    console.log(activateBatisignal());
    const heroName = returnName();
    console.log(heroName);
})();
