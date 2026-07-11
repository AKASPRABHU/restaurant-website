let lastScrollTop = 0;

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    let currentScroll =
    window.pageYOffset ||
    document.documentElement.scrollTop;

    if(currentScroll > lastScrollTop){
        navbar.style.top = "-100px";
    }
    else{
        navbar.style.top = "0";
    }

    lastScrollTop =
    currentScroll <= 0
    ? 0
    : currentScroll;
});
