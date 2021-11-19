window.onload = function(){
    const bombillas = document.getElementsByTagName("input");
    let id = 0;
    for (const key in bombillas) {
        bombillas[key].id = id;
        bombillas[key].className = "apagada";
        bombillas[key].onclick = function (){
            presionar(bombillas[key].getAttribute("id"));
        }
        id ++;
    }
}

function presionar(idBombilla){
    let bombillaActual = document.getElementById(idBombilla);
    let estado = bombillaActual.getAttribute("class");
    if(estado == "apagada"){
        bombillaActual.className = "encendida";
    }
}