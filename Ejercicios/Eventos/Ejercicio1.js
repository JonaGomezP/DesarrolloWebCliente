
//APARTADO A BURBUJA)

// window.onload = () =>{

//     let seccion = document.querySelector("section");
//     let parrafo = document.querySelector("p");
//     let link = document.querySelector("a");

    

//     seccion.addEventListener("click", () => {
//         seccion.style.backgroundColor = "salmon";
//     })
//     parrafo.addEventListener("click", () => {
//         parrafo.style.width = "70%";
//     })
//     link.addEventListener("click", (e) => {
//         let confirmacion = confirm("Quiere abrir la página?");
//         if(!confirmacion){
//             e.preventDefault();
//             // link.removeAttribute("href");
//         }
//     })
// }


//APARTADO A CAPTURA)

// window.onload = () =>{

//     let seccion = document.querySelector("section");
//     let parrafo = document.querySelector("p");
//     let link = document.querySelector("a");

    

//     seccion.addEventListener("click", () => {
//         seccion.style.backgroundColor = "salmon";
//     }, true)
//     parrafo.addEventListener("click", () => {
//         parrafo.style.width = "70%";
//     })
//     link.addEventListener("click", (e) => {
//         let confirmacion = confirm("Quiere abrir la página?");
//         if(!confirmacion){
//             e.preventDefault();
//             // link.removeAttribute("href");
//         }
//     })
// }

//APARTADO B)

// window.onload = () =>{

//     let seccion = document.querySelector("section");
//     let parrafo = document.querySelector("p");
//     let link = document.querySelector("a");

    

//     seccion.addEventListener("click", () => {
//         seccion.style.backgroundColor = "salmon";
//     })
//     parrafo.addEventListener("click", () => {
//         parrafo.style.width = "70%";
//     })
//     link.addEventListener("click", (e) => {
//         let confirmacion = confirm("Quiere abrir la página?");
//         if(!confirmacion){
//             e.preventDefault();
//             // link.removeAttribute("href");
//         }
//         e.stopPropagation();
//     })
// }


//APARTADO C)

window.onload = () =>{

    let seccion = document.querySelector("section");
    let parrafo = document.querySelector("p");
    let link = document.querySelector("a");

    

    seccion.addEventListener("click", (e) => {
        seccion.style.backgroundColor = "salmon";
        e.stopPropagation();
    }, true)
    parrafo.addEventListener("click", () => {
        parrafo.style.width = "70%";
    }, true)
    link.addEventListener("click", (e) => {
        let confirmacion = confirm("Quiere abrir la página?");
        if(!confirmacion){
            e.preventDefault();
            // link.removeAttribute("href");
        }
    }, true)
}

