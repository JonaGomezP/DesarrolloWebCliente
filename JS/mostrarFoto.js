function fotoAnterior() {

    let fotoMostrada = document.querySelector("img");
    let atributoSRC = fotoMostrada.getAttribute("src");

    switch (atributoSRC) {
        case "../img/5.jpg":
            fotoMostrada.setAttribute("src", "../img/4.jpg");
            break;
        case "../img/4.jpg":
            fotoMostrada.setAttribute("src", "../img/3.jpg");
            break;
        case "../img/3.jpg":
            fotoMostrada.setAttribute("src", "../img/2.jpg");
            break;
        case "../img/2.jpg":
            fotoMostrada.setAttribute("src", "../img/1.jpg");
            break;
        case "../img/1.jpg":
            break;
    }
}

function fotoSiguiente() {

    let fotoMostrada = document.querySelector("img");
    let atributoSRC = fotoMostrada.getAttribute("src");

    switch (atributoSRC) {
        case "../img/1.jpg":
            fotoMostrada.setAttribute("src", "../img/2.jpg");
            break;
        case "../img/2.jpg":
            fotoMostrada.setAttribute("src", "../img/3.jpg");
            break;
        case "../img/3.jpg":
            fotoMostrada.setAttribute("src", "../img/4.jpg");
            break;
        case "../img/4.jpg":
            fotoMostrada.setAttribute("src", "../img/5.jpg");
            break;
    }


}