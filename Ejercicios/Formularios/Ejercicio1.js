window.onload = ()=>{
    document.querySelector("input[type='button']").onclick = copiar;
}

function copiar(){
    let formulario = document.forms[0];
    let primerInput = formulario.primerInput.value;
    let segundoInput = formulario.segundoInput.value = primerInput;
    console
}