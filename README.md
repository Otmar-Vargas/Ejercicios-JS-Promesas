# Ejercicios-JS-Promesas
Ejercicio 1.
Para este ejercicio, solo ocupe modificar el codigo proporcionado por el docente, para que simule una descarga de archivos que no pese mas a 
50 mb, en caso de sea mayor, nos diga que no se pudo descargar.


Ejercicio 2. 
Este ejercicio define la función VerificarEdad(edad), que devuelve una promesa que, tras 2 segundos, se resuelve con "Compra Permitida" si la edad es 18 o más, o se rechaza con "Debes ser mayor de edad para comprar este producto" si es menor.


Ejercicio 3.
La dificultad de este ejercicio reside en que usamos un objeto para almacenar el inventario en vez de un arreglo, para
esto investigue un método para verificar una propiedad y di con el método hasOwnObjectProperty para verificar si 
existe una propiedad específica dentro de un arreglo, de ahí solo bastó seguir la estructura básica de una promesa para imprimir el resolve y el reject.

Ejercicio 4.
Para este ejercicio, es muy parecido al primero, es una validacion para saber si un monto es mayor o igual a otro.

Ejercicio 5.
Este ejercicio define la función authenticateUser(user, password), que devuelve una promesa que, tras 2 segundos, se resuelve con un objeto de usuario si las credenciales son correctas (admin, 1234), o se rechaza con un objeto de error si son incorrectas.

Ejercicio 6. 
En este ejercicio no hubo muchas complicaciones es muy parecido a los demás solamente que en este necesitas hacer un cálculo utilizando los parámetros dados para retornar un valor al usuario.

Ejercicio 7.
Para este ejercicio, si tuve que investigar diferentes metodos para realizarlo, empece con un metodo .includes que verifica si un elemento se encuentra en un arreglo, 
pero no podía acceder a el, fue hasta que encontre que solo tenia que ingresar la ciduad en el arreglo y si estaba me mostraria la ciudad, y para poner los atributos solo 
accedia al arreglo con resolve({ ciudad, ...ciudadesDB[ciudad] });
