window.onload = function(){
    let input = document.querySelectorAll("input[type='checkbox']");
    input.forEach(e => {
        e.onclick = escribir;
    })
   
}

function escribir(){
    console.log("hola")
    let area = document.querySelector("textarea");
    let listaCheck = document.querySelectorAll("input[type='checkbox'");
    listaCheck.forEach(element => {
        if(element.checked){
            area.value += element.value + " ";
        }
    });
    
}


// window.onload = function(){
//     let boton = document.querySelector("input[type='submit']");
//     boton.onclick = function(e){
//         e.preventDefault();
//         escribir();
//     }
// }

// function escribir(){
//     let area = document.querySelector("textarea");
//     let listaCheck = document.querySelectorAll("input[type='checkbox'");
//     listaCheck.forEach(element => {
//         if(element.checked){
//             area.value += element.value + " ";
//         }
//     });
    
// }