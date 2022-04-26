// JavaScript source code
let digits = [11,22,33,44,55,66,77,88,99];
let myGrid = digits; //current grid in numerical order

let numbers = document.getElementsByClassName('boxes'); //returns an array of HTML elements
let button = document.getElementById('shuffler');

//grab div containing all 9 boxes
const sudokuBox = document.getElementById('sudoku9x9');

window.onload = () => {
    build3x3();
    setupGrid();
}; //populate grid when window loads

//reshuffle grid on button click
button.addEventListener('click', () => {
    buildGrid();
});

function setupGrid() {
    //consider generating boxes in js instead of html
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].innerHTML = 0;
    }
}

function buildGrid() {
    let digits = [11,22,33,44,55,66,77,88,99];
    let myGrid = [];
}

function setupGrid() {
    //consider generating boxes in js instead of html
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].innerHTML = myGrid[i];
    }
}

function buildGrid() {
    myGrid = []; //clear myGrid
    unTrash = [11,22,33,44,55,66,77,88,99];
    for (let i = 0; i < digits.length; i++) {
        x = getRandomInt(unTrash.length);
        let n = unTrash[x];
        
        myGrid.push(n);
        unTrash.splice(x,1);
    }
    //return digits;
    setupGrid();
}

function build9x9() {
    asdf
}

function build3x3() {
    
    //sudokuBox.appendChild(child);
    for (let i = 0; i < digits.length; i++) {
        //create a new div
        let myElement = document.createElement('div');
        myElement.className = 'boxes';
        //generate div id based on location in array
        myElement.id = 'box' + i;
        myElement.innerText = digits[i];
        //add div to sudoku box
        sudokuBox.appendChild(myElement);
    }
    //now we have a series of nine divs
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}