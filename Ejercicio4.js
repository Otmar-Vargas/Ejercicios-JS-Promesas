/*Instrucción:
Crea una función procesarPago(monto) que devuelva una promesa.
Si el monto es mayor a 0, la promesa se resuelve con "Pago exitoso de $monto".
Si el monto es 0 o menor, la promesa se rechaza con "Error: Monto inválido".*/

function procesarPago(monto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (monto > 0) {
                resolve(`Pago exitoso de $${monto}`); // Se usa template string para incluir el monto
            } else {
                reject("Error: Monto inválido");
            }
        }, 2000); // Simulamos un retraso de 2 segundos
    });
}

// Pruebas con diferentes valores de monto
procesarPago(3)
    .then((message) => console.log(message)) // Si el pago es exitoso, muestra el mensaje
    .catch((error) => console.log(error));  

procesarPago(-1)
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
