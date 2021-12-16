var tutor1 = 
    {
        nombre: "Javi",
        edad: 38,
        dni: "12345678B",
        titulo_uni: "Ingeniería electrica"
    }

var tutor2=    {
        nombre: "Jaime",
        edad: 47,
        dni: "87654321C",
        titulo_uni: "Ingeniería Informática"
    }


var asignaturas = [ 
    {
        nombre: "Desarrollo en entorno de servidores",
        curso: 2,
        num_horas: 300
    },
    {
        nombre: "Desarrollo en entorno de clientes",
        curso: 2,
        num_horas: 300
    },
    {
        nombre: "Despliegue de aplicaciones web",
        curso: 2,
        num_horas: 150
    },
    {
        nombre: "Diseño de interfaces",
        curso: 2,
        num_horas: 300
    }
];

var alumno = {
    nombre: "Josemi",
    edad: 21,
    ciclo: "DAW",
    curso: 2,
    tutor: tutor2,
    modulos: asignaturas,
    nota_media: [6.75,8,7.25,9]
}

//for foreach for.in for.of
window.onload = () => {

    var nuevo = document.createElement("div");
    document.querySelector("section").appendChild(nuevo);

    for (let campo in alumno) {
        let nuevoSpan = document.createElement("span");
        let texto="";

        switch(campo){
            case "tutor": 
                    for (let dato in alumno[campo]) {
                        texto += alumno[campo][dato]+" ";
                    }
                    break;
            case "modulos": 
                        for (let ind of alumno[campo]) {
                            texto += ind.nombre+" ";
                        }
                        break;
            case "nota_media": 
                    let suma=0;
                    for (let ind of alumno[campo]) {
                        suma += ind;   
                    }
                    texto = "La media es: "+(suma/alumno[campo].length);
                    break;
            
            default: texto =alumno[campo];
        }

        let nodoTexto = document.createTextNode(texto);

        nuevoSpan.appendChild(nodoTexto);
        nuevo.appendChild(nuevoSpan)

    }

}