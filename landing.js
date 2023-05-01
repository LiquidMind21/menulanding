const menuIcon = document.querySelector(".menu-icon"),
    lines = document.querySelector(".lines"),
    container = document.querySelector(".container");


menuIcon.addEventListener("click", () => {
    container.classList.toggle("change");
});