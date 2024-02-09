const navToggleButton = document.getElementById('nav-toggle')
const navbarContainer = document.querySelector('nav')
const toggleIcon = document.getElementById('nav-toggle-icon')

navToggleButton.addEventListener('click', () => {
    navbarContainer.classList.toggle('toggled');
    toggleIcon.classList.toggle('fa-bars');
    toggleIcon.classList.toggle('fa-xmark');
})

const mainNavButtons = document.querySelectorAll('.main-nav-links .nav-link')
const worksNavButton = mainNavButtons[1]
const worksNavLinks = document.querySelector('.works-nav-links')
const mainNavContainer = document.querySelector('.main-nav-links')

worksNavButton.addEventListener('click', () => {
    mainNavContainer.classList.toggle('dropped')

})

document.addEventListener('click', (event) => {
    const target = event.target;
    const isInsideMainNav = mainNavContainer.contains(target);
    const isInsideWorksNav = worksNavLinks.contains(target);

    if (!isInsideMainNav && !isInsideWorksNav) {
        mainNavContainer.classList.remove('dropped');
    }
});