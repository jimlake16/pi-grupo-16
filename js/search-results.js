//agarro desp del ? de la url
let qs = location.search;

//convierto en obj
let qsObj = new URLSearchParams(qs);

//agarro lo q se busco
let busc = qsObj.get("busca");


let rbusc = document.querySelector("#resultsContainer");
let titulo = document.querySelector("#searchTitle");



titulo.innerText = `Resultados de búsqueda para: ${busc}`;
   


fetch(`https://dummyjson.com/products/search?q=${busc}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            let productos = data.products;
            let contenido = "";

            //coon el if veo si aparece algun resultad, si no hay te manda al else
            if (productos.length >= 1) {

                for (let i = 0; i < productos.length; i++) {
                    let p = productos[i];

                    contenido += `
                        <article>
                            <img src="${p.images[0]}" alt="${p.title}">
                            <h4>${p.title}</h4>
                            <p>${p.description}</p>
                            <div class="precio">$${p.price}</div>
                            <a class="ver-mas" href="/product.html?id=${p.id}">Ver detalle</a>
                        </article>
                    `;
                }

                rbusc.innerHTML = contenido;
                //no se encontraron prod
            } else {
                titulo.innerText = `No se encontraron resultados para: ${busc}`;
                rbusc.innerHTML = "";
            }
        })
        .catch(function(error) {
            console.log("Error: " + error);
            titulo.innerText = "error al cargar oproductos.";
});
