var cuerpo = document.querySelector("body");

function cambiarColor (idCaja){
    let caja = document.getElementById(idCaja);
    let estilos = window.getComputedStyle(caja);
    let color = estilos.getPropertyValue('background-color');
    cuerpo.style.setProperty('background', color);
}
function colorOriginal() {
    cuerpo.style.setProperty('background', 'black');
}