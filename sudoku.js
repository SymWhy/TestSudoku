// JavaScript source code
let digits = [11,22,33,44,55,66,77,88,99];

let button = document.getElementById('shuffler');

window.onload = () => {
    setupGrid();
}; //populate grid when window loads

//reshuffle grid on button click
button.addEventListener('click', () => {
    buildGrid();
});

function setupGrid() {
    for (let i = 0; i < digits.length; i++) {
        //placeholder
    }
    console.log(digits);
}

function buildGrid() {
    myGrid = []; //holder for new shuffled array
    unTrash = [11,22,33,44,55,66,77,88,99]; //move digits from here to myGrid
    for (let i = 0; i < digits.length; i++) {
        x = getRandomInt(unTrash.length);
        let n = unTrash[x];
        
        myGrid.push(n);
        unTrash.splice(x,1);
    }
    console.log(myGrid);
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}