// recuperar info de l storage
let data = localStorage.getItem("info");

// recuperar elementos del DOM
let saludo = document.querySelector("#nombre");
// preguntar si los datos existen
if (data) {
    // convertir los datos en OBJ
    let dataObj = JSON.parse(data);
    
    // Modificar textos en el dom
    if (saludo) {
        saludo.innerText = `Bienvenido: ${dataObj.email}`;
      
        this.submit();
    }

} else {

    alert("No se pudo guardar los datos correctamente")
}

