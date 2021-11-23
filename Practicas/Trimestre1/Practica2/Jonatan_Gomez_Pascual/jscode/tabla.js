function e1() {
    //Preguntamos al usuario el número de fils y columnas y controlamos lo que introduce (entre 1 y 9 y fuerzo a decimal)
    let filas = 0;
    let columnas = 0;
    while ((filas < 1 || filas > 9) || (columnas < 1 || columnas > 9)) {
        filas = parseInt(prompt("Nº de filas (entre 1 y 9): "));
        columnas = parseInt(prompt("Nº de columnas (entre 1 y 9): "));
    }
    
    //Llamo a la función "crearTabla" y le paso como parámetros el nú,ero de filas y columnas
    crearTabla(filas, columnas);
}


//Creo la función "crearTabla" que recibe las filas y columnas
function crearTabla(filas,columnas) {
    //Primero guardamos el div que tendrá las tablas
    let solucion = document.getElementsByClassName("solucion");

    //Creo la tabla y le aplico la clase "tabla"
    let tabla = document.createElement("table");
    tabla.className = "tabla";

    //Vinculo la tabla al padre (solución)
    solucion[0].appendChild(tabla);

    //inicio bucle for en base a los parámetros recibidos. Bucle de "i" crea y añade filas y bucle de "j" crea y añade columnas a las filas y añade el texto en base a la fila por la que va (i)
    for (let i = 1; i <= filas; i++) {
        let fila = document.createElement("tr");
        tabla.appendChild(fila);
        for (let j = 1; j <= columnas; j++) {
            let columna = document.createElement("td");
            fila.appendChild(columna);
            columna.textContent = i;
        }
    }

}