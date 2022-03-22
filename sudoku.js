// JavaScript source code
const digits = [11,22,33,44,55,66,77,88,99];

let gridAx = [];
let gridBx = [];
let gridCx = [];

let gridAy = [];
let gridBy = [];
let gridCy = [];

//how do we generate variables dynamically?
let subgridA = digits;
let subgridB = digits;
let subgridC = digits;
let subgridD = digits;
let subgridE = digits;
let subgridF = digits;
let subgridG = digits;
let subgridH = digits;
let subgridI = digits;
const grids = [subgridA,subgridB,subgridC,subgridD,subgridE,subgridF,subgridG,subgridH,subgridI];

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
        let myGrid = grids[i];
        console.log(myGrid);
    }
}

function buildGrid() {
    for (let j = 0; j < 9; j++) {
        mySubgrid = []; //holder for new shuffled array
        unTrash = [11, 22, 33, 44, 55, 66, 77, 88, 99]; //move digits from here to myGrid
        for (let i = 0; i < 9; i++) {
            x = getRandomInt(unTrash.length);
            let n = unTrash[x];

            mySubgrid.push(n);
            unTrash.splice(x, 1);
        }
        //console.log(mySubgrid);
        grids[j] = mySubgrid
        //console.log(grids[j]);
    }
    //clear grid primes
    gridAx = [];
    gridBx = [];
    gridCx = [];

    gridAy = [];
    gridBy = [];
    gridCy = [];

    //grab rows (x)
    for (let i = 0; i < 9; i++) {
        if (i < 3) {
            gridAx.push(grids[i]);
        }
        else if (i < 6) {
            gridBx.push(grids[i]);
        }
        else {
            gridCx.push(grids[i]);
        }
    }
    console.log('rows:');
    console.log(gridAx, gridBx, gridCx);

    for (let i = 0; i < 9; i++) {
        if (i % 3 == 0){
            gridAy.push(grids[i]);
        }
        else if (i % 3 == 1) {
            gridBy.push(grids[i]);
        }
        else if (i % 3 == 2) {
            gridCy.push(grids[i]);
        }
    }
    console.log('columns:')
    console.log(gridAy, gridBy, gridCy);

    //print sudoku grid
    console.log(
        '|' + 
        gridAx[0].slice(0,3) + '|',
        gridBx[0].slice(0,3) + '|',
        gridCx[0].slice(0,3) + '|',
        '\n',
        '|' +
        gridAx[1].slice(0,3) + '|',
        gridBx[1].slice(0,3) + '|',
        gridCx[1].slice(0,3) + '|',
        '\n',
        '|' +
        gridAx[2].slice(0,3) + '|',
        gridBx[2].slice(0,3) + '|',
        gridCx[2].slice(0,3) + '|',
        '\n' + '------------------------------' + '\n',
        '|' + 
        gridAx[0].slice(3,6) + '|',
        gridBx[0].slice(3,6) + '|',
        gridCx[0].slice(3,6) + '|',
        '\n',
        '|' +
        gridAx[1].slice(3,6) + '|',
        gridBx[1].slice(3,6) + '|',
        gridCx[1].slice(3,6) + '|',
        '\n',
        '|' +
        gridAx[2].slice(3,6) + '|',
        gridBx[2].slice(3,6) + '|',
        gridCx[2].slice(3,6) + '|',
        '\n' + '------------------------------' + '\n',
        '|' + 
        gridAx[0].slice(6,9) + '|',
        gridBx[0].slice(6,9) + '|',
        gridCx[0].slice(6,9) + '|',
        '\n',
        '|' +
        gridAx[1].slice(6,9) + '|',
        gridBx[1].slice(6,9) + '|',
        gridCx[1].slice(6,9) + '|',
        '\n',
        '|' +
        gridAx[2].slice(6,9) + '|',
        gridBx[2].slice(6,9) + '|',
        gridCx[2].slice(6,9) + '|',
    );
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}