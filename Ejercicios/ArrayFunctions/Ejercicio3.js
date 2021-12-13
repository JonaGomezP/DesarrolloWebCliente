function devolver(){
    let listaNumeros = [1,4,7,10];
    listaNumeros.map(primerArray);
    listaNumeros.map(segundoArray);
    listaNumeros.map(tercerArray);

    //a
    function primerArray(e){
        console.log(Math.sqrt(e));
        return Math.sqrt(e);        
    }

    //b
    function segundoArray(e, i){
        console.log(Math.pow(e, i));
        return Math.pow(e, i);
    }

    //c
    function tercerArray(e){
        if(e % 2 == 0){
            console.log(e);
            return e;
        }
    }
}