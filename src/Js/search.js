function search() {
    // Obtener el término de búsqueda
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Obtener todos los elementos a buscar
    var elements = document.getElementsByClassName('element');

    // Iterar sobre los elementos y ocultar los que no coincidan con el término de búsqueda
    for (var i = 0; i < elements.length; i++) {
        var elementName = elements[i].innerText.toLowerCase();
        if (elementName.includes(searchTerm)) {
            elements[i].style.display = 'block'; // Mostrar elementos que coincidan
        } else {
            elements[i].style.display = 'none'; // Ocultar elementos que no coincidan
        }
    }
}