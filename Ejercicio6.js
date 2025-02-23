//EJERCICIO 6

let cuenta1 = { "saldo": 3000};  //Creamos un objeto cuenta con una propiedad saldo
function verificarCuenta(cuenta,monto){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(cuenta.saldo >= monto){ //Si el saldo de la cuenta es mayor al monto a gastar, se manda el resolve
                const saldoRestante = cuenta.saldo - monto; //Se realiza el cálculo de la cuenta
                resolve({cuenta, saldoRestante, mensaje:"Transaccion aprobada"}); //Se manda un objeto con la cuenta, el saldo restante y un mensaje
            }else{
                reject({error: "Fondos insuficientes", saldoDisponible: cuenta.saldo, codigo: 402}); //Si el gasto es mayor al saldo se manda un mensaje de error
                                                                                                    //el saldo disponible y un código de error
            }
        },2000);
    });
}

verificarCuenta(cuenta1,2000) //se manda a llamar a la función con el objeto cuenta creado y un monto a gastar.
.then((mensaje)=>console.log(mensaje))
.catch((error)=>console.log(error));