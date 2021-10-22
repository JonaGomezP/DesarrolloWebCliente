function mostrarMedidas() {
    let tabla = document.querySelector("table");
    let altura = tabla.getAttribute("width");
    let anchura = tabla.getAttribute("height")
    alert(altura + ' de alto, ' + anchura + ' de ancho')
    let ancho = parseInt(prompt("Dime el nuevo ancho"));
    let alto = parseInt(prompt("Dime el nuevo alto"));
    tabla.setAttribute("width", ancho);
    tabla.setAttribute("height", alto);
}

function mostrarBorde() {
    let tabla = document.querySelector("table");
    let bordeActual = tabla.getAttribute("border", 3);
    alert(bordeActual + ' de borde');
    let nuevoBorde = parseInt(prompt("Dime el nuevo ancho"));
    tabla.setAttribute("border", nuevoBorde);
}

function cambiarAlineacion() {
    let tabla = document.querySelector("table");
    let alineacion = tabla.getAttribute("align");
    if (alineacion == "center") {
        tabla.setAttribute("align", "right");
    } else if (alineacion == "right") {
        tabla.setAttribute("align", "left")
    } else {
        tabla.setAttribute("align", "center")

    }
}