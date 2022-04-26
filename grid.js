//Javascript source code

window.onload = () => {
         buildGrid();
     };

function buildGrid() {
    //https://code-boxx.com/create-grid-javascript/

    let data = [1,2,3,4,5,6,7,8,9, 4,5,6,7,8,9,1,2,3, 7,8,9,1,2,3,4,5,6];
    let grid = document.getElementById('grid');
    let letters = ['A','B','C','D','E','F','G','H','I'];
    for (let i = 0; i < 9; i++) {
        //create nine divs
        let box = document.createElement('div');
        box.className = 'box';
        box.id = 'box' + letters[i];
        grid.appendChild(box);
        for (let j = 0; j < 9; j++) {
            //create nine sub-divs inside each div
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = 'cell' + letters[i] + j;
            cell.innerHTML = cell.id;
            box.appendChild(cell);
        }
    }
}