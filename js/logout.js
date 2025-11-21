let logout = document.querySelector("#logIrse");

if (logout) {

    logout.addEventListener("click",function(e){
        e.preventDefault();

        // Eliminar usuario del storage 
        localStorage.removeItem("info");
        localStorage.removeItem("emailUsuario");
        
        // Recargar la página
         this.submit();
    });


}