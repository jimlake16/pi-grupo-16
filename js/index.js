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


// carga de categorias (api)

let listaCategorias = document.querySelector("#listaCategorias");

if (listaCategorias) {

    
    fetch("https://dummyjson.com/products/category-list")

        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            
            listaCategorias.innerHTML = "";

            for (let i = 0; i < data.length; i++) {
                let categoria = data[i];

                
                listaCategorias.innerHTML += `<li><a href="./category.html?categoria=${categoria}">${categoria}</a></li>`;
            }
        })
        .catch(function(error) {
            console.log("Error al traer categorías: ", error);
            listaCategorias.innerHTML = "<li>No se pudieron cargar las categorías.</li>";
        });
}


// carga de productos (api)

let category1 = document.querySelector("#productosCategoria1");
let products1 = "";

if (category1) {

    fetch('https://dummyjson.com/products/category/smartphones')
        .then(function(response){
            return response.json();
        })
        .then(function(data) {

            for(let i = 0; i< data.products.length; i++){
                let producto1 = data.products[i];

                products1 += `<article>
                                <img src="${producto1.images[0]}" alt="${producto1.title}">
                                <h2>${producto1.title}</h2>
                                <p>${producto1.description}</p>
                                <p>$ ${producto1.price}</p>
                                <div><a href="./product.html?id=${producto1.id}">Ver detalle</a></div>
                              </article>`;
            }

            category1.innerHTML = products1;
        })
        .catch(function(error){
            console.log("Error al traer productos de la primera sección: " + error);
            category1.innerHTML = "<p>No se pudieron cargar los productos.</p>";
        });
}

let category2 = document.querySelector("#productosCategoria2");
let products2 = "";

if (category2) {

    fetch('https://dummyjson.com/products/category/laptops')
        .then(function(response){
            return response.json();
        })
        .then(function(data) {

            for (let i = 0; i < data.products.length; i++) {
                let producto2 = data.products[i];

                products2 += `<article>
                                <img src="${producto2.images[0]}" alt="${producto2.title}">
                                <h2>${producto2.title}</h2>
                                <p>${producto2.description}</p>
                                <p>$ ${producto2.price}</p>
                                <div><a href="./product.html?id=${producto2.id}">Ver detalle</a></div>
                              </article>`;
            }

            category2.innerHTML = products2;
        })
        .catch(function(error){
            console.log("Error al traer productos de la segunda sección: " + error);
            category2.innerHTML = "<p>No se pudieron cargar los productos.</p>";
        });
}