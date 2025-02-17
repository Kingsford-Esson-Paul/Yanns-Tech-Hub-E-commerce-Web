const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showNextSlide() {
    // Remove active class from the current slide
    slides[currentSlide].classList.remove('active');

    // Increment slide index
    currentSlide = (currentSlide + 1) % slides.length;

    // Add active class to the next slide
    slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
setInterval(showNextSlide, 5000);