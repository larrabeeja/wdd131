// JavaScript to support dynamic footer year and date last modified
document.addEventListener('DOMContentLoaded', () => {
    const currentYearElement = document.getElementById('current-year');
    const lastModifiedElement = document.getElementById('last-modified');

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    currentYearElement.textContent = currentYear;
    lastModifiedElement.textContent = lastModified;

    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
            hamburger.innerHTML = '&#9776;';
        } else {
            navMenu.style.display = 'flex';
            hamburger.innerHTML = '&times;';
        }
    });
});
