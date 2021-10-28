function ejercicio1() {
    let dolar = 1.1642;
    let cantidad = parseFloat(prompt("Inrtoduce una cantidad en euros"));
    cantidad = cantidad.toFixed(2);
    let resultadoDolares = (cantidad * dolar).toFixed(2);
    alert(cantidad + "€ en dólares americanos son " + resultadoDolares);
}

function ejercicio2() {
    //Definimos variables y las inicializamos
    let nota = 0;
    let suspensos = 0;
    let aprobados = 0;
    let notables = 0;
    let sobSalientes = 0;
    //Bucle de 10 vueltas para que pida nota
    for (let i = 1; i <= 10; i++) {
        //Compruebo que mete una válida (entre 1 y 10)
        do {
            nota = parseInt(prompt("Introduce la nota " + i));
        } while (nota < 1 || nota > 10);
        //Condiciones para que me sume, en función de la nota, las variables definidas al principio
        if (nota < 5) {
            suspensos++;
        } else if ((nota >= 5) && (nota <= 6)) {
            aprobados++;
        } else if ((nota >= 7) && (nota <= 8)) {
            notables++;
        } else {
            sobSalientes++;
        }
    }
    //Mostrar resultado
    alert("Hay " + suspensos + " suspensos\nHay " + aprobados + " aprobados\nHay " + notables + " notables\nHay " + sobSalientes + " sobresalientes\n")
}

function ejercicio3() {
    //defino variables
    let parrafo = document.querySelector("p");
    let numero = 0;
    let suma = 0;
    let mostrar = "";
    //Mientras número sea mayor de 0 que pida número
    do {
        numero = parseInt(prompt("Introduce un número"));
        //Condiciones para comprobar si es positivo y lo introduzca en la cadena a mostrar, sino inserta = y muestra la suma de todos
        if (numero > 0) {
            mostrar += numero + " ";
            suma += numero;
            parrafo.textContent = mostrar;
        } else {
            mostrar += "= " + suma;
            parrafo.textContent = mostrar;
        }
    } while (numero > 0);
}

function ejercicio4() {
    //Defino variables junto con el array
    let listaParrafos = document.getElementsByTagName("p");
    let parrafo = listaParrafos[1];
    let listaNumeros = new Array();
    let pares = new Array();
    let cadenaPar = "Pares: ";
    let cadenaImpar = "Impares: ";
    let impares = new Array();
    let aleatorio = 0;
    let numero = 0;
    //Pido 5 veces un número
    for (let i = 0; i < 5; i++) {
        numero = parseInt(prompt("Dime un número " + String.fromCodePoint(9733)));
        //Agrego al array de números el introducido
        listaNumeros.push(numero);
        //Compruebo si es par o impar y lo introduzco en el array correspondiente
        if (numero % 2 == 0) {
            pares.push(numero);
        } else {
            impares.push(numero);
        }
    }
    //Recorro la lista de números y multiplico cada valor por un aleatorio. Muestra en el  console la operación y resultado
    for (const tmp of listaNumeros) {
        aleatorio = parseInt(Math.round((Math.random() * 10) + 1));
        let resultado = tmp * aleatorio;
        console.log(tmp + " x " + aleatorio + " = " + resultado);
    }
    //Recorro cada array (pares e impares) y en función de cada array, agrego a la cadena de pares o impares el número iterador
    for (const par of pares) {
        cadenaPar += par + " ";
    }
    for (const impar of impares) {
        cadenaImpar += impar + " ";
        parrafo.textContent = cadenaImpar + " " + impar + " ";
    }
    parrafo.textContent = cadenaPar + "\n" + cadenaImpar;

}