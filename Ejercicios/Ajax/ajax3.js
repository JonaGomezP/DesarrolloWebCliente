window.onload = function(){

    document.querySelector("input[type='button']").onclick = function(){
        this.disabled = true;

        //Paso 1: crear el objeto XMLHttpRequest
        let manolito; //variable que va a almacenar el objeto
        if(window.XMLHttpRequest){
            manolito = new XMLHttpRequest();
        }
        else{
            manolito = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //Paso 2: crear la peticion de datos
        //Parámetros: el verbo, la direccion del recurso
        manolito.open('GET',"http://jaimeweb.es/medac/getProfesores.php");

        //Paso 3: crear la funcion para manejar los datos que me llegan (se asocia al evento LOAD)
        manolito.addEventListener('load',function(datos){
            let respuesta = JSON.parse(datos.target.response);

           // document.getElementById("parra").innerHTML = respuesta;
            document.querySelector("input[type='button']").disabled = false;
            console.log(respuesta);
            
        });

        //Paso 4: enviar la peticion
        manolito.send();

        console.log("SOY EL ULTIMO");
    }



}
