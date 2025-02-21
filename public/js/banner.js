// banner.js
document.addEventListener("DOMContentLoaded", function () {
    fetch("banner.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        })
        .catch(error => console.error("Error loading banner:", error));
});