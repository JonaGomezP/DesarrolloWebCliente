var timer;
window.onload = function() {
    reanudar();

}

function mover() {
    var elemento = document.getElementById("cuadrado");
    var aleatorioHorizontal = parseInt(Math.round((Math.random() * 1000) + 1));
    var aleatorioVertical = parseInt(Math.round((Math.random() * 800) + 1));

    elemento.style.left = aleatorioHorizontal + "px";
    elemento.style.top = aleatorioVertical + "px";
}

function limpiar() {
    clearInterval(timer);
}

function reanudar() {
    timer = setInterval("mover()", 1000)
}