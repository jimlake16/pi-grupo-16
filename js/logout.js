if (localStorage.info) {
    
    let logout = document.querySelector("#logIrse");

   
    let sacarRegister = document.querySelector(".register")
    sacarRegister.style.display = "none"



    
    if (logout)
        
        logout.addEventListener("click",function(e){
        e.preventDefault();
            
        // Mostrar de nuevo los auth-buttons originales
        let mostrarlogin = document.querySelector("#loginPrincipal");
        let mostrarregister = document.querySelector(".register");
        
        if (mostrarlogin) mostrarlogin.style.display = "inline-block";
        if (mostrarregister) mostrarregister.style.display = "inline-block";

       
        localStorage.clear(); 

        // Redirigir a index.html 
        window.location.href = "./index.html";

       

    });

    }else{

    let logout = document.querySelector("#logIrse");
    logout.style.display = "none"

}
 

