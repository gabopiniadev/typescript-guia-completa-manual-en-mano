"use strict";
(() => {
    let avengers = 10;
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas!');
    }
    else {
        console.log('Estamos Salvados!!');
    }
    avengers = 123;
    avengers = Number('56A');
    console.log({ avengers });
})();
