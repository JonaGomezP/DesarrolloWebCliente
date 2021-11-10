function crear() {
    var nuevo = document.createElement("li");
    var texto = prompt("Mete un texto","");
    var nodoTexto = document.createTextNode(texto);
    nuevo.appendChild(nodoTexto);
    var papi = document.querySelector("ul");
    papi.appendChild(nuevo);
}