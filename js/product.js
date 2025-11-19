let selec = location.search; //agarro el producto, id posterior al ?

let obje = new URLSearchParams(selec);// convierte parametros en un objeto manipulable

let id = obje.get('id'); //defino id

fetch(`https://dummyjson.com/products/${id}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        let imagen = document.querySelector("#foto");

        imagen.src = data.thumbnail;

        imagen.alt = data.title;


        let tit = document.querySelector("#tit");

        tit.innerHTML = data.title;


        let marca = document.querySelector("#marca");

        marca.innerHTML = "<strong>Marca: </strong>" + data.brand;


        let categ = document.querySelector("#categ");

        categ.innerHTML = "<strong>Categoría: </strong> <a href='category.html?category=" + data.category + "' style='text-decoration: none; color: black;'>" + data.category + "</a>";


        let stock = document.querySelector("#stock");

        stock.innerHTML = "<strong>Stock: </strong>" + data.stock + " unidades";


        let precio = document.querySelector("#precio");

        precio.innerHTML = "$ " + data.price;

        
        let desc = document.querySelector("#desc");
        
        desc.innerHTML = data.description;


        let productTags = document.querySelector("#tags");

        productTags.innerHTML = "";
        let tags = []

        if (data.tags){
            tags = data.tags
        }

        if (tags.length > 0){
            for (let i = 0; i < tags.length; i++) {
                let nTag = "<li>" + "  " + tags[i] + "</li>";
                productTags.innerHTML = productTags.innerHTML + nTag;
            }}
        else {
            productTags.innerHTML = "";
        }




    // REVIEWS

    let reviewstotal = [];

    if (data.reviews) {
        reviewstotal = data.reviews;
    }

    for (let i = 0; i < reviewstotal.length; i++) {

    let review = reviewstotal[i];

   
    let usuario = document.querySelector("#usuario" + (i+1));
    usuario.innerText = review.reviewerName;

    let comentario = document.querySelector("#comentario" + (i+1));
    comentario.innerText = review.comment;

  
    let estrellas = "";
    for (let estrella = 0; estrella < review.rating; estrella++) {
        estrellas = estrellas + "⭐️";
    }
    
    let puntuacion = document.querySelector("#estrellas" + (i+1));
    puntuacion.innerText = estrellas;

   
    let fechaCom = review.date;
    let fecha = "";
    for (let ce = 0; ce < 10; ce++) {
        fecha = fecha + fechaCom[ce];
    }
    
    let f = document.querySelector("#fecha" + (i+1));
    f.innerText = "Fecha: " + fecha;
    }


    })
    .catch(function(error) {
        console.log("Error al traer producto: ", error);
});


