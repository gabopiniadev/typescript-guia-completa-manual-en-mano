(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string, string] = [batman,superman];
    const villano:[string, number, boolean] = ['Lex Lutor',5,true];

    console.log(parejaHeroes);
  
    // Arreglos
    const aliados:Array<string> = ['Mujer Maravilla','Acuaman','San', 'Flash'];
    const aliadoss:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];

    aliados.forEach(v => console.log(v.toUpperCase()));
    aliadoss.forEach(v => console.log(v));
  
    //Enumeraciones
    enum fuerza{
      fuerzaAcuaman, 
      fuerzaBatman,
      fuerzaFlash = 5,
      fuerzaSuperman = 100,
    }

    const fuerzaFlash:fuerza = fuerza.fuerzaFlash;
    const fuerzaSuperman:fuerza = fuerza.fuerzaSuperman;
    const fuerzaBatman:fuerza = fuerza.fuerzaBatman;
    const fuerzaAcuaman:fuerza = fuerza.fuerzaAcuaman;
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }

    activar_batiseñal();
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }

    pedir_ayuda();
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length
    console.log( largoDelPoder );
  
  
  })()