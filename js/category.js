
// agarro lo que esta desp del ? en la url
let qs = location.search;

//transformo en objheto
let qsObj = new URLSearchParams(qs);

//guardo en categoryu la categoria clorrespondiente
let category = qsObj.get('categoria');


//cambio el titulo
let titulo = document.querySelector(".titulo-productos");
titulo.innerText = category;




// carga de productos (api)

let categ = document.querySelector("#productosCategoria");
let produc = "";

if (categ) {
    
    fetch(`https://dummyjson.com/products/category/${category}`)
        .then(function(response){
            return response.json();
        })
        .then(function(data) {

            for(let i = 0; i< data.products.length; i++){
                let producto1 = data.products[i];

                produc += `<article>
                                <img src="${producto1.images[0]}" alt="${producto1.title}">
                                <h2>${producto1.title}</h2>
                                <p>${producto1.description}</p>
                                <p>$ ${producto1.price}</p>
                                <div><a href="./product.html?id=${producto1.id}">Ver detalle</a></div>
                              </article>`;
            }

            categ.innerHTML = produc;
        })
        .catch(function(error){
            console.log("Error: " + error);
            categ.innerHTML = "<p>No se cargaron lso productos.</p>";
        });
}
