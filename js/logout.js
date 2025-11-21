const linkLogout = document.querySelector("#logout");

if (linkLogout) {
    linkLogout.addEventListener("click", (e) => {
        e.preventDefault();

        // Eliminar usuario del storage //
        let dataObj = JSON.parse(data);

        localStorage.removeItem("dataObj");

        // Recargar la página //
        location.reload();
    });
    
}