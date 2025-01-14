// Select all anchor elements with href attribute starting with '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Add click event listener to each anchor
    anchor.addEventListener('click', function (e) {
        // Prevent default anchor click behavior
        e.preventDefault();
        // Scroll to the element with the ID specified in the href attribute
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scrolling
        });
    });
});

const toggleButton = document.getElementById('themeToggle');
toggleButton.addEventListener('click', () => {
    console.log("Button clicked!");
});

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') 
{
    document.body.classList.add('dark-mode');
}

// Add event listener to toggle button
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  
    // Save user preference in local storage
    if (document.body.classList.contains('dark-mode')) 
    {
        localStorage.setItem('theme', 'dark');
    } 
    else 
    {
        localStorage.setItem('theme', 'light');
    }
});