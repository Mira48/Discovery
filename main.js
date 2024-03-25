const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "ri-close-line":"ri-menu-line");

});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})

const headerImage = document.querySelector(".header__image");
headerImage.addEventListener(
    "animationend",
    (e) => {
        setTimeout(() => {
            headerImage.classList.add("reveal");
        });

    },  
    { once: true }
);
    
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    Delay: 1500,
});
ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    Delay: 2000,
});
ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    Delay: 2500,
});
ScrollReveal().reveal(".header__content div", {
    ...scrollRevealOption,
    Delay: 3000,
});
ScrollReveal().reveal(".header .nav__links", {
    Delay: 3500,
});




        