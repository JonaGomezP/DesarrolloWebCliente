window.onload = () => {
    //Capturo el botón y le asigno la función "obtenerResultados()"
    let boton = document.querySelector("input");
    boton.addEventListener("click", obtenerResultados);
}

function obtenerResultados() {

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
    firulais.open('GET', "http://www.jaimeweb.es/medac/datos.json");

    //Crear la funcion para manejar los datos que me llegan (se asocia al evento LOAD)
    firulais.addEventListener('load', function (datos) {
        let respuesta = JSON.parse(datos.target.response);

        //Resultado
        console.log(respuesta);

        for (const objeto of respuesta) {
            for (const key in objeto) {
                console.log(objeto[key]);
            }
        }
    });

    //Enviar la peticion que será procesada
    firulais.send();

}