let gridSize = 256;
const container = document.querySelector("#container");
const btnContainer = document.querySelector("#btn-container");
const newGridBtn = document.createElement("button");

newGridBtn.classList.add("create-grid");
newGridBtn.textContent = "New Grid";
btnContainer.appendChild(newGridBtn);

function createGrids() {
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);

        square.addEventListener("mouseover", () => {
            square.style.background = "black";
        });
    }
}

createGrids();

newGridBtn.addEventListener("click", () => {
    gridSize = +prompt("Number of squares per side [1 - 100]:");

    while (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        gridSize = +prompt("Invalid input. Please enter a number from 1 - 100:");
    }
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    gridSize = Math.pow(gridSize, 2);
    container.textContent = "";
    createGrids();
});