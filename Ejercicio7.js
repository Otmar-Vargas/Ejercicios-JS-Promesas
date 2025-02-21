
let ciudadesDB = {
    "tepic": { temperatura: "32°C", condicion: "Soleado" },
    "GDL": { temperatura: "28°C", condicion: "Nublado" },
    "Monterrey": { temperatura: "30°C", condicion: "Lluvioso" },
    "Colima": { temperatura: "35°C", condicion: "Caluroso" },
    "CDMX": { temperatura: "25°C", condicion: "Despejado" },
    "Vallarta": { temperatura: "29°C", condicion: "Húmedo" },
    "Bucerias": { temperatura: "31°C", condicion: "Soleado" }
};

// Función que consulta el clima de una ciudad, devolviendo una promesa
function consultarClima(ciudad) {
    return new Promise((resolve, reject) => { 
        
        setTimeout(() => { 
            // Verifica si la ciudad existe en la base de datos local
            if (ciudadesDB[ciudad]) { 
                // Si la ciudad existe, la promesa se resuelve con su información climática
                resolve({ ciudad, ...ciudadesDB[ciudad] }); 
            } else {
                // Si la ciudad no está en la base de datos, se rechaza la promesa con un error 404
                reject({ error: "Ciudad no encontrada", codigo: 404 }); 
            }
        }, 2000); 
    });
}

// Prueba de la función con una ciudad existente
consultarClima("tepic")
    .then((data) => console.log("Éxito:", data)) 
    .catch((error) => console.log("Error:", error)); 


consultarClima("Guanajuato")
    .then((data) => console.log("Éxito:", data)) 
    .catch((error) => console.log("Error:", error)); 
