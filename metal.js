document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementsByClassName('knockout-container')[0];
    const width = container.clientWidth;
    const height = container.clientHeight;
    container.addEventListener('mousemove', (event) => {
        let posX = Math.ceil((event.clientX / width) * 100);
        let posY = Math.ceil((event.clientY / height) * 100);

        posX = ((2 * (posX - 0)) / 100 - 1) * 150;
        posY = ((2 * (posY - 0)) / 100 - 1) * 150;

        container.style.setProperty("--mouse-x", posX + "px");
        container.style.setProperty("--mouse-y", posY + "px");
        console.log(posX, posY);
    })
})