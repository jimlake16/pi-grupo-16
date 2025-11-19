const userEmail = localStorage.getItem("emailUsuario");

// Referencias DOM //

const saludo = document.querySelector("#saludo-usuario");
const linkLogout = document.querySelector("#logout");
const linkLogin = document.querySelector("#linkLogin");
const linkRegister = document.querySelector("#linkRegistro");

// Para usuario logueado //

if (userEmail) {
    if (saludo) saludo.textContent = `Bienvenido: ${userEmail}`;
    if (linkLogout) linkLogout.style.display = "inline-block";
    if (linkLogin) linkLogin.style.display = "none";
    if (linkRegister) linkRegister.style.display = "none";
}

// Para usuario no logueado //

else {
    if (saludo) saludo.textContent = "";
    if (linkLogout) linkLogout.style.display = "none";
    if (linkLogin) linkLogin.style.display = "inline-block";
    if (linkRegister) linkRegister.style.display = "inline-block";
}