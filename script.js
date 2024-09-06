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
        // Alternatively, you could display a modal or redirect to a recipe details page.
    });
});
