const menuButton = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".menu-button");

menuButton.forEach(button => {
    button.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-hidden");
    });
});

screenOverlay.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
})

if(window.innerWidth >= 768) {
    document.body.classList.remove("sidebar-hidden");
}