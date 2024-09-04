document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("toggle-button");
    var listContainer = document.getElementById("list-container");

    button.addEventListener("click", function() {
        // Toggle the visibility of the list container
        if (listContainer.classList.contains("hidden")) {
            listContainer.classList.remove("hidden");
            button.textContent = "Nascondi Liste";
        } else {
            listContainer.classList.add("hidden");
            button.textContent = "Mostra Liste";
        }
    });
});