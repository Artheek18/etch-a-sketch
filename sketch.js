for (let i = 0; i < 16 * 16; i++) {  // Ensure this is exactly 256
    const square = document.createElement("div");
    square.classList.add("grid-square");
    document.querySelector(".container").appendChild(square);
}
