function crear(){
    var nuevo = document.createElement("p");
    nuevo.setAttribute("align","center");
    nuevo.className = "agobio";

    var texto = prompt("Mete un texto","");
    var nodoTexto = document.createTextNode(texto);

    nuevo.appendChild(nodoTexto);

    var papi = document.querySelector("article");
    papi.appendChild(nuevo);
    

    var hermano = document.getElementById("cabecera");
    papi.insertBefore(nuevo,hermano);
}

function primeBorrado(){
    var papi = document.querySelector("article");
    var hijos = document.getElementsByTagName("p");

    papi.removeChild(hijos[0]);
}

function segundoBorrado(){
    var hijos = document.getElementsByTagName("p");
    var papi = hijos[0].parentNode;

    papi.removeChild(hijos[0]);
}