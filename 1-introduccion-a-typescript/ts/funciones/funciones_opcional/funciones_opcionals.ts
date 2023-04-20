(() => {

    const fullName = (firstName:string, lastName?:string):string  => {
        
      return `${firstName} ${lastName || '------'}`.toUpperCase();
           
    }

    const name = fullName('Gabriel');

    console.log(name);

})()