
function generar(){
    let padre = document.querySelector("div");
    let elementoDefecto = document.getElementsByClassName('primera');

    let texto = elementoDefecto[0].textContent;
    let nuevoTexto = document.createTextNode(texto);

    let nuevoElemento = document.createElement("p");
    nuevoElemento.className = "segunda";
    nuevoElemento.appendChild(nuevoTexto);

    padre.appendChild(nuevoElemento);

    let botones = document.getElementsByTagName("input");

    botones[2].disabled = false;

}

function borrarViejo (){
    let padre = document.querySelector("body");
    let elementoDefecto = document.getElementsByClassName('primera');
    padre.removeChild(elementoDefecto[0]);

    let botones = document.getElementsByTagName("input");
    botones[1].disabled = true;
    botones[3].disabled = true;
}

function borrarNuevos(){
    let contenedor = document.querySelector("div");
    let hijos = contenedor.children;
    while(contenedor.firstChild){
        contenedor.removeChild(hijos[0])
    }
}