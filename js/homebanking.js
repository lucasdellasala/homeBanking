//Declaración de variables

var nombreUsuario = 'Lucas Della Sala';
var saldoCuenta = 10000;
var limiteExtraccion = 10000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var password= 1996;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.

window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var stringNuevoLimiteExtraccion = prompt ('Ingrese el nuevo límite de extracción que desea tener');
    
    if (!validarIngresoNumerico(stringNuevoLimiteExtraccion))
        return;
    
    var nuevoLimiteExtraccion = Number(stringNuevoLimiteExtraccion);
    
    limiteExtraccion = nuevoLimiteExtraccion;

    actualizarLimiteEnPantalla();
    alert ('Su nuevo límite de extracción es $' + limiteExtraccion);
}

function extraerDinero() {
    var stringRetiro = prompt('Cuánto dinero desea retirar?');
    
    if (!validarIngresoNumerico(stringRetiro))
        return;
    
    var retiro = Number(stringRetiro);

    validarSaldoCuenta(retiro);
}

function depositarDinero() {
    var stringDeposito = prompt('Cuánto dinero desea depositar?');
    if (!validarIngresoNumerico(stringDeposito))
        return;

    var deposito = Number(stringDeposito);
    var saldoAnterior = saldoCuenta;
    sumarDinero(deposito);
    actualizarSaldoEnPantalla();
    alert('Saldo anterior: '+ saldoAnterior +'\nMonto depositado: '+ deposito + '\nSaldo actual: '+saldoCuenta);
}

function pagarServicio() {
    var seleccionServicio = prompt('Ingrese el número que corresponde para el servicio que queres pagar:\n1-Agua\n2-Luz\n3-Internet\n4-Teléfono');

    if(seleccionServicio == null){
        return;  
    }

    switch (seleccionServicio) {
        case '1':
            if (saldoCuenta >= agua){
                var saldoAnterior = saldoCuenta;
                restarDinero(agua);
                actualizarSaldoEnPantalla();
                alert('Saldo anterior: '+ saldoAnterior +'\nDinero descontado: '+ agua + '\nSaldo actual: '+saldoCuenta);
            } else {
                alert('No hay suficiente saldo en tu cuenta para pagar este servicio');
            }
            break;
        case '2':
            if (saldoCuenta>=telefono){
                var saldoAnterior = saldoCuenta;
                restarDinero(telefono);
                actualizarSaldoEnPantalla();
                alert('Saldo anterior: '+ saldoAnterior +'\nDinero descontado: '+ telefono + '\nSaldo actual: '+saldoCuenta);
            } else {
                alert('No hay suficiente saldo en tu cuenta para pagar este servicio');
            }
            break;
        case '3':
            if (saldoCuenta>=luz){
                var saldoAnterior = saldoCuenta;
                restarDinero(luz);
                actualizarSaldoEnPantalla();
                alert('Saldo anterior: '+ saldoAnterior +'\nDinero descontado: '+ luz + '\nSaldo actual: '+saldoCuenta);
            } else {
                alert('No hay suficiente saldo en tu cuenta para pagar este servicio');
            }
            break;
        case '4':
            if (saldoCuenta>=internet){
                var saldoAnterior = saldoCuenta;
                restarDinero(internet);
                actualizarSaldoEnPantalla();
                alert('Saldo anterior: '+ saldoAnterior +'\nDinero descontado: '+ internet + '\nSaldo actual: '+saldoCuenta);
            } else {
                alert('No hay suficiente saldo en tu cuenta para pagar este servicio');
            }
            break;
        default:
            alert('Por favor, ingrese solamente una de las opciones listadas');
    }
}

function transferirDinero() {
    var stringTransferencia = prompt('Ingrese el monto que desea transferir');
    if (!validarIngresoNumerico(stringTransferencia))
        return;
    var transferencia = Number (stringTransferencia);

    if (transferencia<=saldoCuenta){
        if (transferencia<=limiteExtraccion){
            var stringNumeroCuenta = prompt('Ingrese el numero de cuenta a la que desea realizar la transferencia');
            if (!validarIngresoNumerico(stringNumeroCuenta))
                return;
            var numeroCuenta = Number (stringNumeroCuenta);
    
            switch (numeroCuenta) {
                case cuentaAmiga1:
                    var saldoAnterior = saldoCuenta;
                    restarDinero(transferencia);
                    actualizarSaldoEnPantalla();
                    alert('Se han transferido: $'+ transferencia +'\nCuenta destino: '+ cuentaAmiga1);
                    break;
                case cuentaAmiga2:
                        var saldoAnterior = saldoCuenta;
                        restarDinero(transferencia);
                        actualizarSaldoEnPantalla();
                        alert('Se han transferido: $'+ transferencia +'\nCuenta destino: '+ cuentaAmiga2);
                    break;
                default:
                    alert('Por favor, ingrese correctamente el número de cuenta a la que desea realizar la transferencia');
            }
    
        } else {
            alert('La cantidad de dinero que deseas transferir es mayor a tu límite de extracción');
        }
    } else{
        alert('No hay saldo disponible en tu cuenta para transferir esa cantidad de dinero');
    }        
}

function iniciarSesion() {
    var stringCodigoVerificacion = prompt ('Por favor ingrese su código de verificación');

    if (stringCodigoVerificacion==password) {
        alert ('Bienvenido/a ' + nombreUsuario + ' ya puedes comenzar a realizar operaciones.');
    } else {
        alert ('Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.');
        
        restarDinero(saldoCuenta);
        actualizarSaldoEnPantalla();
    }
}

//Funciones recurrentes
function sumarDinero (ingresoDinero) {
    saldoCuenta=saldoCuenta+ingresoDinero;
}

function restarDinero (egresoDinero) {
    saldoCuenta=saldoCuenta-egresoDinero;
}

function validarIngresoNumerico (aValidar) {
    if(aValidar == null)
        return false;  

    if(isNaN(aValidar)){
        alert('No puedes ingresar letras o caracteres especiales');
        return false;
    } else {
        if(aValidar<=0){
            alert('No puedes ingresar 0 o números negativos');
            return false;
        } else {
            return true;
            } 
        }
}

function validarSaldoCuenta (aValidar){
    var saldoAnterior = saldoCuenta;

    if (aValidar<=saldoCuenta){
        if (aValidar<=limiteExtraccion){
            if (aValidar % 100===0){
            restarDinero(aValidar);
            actualizarSaldoEnPantalla();
            alert('Saldo anterior: '+ saldoAnterior +'\nMonto extraído: '+ aValidar + '\nSaldo actual: '+saldoCuenta);
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

