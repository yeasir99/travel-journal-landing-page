const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');

let toggle = false
hamburger.addEventListener('click', () => {
    toggle = !toggle;
    if (toggle) {
        nav.style.transform = "translateX(0)"
    } else {
        nav.style.transform = "translateX(100%)"
    }
})