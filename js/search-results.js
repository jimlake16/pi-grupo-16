document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector(".buscador");
    const searchInput = searchForm.querySelector("input");
    const productsSection = document.getElementById("resultsContainer");
    const titleElement = document.getElementById("searchTitle");

    // Loader
    const loader = "<p style='font-weight:bold'>Cargando resultados...</p>";

    // Detectar término inicial en la URL
    const urlParams = new URLSearchParams(window.location.search);
    const initialTerm = urlParams.get("q");
    if (initialTerm) {
        searchInput.value = initialTerm;
        searchProducts(initialTerm);
    }

    function searchProducts(term) {
        productsSection.innerHTML = loader;
        titleElement.textContent = "Resultados de búsqueda para: " + term;

        fetch("https://dummyjson.com/products/search?q=" + term)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                const productos = data.products;

                if (!productos || productos.length === 0) {
                    productsSection.innerHTML = "";
                    titleElement.textContent = "No se encontraron resultados para: " + term;
                    return;
                }

    
                let html = "";
                for (let i = 0; i < productos.length; i++) {
                    const p = productos[i];
                    html += "<article>" +
                                "<img src='" + p.thumbnail + "' alt='" + p.title + "'>" +
                                "<h4>" + p.title + "</h4>" +
                                "<p>" + p.description + "</p>" +
                                "<div class='precio'>$" + p.price + "</div>" +
                                "<a class='ver-mas' href='/product.html?id=" + p.id + "'>Ver más</a>" +
                            "</article>";
                }

                productsSection.innerHTML = html;
            })
            .catch(function(error) {
                console.log("Error al buscar productos:", error);
                productsSection.innerHTML = "";
                titleElement.textContent = "Ocurrió un error al buscar los productos.";
            });
    }

    // Evento submit
    searchForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const term = searchInput.value;

        if (term) {
            searchProducts(term);
            window.location.href = "?q=" + term;
        } else {
            alert("Escriba un término de búsqueda.");
        }
    });
});
