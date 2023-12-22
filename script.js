var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/
let body;
function toggleDarkMode() {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const darkMode = localStorage.getItem('darkMode');

    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
    }
});