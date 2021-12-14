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
    let body = document.querySelector("body");
    let contenido = document.createElement("div");
    contenido.style.width = "500px";
    contenido.style.backgroundColor  ="rgb(201, 201, 201)";
    contenido.style.borderRadius = "10px";

    //Nombre
    let nombre = document.createElement("p");
    let textoNombre = document.createTextNode(alumno.nombre);
    nombre.appendChild(textoNombre);
    contenido.appendChild(nombre);


    //Edad
    let edad = document.createElement("p");
    let textoEdad = document.createTextNode(alumno.edad);
    edad.appendChild(textoEdad);
    contenido.appendChild(edad);


    //Ciclo
    let ciclo = document.createElement("p");
    let textoCiclo = document.createTextNode(alumno.ciclo);
    ciclo.appendChild(textoCiclo);
    contenido.appendChild(ciclo);

    //Curso
    let curso = document.createElement("p");
    let textoCurso = document.createTextNode(alumno.curso);
    curso.appendChild(textoCurso);
    contenido.appendChild(curso);

    //Tutores
    let tutores = document.createElement("div");

    //Asignaturas
    let asignaturas = document.createElement("div");



    body.appendChild(contenido);


    let parrafos = document.getElementsByTagName("p");

    for (const e of parrafos) {
        e.style.textAlign = "center";
        e.style.marginLeft = "30px";
        e.style.marginRight = "30px";
        e.style.borderBottom = "solid 1px rgb(220, 220, 220)";

    }
}


function saludar() {
    console.log("hola")
}

