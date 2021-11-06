var timer;
var cajas = document.getElementsByClassName("participantes");
var izquierda = "";

function comenzarCarrera() {
    timer = setInterval("mover()", (30 / 1000));
}

function mover() {
    let aleatorio = 0;
    for (let i = 0; i < cajas.length; i++) {
        aleatorio = Math.round((Math.random()* 20)+1);
        izquierda = parseInt(cajas[i].style.getPropertyValue("left"));
        if(izquierda + cajas[i].offsetWidth >= screen.width - 20){
            cajas[i].style.left = (screen.width - cajas[i].offsetWidth + "px");
            clearInterval(timer);
            alert("Ha ganado la caja " + (i + 1));
            i=cajas.length;
        } else{
            cajas[i].style.left = izquierda + aleatorio + "px";
        }
    }
}

function reiniciar() {
    for (let i = 0; i < cajas.length; i++) {
        cajas[i].style.left = "0";
    }
    
}

function probar(){
    let cajas = document.getElementsByClassName("participantes");
    console.log(cajas[0])
    let estilos = window.getComputedStyle(cajas[0]);
    izquierda = estilos.getPropertyValue(left);
    console.log(izquierda)
    cajas[0].style.left="30px"
}