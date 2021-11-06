//Declaramos la función que determina el intervalo de tiempo que ejecutará la carga. Compruebo que botón la llama para que cargue una barra u otra
var timer;
function cargar(nombre) {
    if(nombre == "meter"){
        timer = setInterval("progresar('meter')",1000);
    } else{
        timer = setInterval("progresar('progress')",1000);
    }
}

function progresar(nombre) {
    //Inicializo el elemento a cadena vacía
    let elemento ="";
    let boton = "";
    //Almaceno el elemento en función del parametro recibido y el ID del botón pulsado
    if(nombre == "meter"){
        elemento = document.querySelector("meter");
        boton = document.getElementById("meter")
    } else{
        elemento = document.querySelector("progress");
        boton = document.getElementById("progress");
    }
    
    //Capturo el valor actual de ese elemento y el máximo posible.
    let valor = parseInt(elemento.getAttribute("value"));
    let maximo = parseInt(elemento.getAttribute("max"));
    //Genero un aleatorio para la carga (entre 1 y 10)
    let aleatorio = Math.round((Math.random()* 20)+1);
    //Sumamos al valor actual el aleatorio generado
    elemento.setAttribute("value", valor + aleatorio);
    //Compruebo si el valor actual es mayor o igual que el máximo menos 20 para que, en caso de que el aleatorio sea mayor de lo que queda me haga el salto al máximo. Cuando el valor es menor de 80, el botón se desactiva
    if (valor >= (maximo - 20)) {
        elemento.setAttribute("value", maximo);
        let alerta = confirm("Carga exitosa!!!");
        clearInterval(timer);
        elemento.setAttribute("value", 0);
        boton.disabled = false;
    //Cuando el valor es mayor o igual que 80, el botón se activa
    } else{
        boton.disabled = true;
    }
}