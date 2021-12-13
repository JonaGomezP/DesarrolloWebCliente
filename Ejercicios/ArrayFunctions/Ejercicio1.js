var listaNumeros = new Array();
numero = 10;
function comprobarNumero(listaNumeros = [1, 67, 3, 45, 10] , numero) {
    listaNumeros.forEach(element => {
        if (element == numero) {
            return true;
        } else {
            return false;
        }
    });
}

