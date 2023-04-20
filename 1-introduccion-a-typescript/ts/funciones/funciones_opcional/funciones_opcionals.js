"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '------'}`.toUpperCase();
    };
    const name = fullName('Gabriel');
    console.log(name);
})();
