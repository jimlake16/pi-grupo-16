document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector(".buscador");
    const searchInput = searchForm.querySelector("input");
    const productsSection = document.querySelector(".productos-destacados");
    const titleElement = document.querySelector(".titulo-productos");

    // Crear loader
    const loader = document.createElement("p");
    loader.textContent = "Cargando resultados...";
    loader.style.fontWeight = "bold";

    // Obtener término de búsqueda desde URL
    const urlParams = new URLSearchParams(window.location.search);
    const initialTerm = urlParams.get("q");
    if (initialTerm) {
        searchInput.value = initialTerm;
        searchProducts(initialTerm);
    }

    // Función para buscar productos
    async function searchProducts(term) {
        productsSection.innerHTML = "";
        titleElement.textContent = `Resultados de búsqueda para: ${term}`;
        productsSection.appendChild(loader);

        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(term)}`);
            const data = await response.json();
            productsSection.removeChild(loader);

            if (!data.products || data.products.length === 0) {
                titleElement.textContent = `No se encontraron resultados para: ${term}`;
                return;
            }

            data.products.forEach(product => {
                const article = document.createElement("article");

                const img = document.createElement("img");
                img.src = product.thumbnail;
                img.alt = product.title;

                const h4 = document.createElement("h4");
                h4.textContent = product.title;

                const desc = document.createElement("p");
                desc.textContent = product.description;

                const price = document.createElement("div");
                price.className = "precio";
                price.textContent = `$${product.price}`;

                const link = document.createElement("a");
                link.className = "ver-mas";
                link.href = `/product.html?id=${product.id}`;
                link.textContent = "Ver más";

                article.appendChild(img);
                article.appendChild(h4);
                article.appendChild(desc);
                article.appendChild(price);
                article.appendChild(link);

                productsSection.appendChild(article);
            });

        } catch (error) {
            console.error("Error al buscar productos:", error);
            productsSection.removeChild(loader);
            titleElement.textContent = "Ocurrió un error al buscar los productos.";
        }
    }

    // Evento submit del formulario
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const term = searchInput.value.trim();
        if (term) {
            searchProducts(term);
            window.history.replaceState({}, "", `?q=${encodeURIComponent(term)}`);
        }
    });
});
