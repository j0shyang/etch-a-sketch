const container = document.querySelector("#container");
const btnContainer = document.querySelector("#btn-container");
const newGridBtn = document.createElement("button");

newGridBtn.classList.add("create-grid")
newGridBtn.textContent = "New Grid";
btnContainer.appendChild(newGridBtn);

function createGrids() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

document.addEventListener('DOMContentLoaded', event => {
    container.textContent = '';
    createGrids();
});