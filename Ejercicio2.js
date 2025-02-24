// Función que verifica la edad y devuelve una promesa
function VerificarEdad(edad) {
    return new Promise((resolve, reject) => {
        // Simula una espera de 2 segundos antes de devolver la respuesta
        setTimeout(() => {
            // Si la edad es 18 o más, la promesa se resuelve con un mensaje de éxito
            if (edad >= 18) {
                resolve("Compra Permitida");
            } else {
                // Si la edad es menor a 18, la promesa se rechaza con un mensaje de error
                reject("Debes ser mayor de edad para comprar este producto");
            }
        }, 2000);
    });
}

// Llamada a la función con un valor de edad de 14 años
VerificarEdad(14)
    // Si la promesa se resuelve correctamente, imprime el mensaje en la consola
    .then((message) => console.log(message))
    // Si la promesa es rechazada, imprime el mensaje de error en la consola
    .catch((error) => console.log(error));
