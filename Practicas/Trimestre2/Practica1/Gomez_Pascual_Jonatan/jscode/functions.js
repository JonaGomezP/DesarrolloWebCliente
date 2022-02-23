window.onload = () => {
//Capturo el botón "submit" que envía los datos
let botonEnviar = document.querySelector("input[type='submit']");
    botonEnviar.addEventListener("click", (e) =>{
        e.preventDefault();
        validar();
    })
}



function validar(){
    //En cada comprobación primero agrego un evento "blur" por si el usuario de primeras pincha el campo pero no mete nada y si lo deja en blanco agrego un "change" que comprueba lo nuevo
    //Cuando se carga la ventana capturo el formulario.
    let formulario = document.forms[0];

    

    //Primer input (nick) le asigno la función onchange
    let nickName = formulario.nick;
        if (nickName.value == "") {
            nickName.style.border = "solid 1px red";
            nickName.setAttribute("placeholder", "No puede estar vacío")
            nickName.focus();
            nickName.addEventListener("change", (e) => {
                if (nickName != "") {
                    nickName.style.border = "solid green 1px";
                }
            })
        } else {
            nickName.style.border = "solid green 1px";
        }

    //Segundo input (password)
    //Primer input (nick) le asigno la función onchange
    let password = formulario.clave;
        if (password.value == "" || password.value == nickName.value) {
            password.style.border = "solid 1px red";
            password.setAttribute("placeholder", "Introduce clave diferente al nick")
            password.addEventListener("change", () => {
                if (password != "" || password.value == nickName.value) {
                    password.style.border = "solid green 1px";
                }
            })
        } else {
            password.style.border = "solid green 1px";
        }

    //Tercer input (Repetir contraeña)
    let repeatPassword = document.querySelectorAll("input[type='password']")[1];
        if (repeatPassword.value == "") {
            repeatPassword.style.border = "solid 1px red";
            repeatPassword.setAttribute("placeholder", "No puede estar vacío")
            repeatPassword.addEventListener("change", (e) => {
                if (repeatPassword.value != password.value) {
                    repeatPassword.value = "";
                    password.value = "";
                    password.style.border = "solid 1px red";
                    repeatPassword.style.border = "solid 1px red";
                }
            })
        } else {
            if (repeatPassword.value != password.value) {
                repeatPassword.value = "";
                password.value = "";
                password.style.border = "solid 1px red";
                repeatPassword.style.border = "solid 1px red";
            } else {
                password.style.border = "solid 1px green";
                repeatPassword.style.border = "solid 1px green";
            }
        }

    //Capturamos el select y comprobamos que no esté marcada la primera opción
    let select = formulario.pregunta;
        if (select.selectedIndex == 0) {
            select.style.border = "solid 1px red";
            select.addEventListener("change", () => {
                if (select.selectedIndex != 0) {
                    select.style.border = "solid 1px green";
                } else {
                    select.style.border = "solid 1px red";
                }
            })
        } else{
            select.style.border = "solid 1px green";
        }

    //Input de la respuesta
    let inputRespuesta = formulario.respuesta;
        if(inputRespuesta.value == ""){
            inputRespuesta.style.border = "solid 1px red";
            inputRespuesta.addEventListener("change", () => {
                if(inputRespuesta.value.lenght != ""){
                    inputRespuesta.style.border = "solid 1px green";
                }
            })
        } else{
            inputRespuesta.style.border = "solid 1px green";
        }

    //Checkbox
    let checkbox = formulario.sexo;

    if(checkbox[0] == false && checkbox[1] == true){
        checkbox[0].style.border = "solid red 1px";
    }

    //Edad 
    let edad = formulario.edad;
    if(isNaN(edad.value)){
        edad.style.border = "solid 1px red";
    } else{
        if(edad.value > 3 && edad.value < 99){
            edad.style.border = "solid 1px green";
        } else{
            edad.style.border = "solid 1px red";

        }
    }



    //Segunda tabla

    let tablas = document.getElementsByTagName("table");
    let segundaTabla = tablas[1];
    
    //Caaptcha
    let captcha = segundaTabla.querySelector("input");
    if(captcha.value == "NJFDD"){
        captcha.style.border = "solid 1px green";
    } else if(captcha.value != "NJFDD"){
        captcha.style.border = "solid 1px red";
    }

    //Condiciones

    let condiciones = segundaTabla.querySelector("input[type='checkbox']");

    if(!condiciones.checked){
        condiciones.focus();
    }
    
}

