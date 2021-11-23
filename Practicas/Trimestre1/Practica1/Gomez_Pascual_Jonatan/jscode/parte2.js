var botones = document.getElementsByTagName("input");
var primerBoton = botones[0];
var segundoBoton = botones[1];

var primerParrafo = document.getElementById("ladoIzq");
var segundoParrafo = document.getElementById("ladoDer");

function generar() {
    primerBoton.setAttribute("disabled", true);
    segundoBoton.disabled = false;

    for (let i = 0; i < 2; i++) {
        let aleatorio = parseInt(Math.round((Math.random() * 50) + 1));
        if (i == 0) {
            primerParrafo.textContent = aleatorio;
        } else {
            segundoParrafo.textContent = aleatorio;
        }
    }
}

function comparar() {
    let parrafoSalida = document.getElementById("salida");
    let textoPrimerParrafo = parseInt(primerParrafo.textContent);
    let textoSegundoParrafo = parseInt(segundoParrafo.textContent);
    if (textoPrimerParrafo > textoSegundoParrafo) {
        parrafoSalida.textContent = textoPrimerParrafo;
    } else {
        parrafoSalida.textContent = textoSegundoParrafo;
    }
    primerBoton.setAttribute("disabled", false);
    segundoBoton.setAttribute("disabled", true);
}