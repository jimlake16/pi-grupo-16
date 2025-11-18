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

        categ.innerHTML = "<strong>Categoría: </strong> <a href='category.html?category=" + data.category + "'>" + data.category + "</a>";


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
    });
