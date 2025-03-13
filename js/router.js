document.addEventListener("DOMContentLoaded", function () {
    // Cargar el Header
    fetch("components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error("Error al cargar el header:", error));
});
