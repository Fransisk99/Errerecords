document.addEventListener("DOMContentLoaded", () => {
    let images = document.querySelectorAll('.immaginiRandomContainer img');
    let messaggio = document.getElementById('messaggio');
    
    images.forEach(img => {
        img.addEventListener('click', () => {
            if (img.classList.contains('ingrandita')) {
                img.classList.remove('ingrandita');
                messaggio.style.display = 'none';
            } else {
                images.forEach(i => {
                    i.classList.remove('ingrandita');
                });
                img.classList.add('ingrandita');
                messaggio.style.display = 'block';
            }
        });
    });
});
