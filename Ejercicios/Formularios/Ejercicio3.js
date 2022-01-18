window.onload = function(){
    let boton = document.querySelector("input[type='submit']");
    boton.onclick = function(e){
        e.preventDefault();
        console.log("hola");
        escribir();
    }
}

function escribir(){
    let formu = document.forms;
    let area = formu.area;
    let listaCheck = document.querySelectorAll("input");
    listaCheck.forEach(element => {
        if(element.checked){
            listaCheck.area;
        }
    });
    
}