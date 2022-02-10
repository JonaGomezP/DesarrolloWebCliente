window.onload = () => {
    //Capturo el botón para obtener profes y le asigno la función "obtenerProfesores()"
    let botonRecibir = document.querySelector("[type='button']");
    botonRecibir.addEventListener("click", obtenerProfesores);

    //Capturo el botón para enviar datos y le asigno la función "enviarDatos()"
    let botonEnvia = document.querySelector("[type='submit']");
    botonEnvia.addEventListener("click", (e) => {
        e.preventDefault();
        //Utilzo la forma "Formdata"

        //Obtengo todos los datos del formulario juntos
        let dildo = document.forms[1];
        var formulario = new FormData(dildo);

        console.log(formulario);

        //Creo el objeto XMLHttpRequest
        //"shit" es la variable que va a almacenar el objeto
        let shit;
        if (window.XMLHttpRequest) {
            shit = new XMLHttpRequest();
        }
        else {
            shit = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //Envío los datos con el método POST al archivo que gestiona los datos a la BBDD
        shit.open('POST', 'http://www.jaimeweb.es/medac/setProfesores.php');

        //Creo la funciona para manejar los datos que llegan y asociarla al evento LOAD
        shit.addEventListener('load', function (datos) {
            let respuesta = datos.target.response;
            console.log(respuesta);
        });

        //Paso 4: Enviar peticion
        shit.send(formulario);
    });
}

function obtenerProfesores() {
    //Capturo el div donde muestra los datos de los profesores
    let div = document.getElementById("salida");
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
    firulais.open('GET', "http://www.jaimeweb.es/medac/getProfesores.php");

    //Crear la funcion para manejar los datos que me llegan (se asocia al evento LOAD)
    firulais.addEventListener('load', function (datos) {
        let respuesta = JSON.parse(datos.target.response);

        //Apartado A) y B)

        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        console.log(respuesta);
        for (const objeto of respuesta) {
            if (respuesta.indexOf(objeto) > 0) {
                let ficha = document.createElement("article");
                ficha.className = "ficha";
                for (const key in objeto) {
                    let parrafo = document.createElement("p");
                    parrafo.innerHTML += objeto[key] + "</br>";
                    if (key == "nombre") {
                        ficha.insertBefore(parrafo, ficha.firstChild);
                    } else {
                        ficha.appendChild(parrafo);
                    }
                }
                div.appendChild(ficha);
            }


        }
    });

    //Enviar la peticion que será procesada
    firulais.send();

}