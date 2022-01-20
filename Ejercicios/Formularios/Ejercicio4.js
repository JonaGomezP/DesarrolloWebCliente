window.onload = () => {
    let formulario = document.forms[0];
    let boton = formulario[formulario.length - 1];


    boton.addEventListener("click", function (e) {
        e.preventDefault;
        convertir(formulario);
    })

}

function convertir(formu) {
    let formulario = formu;
    let primerInput = formulario.primeraCantidad;
    let segundoInput = formulario.segundaCantidad;
    let opciones = formulario.select.options;
    for (const e of opciones) {
        if (e.selected && e.value == "euros a dolares") {
            let valor = (primerInput.value * 0.83).toFixed(2);
            segundoInput.value = valor;
        } else if(e.selected && e.value == "dolares a euros") {
            let valor = (primerInput.value * 1.2).toFixed(2);
            segundoInput.value = valor;
        }
    }
}
