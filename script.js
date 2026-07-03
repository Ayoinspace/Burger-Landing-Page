// =====================================
// SELECT ELEMENTS
// =====================================

const hamburger = document.querySelector(".hamburger");
const menuIcon = document.querySelector("#menu-icon");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");


// =====================================
// TOGGLE MENU
// =====================================

function toggleMenu() {

    navMenu.classList.toggle("active");

    menuIcon.classList.toggle("bx-menu");
    menuIcon.classList.toggle("bx-x");

}


// =====================================
// HAMBURGER CLICK
// =====================================

hamburger.addEventListener("click", toggleMenu);


// =====================================
// CLOSE MENU
// =====================================

function closeMenu() {

    navMenu.classList.remove("active");

    menuIcon.classList.remove("bx-x");
    menuIcon.classList.add("bx-menu");

}


// =====================================
// CLOSE MENU WHEN A LINK IS CLICKED
// =====================================

navLinks.forEach(link => {

    link.addEventListener("click", closeMenu);

});
