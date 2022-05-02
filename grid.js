//Javascript source code

let cells = [];
let cellsByBox = [];
let data = [1,2,3,4,5,6,7,8,9, 4,5,6,7,8,9,1,2,3, 7,8,9,1,2,3,4,5,6, 2,3,4,5,6,7,8,9,1, 5,6,7,8,9,1,2,3,4, 8,9,1,2,3,4,5,6,7, 3,4,5,6,7,8,9,1,2, 6,7,8,9,1,2,3,4,5, 9,1,2,3,4,5,6,7,8];

window.onload = () => {
    buildBoard();
    populate(data);
};

button.addEventListener('click', () => {
    randomize(data);
    populate(data);
});

function buildBoard() {
    //https://code-boxx.com/create-grid-javascript/

    let grid = document.getElementById('grid');
    let letters = ['A','B','C','D','E','F','G','H','I'];
    let lineA = [];
    let lineB = [];
    let lineC = [];
    for (let i = 0; i < 9; i++) {
        //create nine divs
        let box = document.createElement('div');
        if (i % 2 === 0) {
            box.className = 'box1';
        }
        else {
            box.className = 'box2';
        }
        box.id = 'box' + letters[i];
        grid.appendChild(box);
        for (let j = 0; j < 9; j++) {
            //create nine sub-divs inside each div
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = 'cell' + letters[i] + j;
            cell.innerHTML = cell.id;
            box.appendChild(cell);
            //separate top middle and bottom of the box
            if (j < 3) { lineA.push(cell); }
            else if ( j < 6) { lineB.push(cell); }
            else { lineC.push(cell); }
            cellsByBox.push(cell);
        }
        // console.log(lineA);
        //every three boxes
        if ((i + 1) % 3 === 0) {
            //combine the rows into array cells[] and clear temp arrays
            cells = cells.concat(lineA, lineB, lineC);
            //console.log(cells);
            lineA = [];
            lineB = [];
            lineC = [];
        }
    }

}

function populate(a) {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = a[i];
    }
}

function randomize(a) {
    for (let i = 0; i < a.length; i++) {
        //get random number 1-9
        data[i] = Math.floor(Math.random() * 10);
    }
}