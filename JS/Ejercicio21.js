function mostrarMensaje(){
    let mensaje = document.createElement("p");
    mensaje.style.position="absolute";
    mensaje.style.width="400px";
    mensaje.style.height="20px";
    mensaje.style.left="50px";
    mensaje.style.top="20px";
    mensaje.style.backgroundColor="white";
    mensaje.style.zIndex = "1";

    let enlace = document.querySelector("a");
    let ruta = enlace.getAttribute("href");

    console.log(ruta)


    let texto = document.createTextNode(ruta);
    mensaje.appendChild(texto);
    let padre = document.querySelector("body");
    padre.appendChild(mensaje);


}