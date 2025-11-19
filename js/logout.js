const linkLogout = document.querySelector("#logout");

if (linkLogout) {
    linkLogout.addEventListener("click", (e) => {
        e.preventDefault();

        // Eliminar usuario del storage //
        localStorage.removeItem("emailUsuario");

        // Recargar la página //
        location.reload();
    });
}