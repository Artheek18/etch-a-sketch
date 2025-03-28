const container = document.querySelector('.container');

document.getElementById("new-grid-btn").addEventListener("click", function (){
    let gridSize = prompt("Enter the number of squares per side (max 100):");

    if (gridSize === null) return; 
    gridSize = parseInt(gridSize);

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    createGrid(gridSize);

});



function createGrid(size){
    const container = document.querySelector(".container");
    container.innerHTML = ""; 

    const squareSize = 600 / size; 
    for (let i = 0; i < size ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
      }

}