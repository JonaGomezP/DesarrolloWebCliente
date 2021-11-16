window.onload = function(){
    let padre = document.querySelector("body");
    padre.style.width = window.innerWidth + "px";
    padre.style.height = window.innerHeight + "px";

    

}

function mostrarEfecto(){
    let padre = document.querySelector("body");
    let imagen = document.querySelector("img");
    let ruta = imagen.getAttribute("src");
    

    let efecto = document.createElement("div");
    efecto.style.zIndex = "1";
    efecto.style.opacity = "0.7";
    efecto.style.backgroundColor = "black";
    efecto.style.width = window.innerWidth + "px";
    efecto.style.height = window.innerHeight + "px";
    efecto.style.position = "aboslute";
    efecto.style.top = "0";
    efecto.style.left = "0";
    efecto.setAttribute("onclick","desaparecer()");
    padre.appendChild(efecto);



    let nuevaImagen = document.createElement("img");
    nuevaImagen.setAttribute("src",ruta);

    nuevaImagen.style.objectFit = "cover";
    nuevaImagen.style.position = "fixed";
    nuevaImagen.zIndex = "2";
    nuevaImagen.id = "imgTemporal";

    padre.appendChild(nuevaImagen);

    nuevaImagen.style.left = window.innerWidth/2 - nuevaImagen.offsetWidth/2 + "px";
    nuevaImagen.style.top = ((window.innerHeight/2) - (nuevaImagen.offsetHeight/2)) +"px";
    nuevaImagen.style.lineHeight = screen.availHeight + "px";
    console.log(efecto);

}

function desaparecer(){
    let padre  = document.querySelector("body");
    let imagen = document.getElementById("imgTemporal");
    let div = document.querySelector("div");
    padre.removeChild(imagen);
    div.parentNode.removeChild(div);
}