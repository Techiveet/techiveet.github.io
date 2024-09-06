// Button to explore recipes
document.querySelector('.explore-btn').addEventListener('click', function() {
    // Redirect to a recipe page or section
    window.location.href = '#recipes'; // or link to another page if necessary
  });
  
  // Display a simple alert when clicking "View Recipe" button
  const recipeButtons = document.querySelectorAll('.view-recipe-btn');
  recipeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      alert('More details coming soon! Stay tuned for full recipes.');
    });
  });
  
  // Optional: Smooth scrolling for better UX
  document.querySelector('.explore-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#recipes').scrollIntoView({ behavior: 'smooth' });
  });
  