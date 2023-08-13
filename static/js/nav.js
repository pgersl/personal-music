const navToggleButton = document.getElementById('nav-toggle-btn')
const navbarContainer = document.querySelector('.nav-links')
const toggleIcon = document.querySelector('#nav-toggle-btn i')

navToggleButton.addEventListener('click', () => {
    navbarContainer.classList.toggle('toggled');
    toggleIcon.classList.toggle('fa-bars');
    toggleIcon.classList.toggle('fa-xmark');
})