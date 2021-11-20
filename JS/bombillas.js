window.onload = function () {
    const bombillas = document.getElementsByTagName("input");
    let id = 0;
    for (const key in bombillas) {
        bombillas[key].id = id;
        bombillas[key].className = "apagada";
        bombillas[key].onclick = function () {
            presionar(bombillas[key].getAttribute("id"));
        }
        id++;
    }
}

function presionar(idBombilla) {
    let bombillasTotales = document.getElementsByTagName("input");
    let bombillaActual = document.getElementById(idBombilla);
    let estado = bombillaActual.getAttribute("class");
    if(bombillaActual.getAttribute("cass") == "apagada"){
        bombillaActual.className = "encendida";
    } else{
        bombillaActual.className = "apagada";
    }
    idBombilla = parseInt(idBombilla);
    if (idBombilla > 0 && idBombilla < bombillasTotales.length - 1) {
        if (bombillasTotales[idBombilla - 1].getAttribute("class") == "apagada") {
            bombillasTotales[idBombilla - 1].className = "encendida";
        } else {
            bombillasTotales[idBombilla - 1].className = "apagada";
        }
        if (bombillasTotales[idBombilla + 1].getAttribute("class") == "apagada") {
            bombillasTotales[idBombilla + 1].className = "encendida";
        } else {
            bombillasTotales[idBombilla + 1].className = "apagada";
        }
    } else if (idBombilla == 0) {
        if (bombillasTotales[idBombilla + 1].getAttribute("class") == "apagada") {
            bombillasTotales[idBombilla + 1].className = "encendida";
        } else {
            bombillasTotales[idBombilla + 1].className = "apagada";
        }
    } else {
        if (bombillasTotales[idBombilla - 1].getAttribute("class") == "apagada") {
            bombillasTotales[idBombilla - 1].className = "encendida";
        } else {
            bombillasTotales[idBombilla - 1].className = "apagada";
        }
    }

    let contador = 0;
    for (const elemento of bombillasTotales) {
        if (elemento.getAttribute("class") == "encendida") {
            contador++;
            if (contador == bombillasTotales.length) {
                alert("!!!Has ganado¡¡¡");
            }
        }
        
    }
}