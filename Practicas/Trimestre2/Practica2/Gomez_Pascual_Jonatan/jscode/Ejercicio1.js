window.onload = () => {
    //Capturo el botón y le asigno la función "obtenerUsuario()"
    let boton = document.querySelector("input");
    boton.addEventListener("click", obtenerUsuario);
}

function obtenerUsuario() {
    //Capturo el div donde se añade el contenido
    let div = document.querySelector("div");

    //Creo el artículo donde va cada usuario
    let articulo = document.createElement("article");
    articulo.className = "usuario";

    //Creo la imagen que se va a mostrar
    let imagen = document.createElement("img");





    //Creo el objeto XMLHttpRequest
    //"Firulais" es la variable que va a almacenar el objeto
    let firulais;
    if (window.XMLHttpRequest) {
        firulais = new XMLHttpRequest();
    }
    else {
        firulais = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //Crear la peticion de datos
    //Paso dos parámetros. El primero el verbo o método de envío y el segundo la dirección donde envía la petición
    firulais.open('GET', "https://randomuser.me/api");

    //Creo la funcion para manejar los datos que me llegan (se asocia al evento LOAD)
    firulais.addEventListener('load', function (datos) {
        let respuesta = JSON.parse(datos.target.response);

        //Apartado A)
        console.log(respuesta);

        //Apartado B)
        //Accedo a cada valor del objeto (te lo muestro para enseñarlo como ejemplo);
        console.log(respuesta["results"][0]["name"]["first"]);
        //Añado al artículo el contenido de cada clave (laas que pide Jaime)
        articulo.textContent += respuesta["results"][0]["name"]["first"] + " " + respuesta["results"][0]["name"]["last"] + ": " + respuesta["results"][0]["dob"]["age"];
        //Añado la ruta de la imagen a la etiqueta "img" creada en la línea 16
        imagen.src = respuesta["results"][0]["picture"]["medium"];
        //Añado al artículo la imagen
        articulo.appendChild(imagen)
        //Añado al div cada artículo que se vayan creando
        div.appendChild(articulo);
    });

    //Enviar la peticion que será procesada
    firulais.send();

}
