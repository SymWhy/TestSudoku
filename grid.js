//Javascript source code

function buildGrid() {
    //https://code-boxx.com/create-grid-javascript/

    let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let grid = document.getElementById('grid');

    for (let i = 0; i < 3; i++) {
        let subdata = data[i];
        for (let j = 0; j < 3; j++) {
            let box = document.createElement('div');
            //box.innerHTML = subdata[j];
            box.className = 'box';
            for (let k = 0; k < 3; k++) {
                let cell = document.createElement('div');
                cell.innerHTML = subdata[k];
                cell.className = 'cell';
                box.appendChild(cell);
            }
            grid.appendChild(box);
        }
    }
}