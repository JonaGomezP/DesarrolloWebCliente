function copiar(){
    let primerCampo = document.forms[0].primerCampo.value;
    let segundoCampo = document.forms[0].segundoCampo;
    segundoCampo.value = primerCampo;
}