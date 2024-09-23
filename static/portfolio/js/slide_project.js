document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        const slideWidth = slides[0].clientWidth;
        const offset = currentIndex * slideWidth;
        slider.style.transform = `translateX(-${offset}px)`;
    }

    setInterval(showNextSlide, 3000); 

    // Ajustar la posición del slide al redimensionar la ventana
    window.addEventListener('resize', () => {
        const slideWidth = slides[0].clientWidth;
        const offset = currentIndex * slideWidth;
        slider.style.transform = `translateX(-${offset}px)`;
    });
});
