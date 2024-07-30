//Creo un arreglo con los elementos button
let entradas = document.querySelectorAll("input,textarea");
//Arreglo para almacenar los "Value" de los "input"
let contacto = [];
let grabar= true; //Variable para habilitar grabación de datos
//Verifico los click del boton
document.getElementById("enviar").addEventListener("click", (e) => {
    for (let index = 0; index < entradas.length; index++) {
        contacto[index] =" "+entradas[index].value;
        if (entradas[index].value=="" && grabar) {
            grabar=false;
        }
    }
    //Si no se cumplen con las condiciones de validación, no se graba el archivo
    if (grabar) {
        //Se crea el archivo de texto
        let mensaje = new Blob([contacto], {type: "text/plain;charset=utf-8"}); // navegador
        //Libreria FileSaver.js
        saveAs(mensaje, "contacto.txt");
        alert("Gracias por su mensaje!!. A la brevedad nos pondremos en contacto.")
    } else {
        grabar=true;
    }
})



