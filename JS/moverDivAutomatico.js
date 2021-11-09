var timer;
window.onload = function() {
    timer = setInterval("mover()", (30 / 1000));
}

function mover() {
    var salto = 5;
    var elemento = document.getElementById("cuadrado");
    var estilos = getComputedStyle(elemento);
    var izquierda = parseInt(estilos.getPropertyValue("left"));
    izquierda += salto;
    elemento.style.left = (izquierda + "px");
    if ((izquierda + elemento.offsetWidth) >= screen.width - 5) {
        elemento.style.left = (screen.width - elemento.offsetWidth + "px");
        parar();
    }
}

function parar() {
    clearInterval(timer);
}