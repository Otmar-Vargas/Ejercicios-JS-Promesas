var Usuario = {
    rol: "Administrador",
    mensaje: "Inicio de sesion exitoso"
};
var error = {
    error: "Credenciales incorrectas",
    codigo: "401"
};
function authenticateUser(user,password){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(user == "admin" && password == "1234"){
                resolve(Usuario)
            }else{
                reject(error)
            }
        },2000);
    });
}

authenticateUser("admin","1234")
    .then((message) => console.log(message))
    .catch((error) => console.log(error))
