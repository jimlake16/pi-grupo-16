// Obtener email del usuario
let userEmail = localStorage.getItem("emailUsuario");

// Referencias DOM
let saludo = document.querySelector("#saludo-usuario");
let linkLogout = document.querySelector("#logout");
let linkLogin = document.querySelector("#linkLogin");
let linkRegister = document.querySelector("#linkRegistro");

// Para usuario logueado
if (userEmail) {
    if (saludo) saludo.textContent = `Bienvenido: ${userEmail}`;
    if (linkLogout) linkLogout.style.display = "inline-block";
    if (linkLogin) linkLogin.style.display = "none";
    if (linkRegister) linkRegister.style.display = "none";
} 
// Para usuario no logueado
else {
    if (saludo) saludo.textContent = "";
    if (linkLogout) linkLogout.style.display = "none";
    if (linkLogin) linkLogin.style.display = "inline-block";
    if (linkRegister) linkRegister.style.display = "inline-block";
}
