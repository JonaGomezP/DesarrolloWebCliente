function ocultarDiv() {
    let caja = document.getElementById("div_2");
    let estilos = window.getComputedStyle(caja);
    let visibilidad = estilos.getPropertyValue("visibility");
    if (visibilidad == "visible") {
        caja.style.setProperty("visibility", "hidden");
    } else {
        caja.style.setProperty("visibility", "visible")
    }
}

function esconderDiv() {
    let caja = document.getElementById("div_5");
    let estilos = window.getComputedStyle(caja);
    let display = estilos.getPropertyValue("display");
    if (display != "none") {
        caja.style.setProperty("display", "none");
    } else {
        caja.style.setProperty("display", "block");
    }
}