/*
Crea una función descargarArchivo(tamaño) que devuelva una promesa.
Si el tamaño es menor o igual a 50MB, la promesa se resuelve con "Descarga completada".
Si el tamaño es mayor a 50MB, la promesa se rechaza con "El archivo es demasiado grande".
*/


function descarga(size){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(size<=50){
                resolve("Descarga completada");//si el tamaño del archivo es menor o igual a 50 se ira por aqui
            }else{
                reject("El archivo es demasiado grande");//si el tamaño del archivo es mayor a 50 se ira por aqui
            }
        }, 2000);
    });
}

descarga(30) //mandamos a llamar la promesa con valor de 30
    .then((message) => console.log(message))
    .catch((error)=> console.log(error));

descarga(60)//mandamos a llamar la promesa con valor de 60
    .then((message) => console.log(message))
    .catch((error)=> console.log(error));
    