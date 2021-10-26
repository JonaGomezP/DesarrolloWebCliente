var cuerpo = document.querySelector("body");

function primerBoton(){
    let caja = document.getElementById("div_1");
    let estilos = window.getComputedStyle(caja);
    let color = estilos.getPropertyValue('background');
    cuerpo.style.setProperty('background',color);  

}
function segundoBoton(){
    let caja = document.getElementById("div_2");
    let estilos = window.getComputedStyle(caja);
    let color = estilos.getPropertyValue('background');
    cuerpo.style.setProperty('background',color);

}

function tercerBoton(){
    let caja = document.getElementById("div_3");
    let estilos = window.getComputedStyle(caja);
    let color = estilos.getPropertyValue('background');
    cuerpo.style.setProperty('background',color);
    
}
function colorOriginal(){
    cuerpo.style.setProperty('background','black');
}

