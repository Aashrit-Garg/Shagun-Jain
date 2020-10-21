const modal = document.querySelector(".modal")
const previews = document.querySelectorAll("#angled div")
const morePreviews = document.querySelectorAll(".thumbnail a img")
const evenMorePreviews = document.querySelectorAll(".swap-on-hover img")
const original = document.querySelector(".full-img")

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open")
        const originalsrc = preview.getAttribute("data-original");
        original.src = `./${originalsrc}`
    });
});

morePreviews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open")
        const originalsrc = preview.getAttribute("data-original");
        original.src = `./${originalsrc}`
    });
});

evenMorePreviews.forEach(preview => {
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