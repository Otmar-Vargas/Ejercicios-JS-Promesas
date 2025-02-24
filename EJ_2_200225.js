function VerificarEdad(edad){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if(edad >= 18){
                resolve("Compra Permitida")
            }else{
                reject("Debes ser mayor de edad para comprar este producto")
            }
        },2000);
    });
}

VerificarEdad(14)
    .then((message) => console.log(message))
    .catch((error) => console.log(error))