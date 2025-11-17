
//defino variables

let validarForm = document.querySelector("#login");
let validarEmail = document.querySelector('input[name="email"]');
let validarContra = document.querySelector('input[name="password"]')

//condiciones del form
validarForm.addEventListener("submit", function(e){
    const email = validarEmail.value;
    const password = validarContra.value;

  // Validar email vacío
    if (email === "") {
        alert("El email es obligatorio.");
        e.preventDefault();
        return;
  }

  // Validar contraseña vacía
    if (password === "") {
         alert("La contraseña es obligatoria.");
         e.preventDefault();
        return;
  }

  // Validar longitud mínima
    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        e.preventDefault();
        return;
  }

  

  // Guardar email en storage
  localStorage.setItem("emailUsuario", email);
 });
