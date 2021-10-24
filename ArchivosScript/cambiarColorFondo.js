function colorRojo(){
    var cuerpo = document.querySelector("body");
    var botones = document.getElementsByTagName("button");
    for (let color of botones) {
        if(color.getAttribute("value") == "rojo"){
            cuerpo.setAttribute("style","background-color:red");
        }
    }
}
function colorBlanco(){
    var cuerpo = document.querySelector("body");
    var botones = document.getElementsByTagName("button");
    for (let color of botones) {
        if(color.getAttribute("value") == "blanco"){
            cuerpo.setAttribute("style","background-color:white");
        }
    }
}
function colorVerde(){
    var cuerpo = document.querySelector("body");
    var botones = document.getElementsByTagName("button");
    for (let color of botones) {
        if(color.getAttribute("value") == "verde"){
            cuerpo.setAttribute("style","background-color:green");
        }
    }
}
function colorAmarillo(){
    var cuerpo = document.querySelector("body");
    var botones = document.getElementsByTagName("button");
    for (let color of botones) {
        if(color.getAttribute("value") == "amarillo"){
            cuerpo.setAttribute("style","background-color:yellow");
        }
    }
}
function colorAzul(){
    var cuerpo = document.querySelector("body");
    var botones = document.getElementsByTagName("button");
    for (let color of botones) {
        if(color.getAttribute("value") == "azul"){
            cuerpo.setAttribute("style","background-color:blue");
        }
    }
}