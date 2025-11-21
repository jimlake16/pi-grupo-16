// recuperar info de st
let data = localStorage.getItem("info");

// convertir los datos en OBJ
let dataObj = JSON.parse(data);

console.log(dataObj);

// recuperar elementos del DOM
let saludo = document.querySelector("#cat1");


// preguntar si los datos existen
if (dataObj) {
   
//Modificar textos en el dom
saludo.innerText = `Bienvenido   ${dataObj.email}`;

//Modificar HTML en el dom
lista.innerHTML = ` <li><a href="./index.html">Mi perfil</a></li>
                    <li><a href="./login.html">Logout</a></li>`;

} else {
  alert("No se pudo guardar los datos correctamente")
}

