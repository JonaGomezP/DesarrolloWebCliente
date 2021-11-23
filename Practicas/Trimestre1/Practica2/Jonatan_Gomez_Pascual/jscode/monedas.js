//inicializamos un timer que almacena el setInterval
var timer;


function generar() {
    //conseguimos el botón que genera monedas y lo desactivamos cuando llega a esta función
    let boton = document.querySelector("input");
    boton.disabled = true;

    timer = setInterval("aumentar()", 1000);
}

function aumentar() {
    //conseguimos el botón que genera monedas y lo desactivamos cuando llega a esta función
    let boton = document.querySelector("input");

    //conseguimos el medidor que aumentará y el contador que sumará las monedas
    let medidor = document.querySelector("meter");

    //Guardamos el span que va cambiar el número de monedas
    let salida = document.getElementById("salida");
    let totalSpan = salida.children;
    let spanActual = totalSpan[totalSpan.length-1];
    let contador = parseInt(spanActual.textContent);

    //Capturo el valor actual del medidor y el máximo posible.
    let valor = parseInt(medidor.getAttribute("value"));
    let maximo = parseInt(medidor.getAttribute("max"));

    //Defino cuanto va a incrementar cada segundo
    const incremento = 25;

    //Sumamos al valor actual el aleatorio generado
    medidor.setAttribute("value", valor + incremento);
    valor = parseInt(medidor.getAttribute("value"));

    //Compruebo si el valor actual ha llegado al máximo
    if (valor == maximo) {
        //desactivo el botón
        boton.disabled = false;
        //Sumamos el contador de monedas
        contador++;

        //Condición que si el contador es 3, añade la imagen. Yo he controlado que puedas seguir metiendo monedas y cada 3, añade una foto debajo de la que ya existe
        if(contador == 3){
            //Almacenamos el elemento que contendrá la imagen
            let articulos = document.getElementsByTagName("article");
            let articulo = articulos[articulos.length-1];
            //Generamos la imagen y le damos la ruta
            let imagen = document.createElement("img");
            imagen.src = "../Jonatan_Gomez_Pascual/img/countess.jpg";
            //Añadimos la iamgen al article
            articulo.appendChild(imagen);
        }
        //Cambiamos el texto de monedas al contador
        spanActual.innerHTML = contador;

        //Reiniciamos el valor del medidor a 0
        medidor.setAttribute("value", 0);
        //Limpiamos el timer para que deje de ejecutar la función
        clearInterval(timer);
    }
}