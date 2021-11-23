//Creo la función "ponfoto()" que habilita el botón limpiar, pide nombre de la foto y llama a la función "colocarFoto()"
function ponfoto() {
    //Almaceno los botones y habilito el segundo
    let botones = document.getElementsByTagName("input");
    botones[botones.length - 1].disabled = false;

    //Pedimos al usuario la ruta de la foto y creo una constante que tendrá el directorio de la foto a añadir para que solo introduzca el nombre
    const ruta = "../Jonatan_Gomez_Pascual/img/";

    //Almaceno todas las fotos en un array para que en el prompt me comrpuebe la que introduce el usuario
    let totalFotos = ["aurora.jpg", "countess.jpg", "gadget.jpg", "gideon.jpg", "muriel.jpg", "terra.jpg"];
    
    //Pido el nombre de la foto y repito mientras el usuario y en caso de cadena vacía o de un nombre distinto al de las fotos añade la foto terra
    let foto = prompt("¿Que foto quieres añadir? Introduce una de las siguientes opciones:\naurora.jpg\ncountess.jpg\ngadget.jpg\ngideon.jpg\nmuriel.jpg\nterra.jpg");

    if (!totalFotos.includes(foto) || foto === "") {
        foto = "terra.jpg";
    }


    //Llamo a la función que añade la imagen al documento y le paso por parámetros la ruta y el nombre  de la foto
    colocarFoto(ruta, foto);
}

//Creo la función "colocarFoto()" que recibe la ruta y nombre de la foto
function colocarFoto(ruta, foto) {
    //almaceno el div que contiene las fotos
    let contenedor = document.getElementById("contenedor");

    //creo el elemento img y le doy la ruta en base a los parámetros recibidos
    let nuevaFoto = document.createElement("img");
    nuevaFoto.src = ruta + foto;
    nuevaFoto.alt = foto;
    nuevaFoto.className = "foto";
    console.log(nuevaFoto)
    contenedor.appendChild(nuevaFoto);
}


//Creo la función "limpiar" que elimina los nodos "img" creados
function limpiar() {
    //Almaceno los botones y habilito el segundo
    let botones = document.getElementsByTagName("input");
    botones[botones.length - 1].disabled = true;

    //almaceno el div que contiene las fotos
    let contenedor = document.getElementById("contenedor");

    //Bucle: mientras el contenedor tenga hijos, que borre el primero
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild)
    }
}