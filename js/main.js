window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        hederElement.classList.add('scroll-down');
    } else {
        hederElement.classList.remove('scroll-down');

    }
})