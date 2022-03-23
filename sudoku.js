// JavaScript source code
const digits = [1,2,3,4,5,6,7,8,9];

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
    //testing, no randomization
    for (let j = 0; j < digits.length; j++) {
        //fill mySubgrid with 1-9
        for (let i = 0; i < digits.length; i++) {
            gridArray.push(digits[i]);
        }
    }
    //print sudoku grid
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