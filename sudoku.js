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
    printGrid(gridArray);
});

function buildGrid() {
    //build test grid that should pass as a valid sudoku grid
    let testDigits = [0,3,6,1,4,7,2,5,8];
    gridArray = [];
    for (let i = 0; i < testDigits.length; i++) {
        gridArray = gridArray.concat(rotateArray(digits,testDigits[i]));
    }
}

//where 'a' is the array you want to print as a grid
function printGrid(a) {
    for (let i = 0; i < N; i++) {
        console.log(getRow(a,i).join(' ')); 
    }
}

//return entire array for the given row
//where 'a' is the array you want to pull row 'x' from
function getRow(a,y) {
    //row number*9, end of that row
    return a.slice(y*N, y*N + N);
}

function getColumn(a,x) {
    let myCol = [];
    for (let i = 0; i < N; i++) {
        myCol.push(a[i*N + x]);
    }
    return myCol;
}

function getBox(a, n) {
    let myBox = [];
    if (n < 3) {}
    else if (n < 6) {}
    else if (n < 9) {}



    // let myBox = [];
    // let myRow = y*M;
    // let myCol = x*M;
    // for (let i = 0; i < M; i++) {
    //     let start = (myRow + i)*N + myCol;
    //     myBox = myBox.concat(a.slice(start, start + M));
    // }
    return myBox;
}

//get row, column, box of index n and check for validity
function getValidRow(n) {
    let myDigits = [];
    //get full row containing n
    let myRow = getRow(gridArray, n - (n % N));
    //check if valid
    for (let i = 0; i < N; i++) {
        if (myDigits.includes(myRow[i])) {
            return false;
        }
        else {
            myDigits.push(myRow[i]);
        }
    }
    // let myDigits = []
    // let myCol = getColumn(gridArray, )
    return true;
}

function getValidCol(n) {
    let myDigits = [];
    //get full column containing n
    let myCol = getColumn(gridArray, gridArray[n]);
    //check if valid
    for (let i = 0; i < N; i++) {
        if (myDigits.includes(myCol[i])) {
        return false;
        }
        else {
            myDigits.push(myCol[i]);
        }
    }
    return true;
}

function getValidBox(n) {
    let myDigits = [];
    //get box containing n
    let myBox = getBox
    //check if valid
}

function getDigit(d) {
    //return digit in space d
    return gridArray[d]
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