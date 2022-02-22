// JavaScript source code
let digits = [11,22,33,44,55,66,77,88,99];
let myGrid = digits; //current grid in numerical order

let numbers = document.getElementsByClassName('numbers'); //returns an array of HTML elements

window.onload = setupGrid();

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

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}