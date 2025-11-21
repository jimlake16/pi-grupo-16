// recuperar info de l stor
let data = localStorage.getItem("info");

// recuperar elementos del dom
let saludo = document.querySelector("#nombre");

 
// preguntar si los datos existen
if (data) {
    
    let dataObj = JSON.parse(data);
    // Modificar textos en el dom

   

    if (saludo) {
        let sacarLogin = document.querySelector(".login")
        sacarLogin.style.display = "none";
        saludo.innerText = `Bienvenido: ${dataObj.email}`;
        
        this.submit();
    }
}
