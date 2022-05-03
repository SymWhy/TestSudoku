// JavaScript source code
const digits = [1,2,3,4,5,6,7,8,9];
const N = digits.length; //9, grid size
const M = Math.sqrt(N); //3, subgrid size

let gridArray = [];
let button = document.getElementById('shuffler');
let checker = document.getElementById('checker');
let validCheck = document.getElementById('validbox');

// window.onload = () => {
//     setupGrid();
// }; //populate grid when window loads

//reshuffle grid on button click
button.addEventListener('click', () => {
    buildGrid();
    printGrid(gridArray);
});

checker.addEventListener('click', () => {
    if (getValidGrid(gridArray)) {
        validCheck.innerHTML = 'FALSE';
    }
    else {
        validCheck.innerHTML = 'TRUE';
    }
})

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

function getBox(a, x, y) {
    let myBox = [];
    let myRow = y*M;
    let myCol = x*M;
    for (let i = 0; i < M; i++) {
        let start = (myRow + i)*N + myCol;
        myBox = myBox.concat(a.slice(start, start + M));
    }
    return myBox;
}

function getValidGrid(g) {
    //getValidRow
    for (let i = 0; i < N; i++) {
        if (!getValidRow(g, i)) {
            return false;
        }
    }

    //getValidColumn
    for (let i = 0; i < N; i++) {
        if (!getValidColumn(g, i)) {
            return false;
        }
    }

    //getValidBox
    for (let i = 0; i < N; i++) {
        if (!getValidBox(g, i)) {
            return false;
        }
    }

    return true;
}

//get row, column, box of index n and check for validity
function getValidRow(g, n) {
    let myDigits = [];
    //get full row containing n
    let myRow = getRow(g, n - (n % N));
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

function getValidColumn(g, n) {
    let myDigits = [];
    //get full column containing n
    let myCol = getColumn(g, g[n]);
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

function getValidBox(g, n) {
    let myDigits = [];
    //the remainder is the x coordinate
    let x = n % M;
    //rounding down gets you the y coordinate
    let y = Math.floor(n / M);
    let myBox = getBox(g, x, y);
    for (let i = 0; i < N; i++) {
        if (myDigits.includes(myBox[i])) {
            return false;
        }
        else {
            myDigits.push(myBox[i]);
        }
    }
    return true;
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