const modal = document.querySelector(".modal")
const previews = document.querySelectorAll(".gallery ul li img")
const original = document.querySelector(".full-img")

// document.addEventListener('DOMContentLoaded', () => {
//     print("HI");
// });

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open")
        const originalsrc = preview.getAttribute("data-original");
        original.src = `./${originalsrc}`
    });
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open")
        original.classList.remove("open")
    }
});