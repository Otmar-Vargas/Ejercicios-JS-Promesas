//EJERCICIO 3

let inventario = { "laptop": 5, "mouse": 10, "teclado": 0 }; //Se crea un objeto inventario con distintos productos como propiedades
function verificarStock(producto,cantidad){ //Se crea la función con producto y cantidad como parámetros
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(inventario.hasOwnProperty(producto) && cantidad <= inventario[producto]){ //el método hasOwnProperty verifica si la propiedad
                resolve("Stock disponible, procediendo con la compra.");                 //con el nombre del producto, existe en inventario.
            }else{                                                                       //y si la cantidad a comprar es menor o igual al 
                reject("Stock insuficiente");                                            //inventario disponible, se manda el resolve.
            }                                                                            //si se incumple alguna de las condiciones se manda el reject.
        },2000);
    });
}

verificarStock("laptop",2) //se manda a llamar la función verificarStock con el producto solicitado y la cantidad.
.then((mensaje)=>console.log(mensaje)) //se ejecuta si se manda el resolve
.catch((error)=>console.log(error)); //se ejecuta si se manda el reject