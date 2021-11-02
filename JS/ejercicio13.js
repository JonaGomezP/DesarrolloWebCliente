function mostrarOcultar() {
    let enlace = document.querySelector("a");
    let parrafoSpoiler = document.getElementById("textoSpoiler");
    let estado = window.getComputedStyle(parrafoSpoiler).getPropertyValue("display");
    if (estado == "none") {
        parrafoSpoiler.style.display = "block";
        enlace.textContent = "OCULTAR"
    } else {
        parrafoSpoiler.style.display = "none";
        enlace.textContent = "MOSTRAR"
    }
}