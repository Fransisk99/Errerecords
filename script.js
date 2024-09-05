document.addEventListener("DOMContentLoaded", () => {
    // Seleziona tutte le immagini
    let images = document.querySelectorAll('.immaginiRandomContainer img');

    images.forEach(img => {
        // Aggiungi un gestore di eventi click per ciascuna immagine
        img.addEventListener('click', () => {
            
            // Rimuovi la classe 'ingrandita' da tutte le immagini
            images.forEach(i => i.classList.remove('ingrandita'));
            
            // Aggiungi la classe 'ingrandita' solo all'immagine cliccata
            img.classList.add('ingrandita');
        });
    });
});
