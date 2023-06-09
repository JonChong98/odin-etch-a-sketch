const grid = document.querySelector(".grid");
let colourMode = "bw";

// Spawns a length x length grid based on input
function spawnGrid() {
    clearGrid();
    let length = retrieveInput();
    const squareLength = grid.clientHeight / length;
    for (let i = 0; i < length; i++) {
        let row = document.createElement("div");
        row.style = `display: flex; height: ${squareLength}px;`;
        for (let i = 0; i < length; i++) {
            let square = document.createElement("div");
            square.style = `border-bottom: 1px solid grey; border-right: 1px solid grey; flex-grow: 1;`;
            square.addEventListener("mouseover", (e) => shadeSquare(e.target));
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    
}

// Removes all divs in the grid
function clearGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
}

// Shades the square passed into the function depending on the colourMode var value
function shadeSquare(square) {
    square.className = "";
    if (colourMode === "bw") {
        square.classList.add("blackShade");
    } else if (colourMode === "shading") {
        if (square.style.backgroundColor === "") {
            square.style.backgroundColor = "rgb(240, 240 ,240)";
        } else {
            let currRGBValue = parseInt(square.style.backgroundColor.substring(4, 7), 10);
            if (currRGBValue > 0) {
                let newRGBValue = currRGBValue - 30;
                square.style.backgroundColor = `rgb(${newRGBValue}, ${newRGBValue}, ${newRGBValue})`;            
            }
        }
    } else {
        square.style.backgroundColor = `rgb(${rgbValueGen()}, ${rgbValueGen()}, ${rgbValueGen()})`;
    }
}

// Retrieves user input from the text field
function retrieveInput() {
    let length = document.querySelector(".userInput").value;
    length = parseInt(length, 10);
    return length;
}

// Sets the colourMode variable to the provided string
function setColourMode(mode) {
    colourMode = mode;
}

// Randomly generates a value betwen 0 and 255 for RGB values
function rgbValueGen() {
    return Math.trunc((Math.random() * 255) + 1);
}

spawnGrid();