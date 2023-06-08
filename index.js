// Spawns a length x length grid based on input
function spawnGrid() {
    clearGrid();
    const grid = document.querySelector(".grid");
    let length = retrieveInput();
    const squareLength = grid.clientHeight / length;
    for (let i = 0; i < length; i++) {
        let row = document.createElement("div");
        row.style = `display: flex; height: ${squareLength}px;`;
        for (let i = 0; i < length; i++) {
            let square = document.createElement("div");
            square.style = `border-bottom: 1px solid grey; border-right: 1px solid grey; flex-grow: 1;`;
            square.addEventListener("mouseover", () => shadeSquare(square));
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    
}

function shadeSquare(square) {
    square.classList.add("shaded");
}

function retrieveInput() {
    let length = document.querySelector(".userInput").value;
    length = parseInt(length, 10);
    return length;
}

function clearGrid() {
    const grid = document.querySelector(".grid");
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
        console.log("removed child");
    }
}

spawnGrid();