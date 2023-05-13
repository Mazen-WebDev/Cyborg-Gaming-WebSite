document.body.style.backgroundColor = "#1F2122";

let burgerIcon = document.querySelector(".burger-icon");
let uList = document.querySelector(".navbar-nav");

burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("active");
    uList.classList.toggle("active");
});