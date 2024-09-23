document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        const slideWidth = slides[0].clientWidth; // Obtener el ancho real del slide
        const offset = currentIndex * slideWidth; // Calcular el desplazamiento basado en el ancho del slide
        slider.style.transform = `translateX(-${offset}px)`;
    }

    setInterval(showNextSlide, 3000); // Cambia de slide cada 3 segundos

    // Ajustar la posición del slide al redimensionar la ventana
    window.addEventListener('resize', () => {
        const slideWidth = slides[0].clientWidth;
        const offset = currentIndex * slideWidth;
        slider.style.transform = `translateX(-${offset}px)`;
    });
});
