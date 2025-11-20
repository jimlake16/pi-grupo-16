const form = document.querySelector("#registerForm");

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeat-password");
const terms = document.querySelector("#terms");
const errorMessage = document.querySelector("#errorMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    errorMessage.textContent = "";

    // Email obligatorio
    if (email.value.trim() === "") {
        errorMessage.textContent = "El email es obligatorio.";
        return;
    }

    // Contraseña obligatoria
    if (password.value.trim() === "") {
        errorMessage.textContent = "La contraseña es obligatoria.";
        return;
    }

    // Contraseña mínimo 6 caracteres
    if (password.value.length < 6) {
        errorMessage.textContent = "La contraseña debe tener al menos 6 caracteres.";
        return;
    }

    // Validar repetición
    if (password.value !== repeatPassword.value) {
        errorMessage.textContent = "Las contraseñas no coinciden.";
        return;
    }

    // Términos y condiciones
    if (!terms.checked) {
        errorMessage.textContent = "Debe aceptar términos y condiciones.";
        return;
    }

    // Si todo OK → redirige al login
    window.location.href = "login.html";
});