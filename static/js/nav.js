document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.replace(/\/$/, "");
    const navLinks = document.querySelectorAll(".nav-link");
    console.log("Current Path:", currentPath);
    navLinks.forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, "");
        console.log("Link Path:", linkPath);
        if (linkPath === currentPath && link.parentElement.id !== "works-link") {
            link.classList.add("active");
        }
    });
});

const mainNavButtons = document.querySelectorAll('.nav-link')
const worksNavButton = mainNavButtons[2]
const worksNavLinks = document.querySelector('.works-nav-links')
const mainNavContainer = document.querySelector('.nav-links')

worksNavButton.addEventListener('mouseover', () => {
    mainNavContainer.classList.add('dropped')

})

document.addEventListener('mouseout', (event) => {
    const target = event.target;
    const isInsideMainNav = mainNavContainer.contains(target);
    const isInsideWorksNav = worksNavLinks.contains(target);

    if (!isInsideMainNav && !isInsideWorksNav) {
        mainNavContainer.classList.remove('dropped');
    }
});