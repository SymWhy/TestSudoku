// JavaScript source code
const digits = [1,2,3,4,5,6,7,8,9];
const N = digits.length; //9, grid size
const M = Math.sqrt(N); //3, subgrid size

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

//where 'a' is the array you want to print as a grid
function printGrid(a) {
    for (i = 0; i < N; i++) {
        console.log(getRow(a,i).join(' ')); 
    }
}

//where 'a' is the array you want to pull row 'x' from
function getRow(a,x) {
    //row number*9, end of that row
    return a.slice(x*N, x*N + N);
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