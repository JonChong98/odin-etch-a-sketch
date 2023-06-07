function spawnGrid(length) {
    const grid = document.querySelector(".grid");
    const squareLength = grid.clientHeight / length;
    for (let i = 0; i < length; i++) {
        let row = document.createElement("div");
        row.style = `display: flex; height: ${squareLength}px;`;
        for (let i = 0; i < length; i++) {
            let square = document.createElement("div");
            square.style = `border-bottom: 1px solid grey; border-right: 1px solid grey; flex-grow: 1;`;
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    
}

spawnGrid(16);