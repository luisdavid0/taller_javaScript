//Obtenemos la referencia al div con=Resultado
var R = document.getElementById('Resultado');
//se crea funcion para cambiar propiedades del div con id=Resultado
function Propiedades() {
    R.style.borderBlockStyle = "solid";
    R.style.textAlign = "center";
    R.fontFamily = "Pangolin";
    R.style.fontSize = "30px";
}

function obtenerValores() {
    //obtenemos el valor de input text con id=numero1
    var n1 = document.getElementById("numero1").value;
    //por obtenerse como variable tipo cadena convertimos a entero de base 10
    n1 = parseInt(n1, 10);
    //Obtenemos el valor del input text con id=numero2
    var n2 = document.getElementById("numero2").value;
    //por obtenerse como variable tipo cadena convertimos a entero de base 10
    n2 = parseInt(n2, 10);
    return [n1, n2];
}

function Sumar() {
    [n1, n2] = obtenerValores();
    //lamado de la funcion propiedades
    Propiedades();
    //podemos usar n1 y n2 en la funcion ya que son variables globales
    R.innerHTML =  "La suma de los números es: " + (n1 + n2);
}

function Restar() {
    [n1, n2] = obtenerValores();
    //lamado de la funcion propiedades
    Propiedades();
    //podemos usar n1 y n2 en la funcion ya que son variables globales
    R.innerHTML = "La resta de los números es: " + (n1 - n2);
}

function Multiplicar() {
    [n1, n2] = obtenerValores();
    //lamado de la funcion propiedades
    Propiedades();
    //podemos usar n1 y n2 en la funcion ya que son variables globales
    R.innerHTML = "La multiplicación de los números es: " + (n1 * n2);
}

function Division() {
    [n1, n2] = obtenerValores();
    //lamado de la funcion propiedades
    Propiedades();
    if (n2 === 0)
        d = "Error: division por 0";
    else
        d = (n1 / n2) * 100 / 100;
    //Dejamos el resultado en el div que ahora lo manejamos con la varialbe R
    R.innerHTML = "La división de los números es: " + (d);
}

function Potenciacion() {
    [n1, n2] = obtenerValores();
    //lamado de la funcion propiedades
    Propiedades();
    //dejamos el resultado en el div que ahora lo manejamos con la variable R
    R.innerHTML = "La potencia de los números es: " + (Math.pow(n1, n2));
}

function Concatenacion() {
    //Extraemos los numeros sin convertirlos a entero para concatenarlos
    n1 = document.getElementById("numero1").value;
    n2 = document.getElementById("numero2").value;
    //llamado de la funcion propiedades
    Propiedades();
    //dejamos el resultado en el div que ahora lo manejamos con la variable R
    R.innerHTML = "La concatenación de los numero es: " + (n1 + n2);
}

function Instruccion_if() {
    [n1, n2] = obtenerValores();
    //llamado de la funcion propiedades
    Propiedades();
    R.innerHTML = "Ejemplo con  instruccion if usando sweetalert";
    if (n1 > n2) {
        swal("Mensaje", "n1 es mayor a n2");
    } else if (n1 == n2) {
        swal("Mensaje", "n1 es igual a n2", "succes");
    } else {
        swal({
            title: "Mensaje",
            text: "n1 es menor que n2",
            icon: "info",
            button: "Salir",
        });
    }
}

function Instruccion_for() {
    [n1, n2] = obtenerValores();
    //llamado de la funcion propiedades
    Propiedades();
    contador = 0;
    //usamos el for (para)
    for (i = n1; i < n2; i++) {
        contador = contador + 1;
    }
    //dejamos el mensaje en el div que ahora lo manejamos con la variable R
    R.innerHTML = "Los ciclos que realizo fueron " + contador;
}

function Instruccion_switch() {
    [n1, n2] = obtenerValores();
    //llamamos la funcion propiedades
    Propiedades();
    R.innerHTML = "Ejemplo con instruccion Switch usando sweetalert";

    switch (n1) {
        case 1:
            swal("Mensaje", "n1 tiene un valor de 1");
            break;
        case 2:
            swal("Mensaje", "n1 tiene un valor de 2", "success");
            break;
        default:
            swal({
                title: "Mensaje",
                text: "n1 tiene un valor mayor de 2",
                icon: "info",
                button: "Salir",
            });
            break;
    }
}