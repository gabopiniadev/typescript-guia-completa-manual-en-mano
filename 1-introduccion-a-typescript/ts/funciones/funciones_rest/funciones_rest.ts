(() => {

    const fullName = (firtName:string, ...restArg:string[]):string => {
        return `${firtName} ${restArg.join(' ')}`
    }

    const superman = fullName('Clark','Joseph','Kent');

    console.log({superman});

})()