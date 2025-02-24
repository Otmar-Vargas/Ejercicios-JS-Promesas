// Objeto que representa un usuario válido con su rol y mensaje de inicio de sesión
var Usuario = {
    rol: "Administrador",
    mensaje: "Inicio de sesión exitoso"
};

// Objeto que representa un error cuando las credenciales son incorrectas
var error = {
    error: "Credenciales incorrectas",
    codigo: "401"
};

// Función que simula la autenticación de un usuario y devuelve una promesa
function authenticateUser(user, password) {
    return new Promise((resolve, reject) => {
        // Simula un tiempo de espera de 2 segundos antes de verificar las credenciales
        setTimeout(() => {
            // Si el usuario y la contraseña son correctos, la promesa se resuelve con el objeto Usuario
            if (user == "admin" && password == "1234") {
                resolve(Usuario);
            } else {
                // Si las credenciales son incorrectas, la promesa se rechaza con el objeto error
                reject(error);
            }
        }, 2000);
    });
}

// Llamada a la función con el usuario "admin" y la contraseña "1234"
authenticateUser("admin", "1234")
    // Si la promesa se resuelve correctamente, imprime el objeto Usuario en la consola
    .then((message) => console.log(message))
    // Si la promesa es rechazada, imprime el objeto error en la consola
    .catch((error) => console.log(error));
