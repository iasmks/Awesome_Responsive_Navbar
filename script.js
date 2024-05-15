const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});


// Get all anchor tags inside the menu
const menuLinks = document.querySelectorAll('.menu a');

// Add click event listener to each anchor tag
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Hide the menu when a link is clicked
    menu.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});