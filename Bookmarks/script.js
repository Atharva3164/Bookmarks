// alert("click on ok ")

// Select the dark mode button
const darkModeToggle = document.getElementById('darkModeToggle');

// Add an event listener to toggle dark mode
darkModeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');
    
    // Optional: Update button icon and text based on mode
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '🌜 ==> 🌞';
    } else {
        darkModeToggle.textContent = '🌞 ==> 🌜';
    }
});
