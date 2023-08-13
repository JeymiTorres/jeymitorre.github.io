document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        const toggleButton = card.querySelector(".toggle-button");
        const parrafo1 = card.querySelector(".parrafo1");

        toggleButton.addEventListener("click", function () {
            parrafo1.classList.toggle("show");
            toggleButton.textContent = parrafo1.classList.contains("show") ? "Mostrar menos" : "Mostrar más";
        });
    });
});

