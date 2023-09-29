

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");

let isNavOpen = false;

hamburger.addEventListener("click", () => {

   isNavOpen = !isNavOpen;
   if (isNavOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    };


   hamburger.classList.toggle("is-active");
   navLinks.classList.toggle("is-active");
})