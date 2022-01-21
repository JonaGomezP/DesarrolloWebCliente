function comprobar(){
    let inputs = document.querySelectorAll("input[type='text']");
    let primerCampo = inputs[0].value;
    console.log(primerCampo)
    primerCampo = primerCampo.toLowerCase();
    primerCampo = primerCampo.split('');
    primerCampo = primerCampo.sort();
    primerCampo = primerCampo.join('');



    let segundoCampo = inputs[1].value;
    segundoCampo = segundoCampo.toLowerCase();
    segundoCampo = segundoCampo.split('');
    segundoCampo = segundoCampo.sort();
    segundoCampo = segundoCampo.join('');

    console.log(segundoCampo)


    if(primerCampo === segundoCampo){
        alert("Es un anagrama")
    } else{
        alert("No es un anagrama")
    }
    

    

}