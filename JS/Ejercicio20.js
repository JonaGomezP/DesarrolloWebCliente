
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

function sustituir(){
    let padre = document.querySelector("body");
    let elementoDefecto = document.getElementsByClassName('primera');
    let contenedor = document.querySelector("div");


    let tabla = document.createElement("table");
    tabla.style.width="400px";
    tabla.style.height="400px";
    tabla.style.border="solid 1px";

    contenedor.appendChild(tabla);

    for(let i = 0; i < 2;i++){
        let fila = document.createElement("tr");
        tabla.appendChild(fila);
    }

    let filas = document.getElementsByTagName("tr");
    for(let i = 0; i < 2;i++){
        for(let j = 0; j < 2; j++){
            let columna = document.createElement("td");
            columna.style.border = "solid 1px";
            filas[i].appendChild(columna);
        }
    }
    padre.appendChild(contenedor);
    padre.replaceChild(elementoDefecto, tabla);
}