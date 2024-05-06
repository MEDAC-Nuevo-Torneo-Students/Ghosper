function search() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var items = document.querySelectorAll(".info_product");

    items.forEach(function(item) {
        var productName = item.querySelector("h2").innerText.toLowerCase();
        if (productName.includes(input)) {
            item.parentElement.style.display = "block";
        } else {
            item.parentElement.style.display = "none";
        }
    });
}
