function search() {
    // Obtener el término de búsqueda
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Obtener todos los nombres de productos
    var productNames = document.querySelectorAll('.titulo-producto-carrito');

    // Iterar sobre los nombres de productos y mostrar/ocultar los elementos que coincidan/no coincidan
    productNames.forEach(function(product) {
        var productName = product.innerText.toLowerCase();
        var productElement = product.closest('.cart-product'); // Obtener el elemento contenedor del producto
        if (productName.includes(searchTerm)) {
            productElement.style.display = 'flex'; // Mostrar el contenedor del producto
        } else {
            productElement.style.display = 'none'; // Ocultar el contenedor del producto
        }
    });
}
