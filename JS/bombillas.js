window.onload = function(){
    const bombillas = document.getElementsByTagName("input");
    let id = 0;
    for (const key in bombillas) {
        bombillas[key].style.filter = "drop-shadow(0px -30px 12px rgb(255, 255, 255))";
        bombillas[key].id = id;
        bombillas[key].onclick = function (){
            presionar(bombillas[key].getAttribute("id"));
        }
        id ++;
    }
}

function presionar(idBombilla){
    let bombillaActual = document.getElementById(idBombilla);
    let estado = bombillaActual.getAttribute("value");
    console.log(idBombilla);
    // switch (nombreBombilla) {
    //     case "bombilla1":
    //         nombreBombilla.style.filter = "drop-shadow(0px -30px 12px rgb(255, 230, 0))";
    //         break;
    // 
    //     default:
    //         break;
    // }
}