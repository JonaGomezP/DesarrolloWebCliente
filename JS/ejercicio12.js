function moverImagen(valor) {
    let imagen = document.querySelector("img");
    let estilos = window.getComputedStyle(imagen);
    let derecha = parseInt(estilos.getPropertyValue("right"));
    let izquierda = parseInt(estilos.getPropertyValue("left"));
    console.log(derecha)
    if ((valor == "right")) {
        imagen.style.setProperty(valor, derecha - 5 + "px");
        imagen.style.setProperty("left", izquierda + 5 + "px");
        console.log(derecha)
    } else {
        imagen.style.setProperty(valor, izquierda - 5 + "px");
        imagen.style.setProperty("rigth", derecha + 5 + "px");

        console.log(izquierda)

    }


}