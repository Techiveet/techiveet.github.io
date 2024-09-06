let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function moveSlide(step) {
    showSlide(currentSlideIndex + step);
}

function currentSlide(index) {
    showSlide(index - 1);
}

// Initialize slider
showSlide(currentSlideIndex);

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

// Smooth scroll to recipe section when Explore Recipes is clicked
document.querySelector('.explore-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#recipes').scrollIntoView({
        behavior: 'smooth'
    });
});

// Handle View Recipe button clicks
const recipeButtons = document.querySelectorAll('.view-recipe-btn');
recipeButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('This feature is coming soon!');
    });
});
