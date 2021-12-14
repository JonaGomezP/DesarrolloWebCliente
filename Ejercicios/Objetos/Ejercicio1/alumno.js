window.onload = function(){
    let body = document.querySelector("body");
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.flexDirection = "column";
}

var primerTutor = {
    nombre: "jaime",
    edad: 35,
    dni: "45637823T",
    titulo: "Ingenieria informatica",
};
var segundoTutor = {
    nombre: "javi",
    edad: 33,
    dni: "66345597T",
    titulo: "Ingenieria de telecomunicaciones",
}


var listaAsignaturas = [
    {
        nombre: "desarrollo web cliente",
        curso: 2,
        horas: 2000,
    },
    {
        nombre: "programacion",
        curso: 1,
        horas: 2000,
    },
    {
        nombre: "desarrollo web en servidores",
        curso: 2,
        horas: 2000,
    },
    {
        nombre: "despliegue web",
        curso: 2,
        horas: 1800,
    }
]

var alumno = {
    nombre: "Jonatan",
    edad: 25,
    ciclo: "DAW",
    curso: 2,
    tutores: [primerTutor, segundoTutor],
    asignaturas: listaAsignaturas
}


function mostrarAlumno() {
    //Desahibilito el botón
    let boton = document.querySelector("input");
    boton.disabled = true;

    //Creo el contenedor donde muestro el alumno y le aplico estilos
    let body = document.querySelector("body");
    let contenido = document.createElement("div");
    contenido.style.width = "10000px";
    contenido.style.backgroundColor  ="rgb(50, 50, 50)";
    contenido.style.borderRadius = "10px";
    contenido.style.boxShadow = "10px"
    

    //Nombre
    let tituloNombre = document.createElement("h2");
    tituloNombre.textContent = "Nombre";
    let nombre = document.createElement("p");
    let textoNombre = document.createTextNode(alumno.nombre);
    nombre.appendChild(textoNombre);
    contenido.appendChild(tituloNombre);
    contenido.appendChild(nombre);


    //Edad
    let tituloEdad = document.createElement("h2");
    tituloEdad.textContent = "Edad";
    let edad = document.createElement("p");
    let textoEdad = document.createTextNode(alumno.edad);
    edad.appendChild(textoEdad);
    contenido.appendChild(tituloEdad);
    contenido.appendChild(edad);


    //Ciclo
    let tituloCiclo = document.createElement("h2");
    tituloCiclo.textContent = "Ciclo";
    let ciclo = document.createElement("p");
    let textoCiclo = document.createTextNode(alumno.ciclo);
    ciclo.appendChild(textoCiclo);
    contenido.appendChild(tituloCiclo);
    contenido.appendChild(ciclo);

    //Curso
    let tituloCurso = document.createElement("h2");
    tituloCurso.textContent = "Curso";
    let curso = document.createElement("p");
    let textoCurso = document.createTextNode(alumno.curso);
    curso.appendChild(textoCurso);
    contenido.appendChild(tituloCurso);
    contenido.appendChild(curso);

    //Tutores
    let tituloTutores = document.createElement("h2");
    tituloTutores.textContent = "Tutores";
    let tutores = document.createElement("div");
    tutores.style.display = "flex";
    tutores.style.justifyContent = "space-around";

    contenido.appendChild(tituloTutores);

    for (const tmp of alumno.tutores) {
        
    }
    alumno.tutores.forEach(tmp => {
        let lista = document.createElement("ul");
        lista.style.fontSize = "20px";
        lista.style.maxWidth = tutores.maxWidth / 2;
        lista.style.padding = "15px";
        lista.style.listStylePosition = "inside";
        
        
        for (const key in tmp) {
            let elemento = document.createElement("li");
            elemento.textContent = key + ": " + tmp[key];
            lista.appendChild(elemento);
            
        }
        tutores.appendChild(lista);
        contenido.appendChild(tutores);

    });
    




    //Asignaturas
    let asignaturas = document.createElement("div");



    body.appendChild(contenido);


    //Aplicar estilo a todos los parrafos
    let parrafos = document.getElementsByTagName("p");

    for (const e of parrafos) {
        e.style.textAlign = "center";
        e.style.marginLeft = "30px";
        e.style.marginRight = "30px";
        e.style.borderBottom = "solid 1px rgb(220, 220, 220)";
        e.style.backgroundColor = "rgb(215, 215, 215)";
        e.style.fontSize = "22px"

    }

    //Aplicar estilo a todos los titulos
    let titulos = document.getElementsByTagName("h2");

    for (const e of titulos) {
        e.style.textAlign = "left";
        e.style.marginLeft = "15px";
        e.style.color = "white"
        
    }

    //Aplicar estilo a todos las listas
    let listas = document.getElementsByTagName("ul");

    for (const e of listas) {
        e.style.textAlign = "left";
        e.style.marginLeft = "15px";
        e.style.color = "white";
        e.style.backgroundColor = "black";
        
    }

}



