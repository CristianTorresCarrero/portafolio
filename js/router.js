document.addEventListener("DOMContentLoaded", function () {
    // Cargar el Header
    fetch("components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el header:", error));

    // Cargar el Footer
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el footer:", error));
});
