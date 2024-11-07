const changeSizeButton = document.getElementById("changeSizeButton");
const container = document.getElementById('container');


changeSizeButton.addEventListener("click", () => {
    let newSize = prompt("What dimensions do you want the grid to be?");
    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    // const container = document.getElementById('container');
    container.innerHTML = '';

    createGrid(newSize);

});



function createGrid(newSize) {
    // const container = document.getElementById('container');
    // container.innerHTML = '';

    const squareSize = 630 / newSize;

    for (let i = 0; i < newSize * newSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square'); // Add class for styling
        square.style.width = `${squareSize}px`; // Set width
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseover', fillSquare); // Change color on hover
        container.appendChild(square); // Add square to container
    }
}


const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetFunction); 

function resetFunction() {
    // const container = document.getElementById('container');
    container.innerHTML = ''; // Clear existing squares
    createGrid(16); // Reset to default grid size (16x16)
}


function fillSquare(event) {
    event.target.style.backgroundColor = 'black'; // Change color to black on hover
}

resetFunction();