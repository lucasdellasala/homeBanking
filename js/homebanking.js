//Declaración de variables

var nombreUsuario = 'Lucas Della Sala';
var saldoCuenta = 10000;
var limiteExtraccion = 10000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {

}

function extraerDinero() {
    var stringRetiro = prompt('Cuánto dinero desea retirar?');
    alert(stringRetiro);
    var retiro = parseInt(stringRetiro);
    var aux = Number(stringRetiro);
    alert(retiro);
    alert(aux);
    var saldoAnterior = saldoCuenta;
    if (retiro<saldoCuenta){
        if (retiro<=limiteExtraccion){
            if (retiro % 100===0){
            restarDinero(retiro);
            actualizarSaldoEnPantalla();
            alert('Saldo anterior: '+ saldoAnterior +'\nMonto extraído: '+ retiro + '\nSaldo actual: '+saldoCuenta);
            } else {
                alert('Solo puedes extraer billetes de $100');
            }
        } else {
            alert('La cantidad de dinero que deseas extraer es mayor a tu límite de extracción');
        }
    } else{
        alert('No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero');
    }    
}

function depositarDinero() {
    var stringDeposito = prompt('Cuánto dinero desea depositar?');
    var deposito = parseInt(stringDeposito);
    var saldoAnterior = saldoCuenta;
    sumarDinero(deposito);
    actualizarSaldoEnPantalla();
    alert('Saldo anterior: '+ saldoAnterior +'\nMonto depositado: '+ deposito + '\nSaldo actual: '+saldoCuenta);

}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

function sumarDinero (ingresoDinero) {
    saldoCuenta=saldoCuenta+ingresoDinero;
}

function restarDinero (egresoDinero) {
    saldoCuenta=saldoCuenta-egresoDinero;
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}