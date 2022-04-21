//Javascript source code

function buildGrid() {
    //https://code-boxx.com/create-grid-javascript/

    let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let grid = document.getElementById('grid');

    for (let i = 0; i < data.length; i++) {
        let subdata = data[i];
        for (let j = 0; j < subdata.length; j++) {
            let cell = document.createElement('div');
            cell.innerHTML = subdata[j];
            cell.className = 'cell';
            grid.appendChild(cell);
        }
    }
}