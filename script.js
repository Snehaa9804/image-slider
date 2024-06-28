let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    goToSlide(currentSlide + 1);
});

document.querySelector('.previous').addEventListener('click', () => {
    goToSlide(currentSlide - 1);
});

dots.forEach(dot => {
    dot.addEventListener('click', (event) => {
        goToSlide(parseInt(event.target.getAttribute('data-slide')));
    });
});

function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Optional: Auto-slide functionality
setInterval(() => {
    goToSlide(currentSlide + 1);
}, 2700);
