const mainNavButtons = document.querySelectorAll('.main-nav-links .nav-link')
const worksNavButton = mainNavButtons[1]
const worksNavLinks = document.querySelector('.works-nav-links')
const mainNavContainer = document.querySelector('.main-nav-links')

worksNavButton.addEventListener('mouseover', () => {
    mainNavContainer.classList.add('dropped')

})

document.addEventListener('click', (event) => {
    const target = event.target;
    const isInsideMainNav = mainNavContainer.contains(target);
    const isInsideWorksNav = worksNavLinks.contains(target);

    if (!isInsideMainNav && !isInsideWorksNav) {
        mainNavContainer.classList.remove('dropped');
    }
});