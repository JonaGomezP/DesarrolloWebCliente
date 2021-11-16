
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
    let elementoDefecto = document.getElementsByClassName("primera");
    console.log(elementoDefecto[0]);
    let tabla = document.createElement("table");
    tabla.style.width="400px";
    tabla.style.height="400px";
    tabla.style.border="solid 1px";
    padre.replaceChild(tabla,elementoDefecto[0])

    let coloresFondo = ["red","yellow","blue","green"];
    let contador = 0;
    let filas = document.getElementsByTagName("tr");
    for(let i = 0; i < 2;i++){
        let fila = document.createElement("tr");
        tabla.appendChild(fila);
        for(let j = 0; j < 2; j++){
            contador ++;
            let aleatorio = parseInt(Math.floor((Math.random() * coloresFondo.length)));
            console.log(aleatorio)
            let celda = document.createElement("td");
            celda.style.border = "solid 1px";
            celda.style.backgroundColor=coloresFondo[aleatorio];
            celda.id = "celda" + contador;
            celda.onclick = function(){
                cambiarColorCeldas(celda.getAttribute("id"));
            }
            filas[i].appendChild(celda);
        }
    }
}

function cambiarColorCeldas (id){
    let celda = document.getElementById(id);
    let colorFondo = celda.style.getPropertyValue("background-color");
    console.log(colorFondo);
    if(colorFondo != "white"){
        celda.style.backgroundColor = "white";
    } else{
        let coloresFondo = ["red","yellow","blue","green","black"];
        let aleatorio = parseInt(Math.floor((Math.random() * coloresFondo.length)));
        celda.style.backgroundColor = coloresFondo[aleatorio];
    }
}