var listaNumeros = new Array();
function comprobarNumero(listaNumeros = [1, 67, 3, 45, 10] , numero = 10) {
    listaNumeros.forEach(element => {
        if (element == numero) {
            return true;
        } else {
            return false;
        }
    });
}


