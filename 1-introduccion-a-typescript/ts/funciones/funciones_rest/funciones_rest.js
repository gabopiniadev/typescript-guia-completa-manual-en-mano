"use strict";
(() => {
    const fullName = (firtName, ...restArg) => {
        return `${firtName} ${restArg.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
