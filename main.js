// Creates grid
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.className = 'tile';
        div.id = i
        div.style.flexBasis = "37.5px"
        div.style.height = "37.5px"

        document.getElementById('container').appendChild(div);
    }
}, false);

// Adds "tile-hover" class to each square when the mouse hovers over it
document.getElementById('container').addEventListener('mouseover', function(event) {
    tileHover(event.target)
});

function tileHover(element) {
    element.classList.add('tile-hover');
}

// Ask user to select custom grid size
let userInput = 0;
let totalSquares = 0;

document.getElementById(['change-squares']).addEventListener('click', function(event) {
    userInput = prompt("Please choose the amount of squares you want per row (max 50)");
    if (userInput <= 50) {
    totalSquares = userInput*userInput;
    clearGrid();
    customGrid();
    } else {
    alert("Choose a number smaller than 50");
    }
})

// Delete all current grid tiles
function clearGrid() {
    document.getElementById('container').textContent = '';
}

// Add user-selected grid tiles
function customGrid() {
    for (let i = 0; i < totalSquares; i++) {
        const div = document.createElement('div');
        div.className = 'tile';
        div.id = i;
        div.style.flexBasis = 600/userInput+'px';
        div.style.height = 600/userInput+'px';

        document.getElementById('container').appendChild(div);
    }
}