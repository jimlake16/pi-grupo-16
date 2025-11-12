let validarBusqueda = document.querySelector(".buscador");
    validarBusqueda.addEventListener("submit", function(event) {
    let input = validarBusqueda.querySelector("input");
    
        if (input.value == "") {
        alert("El campo no puede estar vacío.");
        event.preventDefault();
        return false;
    }

    else if (input.value.length < 3) {
        alert("Debe tener al menos 3 caracteres.");
        event.preventDefault();
        return false;
    }

    return true;
});
