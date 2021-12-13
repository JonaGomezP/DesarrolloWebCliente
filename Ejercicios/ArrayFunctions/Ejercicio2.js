
function mostrarLongitud(){
    let cadena = "puta vida tt"
    let lista = cadena.split(" ");

    lista.forEach(mostrar)
    function mostrar(e){
        console.log(e + ": tiene " + e.length + " letras");
    }
    
}

