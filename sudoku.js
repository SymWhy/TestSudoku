// JavaScript source code
const digits = [1,2,3,4,5,6,7,8,9];
const N = digits.length; //9
const M = digits.length.sqrt(); //3

let gridArray = [];
let button = document.getElementById('shuffler');

// window.onload = () => {
//     setupGrid();
// }; //populate grid when window loads

//reshuffle grid on button click
button.addEventListener('click', () => {
    buildGrid();
});

function buildGrid() {
    //build test grid that should pass as a valid sudoku grid
    let testDigits = [0,3,6,1,4,7,2,5,8];
    for (i = 0; i < N; i++) {
        gridArray = gridArray.concat(rotateArray(digits,testDigits[i]));
    }
    return gridArray;
}

function rotateArray(a,k) {
    //take a section of array 'a' starting at 'k'
    let b = a.slice(k, a.length);
    //take a section of 'a' from the beginning and paste it to
    //the end of b
    return b.concat(a.slice(0,k));
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}