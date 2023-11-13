window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    header.classList.toggle("onScroll", window.scrollY > 0);
});