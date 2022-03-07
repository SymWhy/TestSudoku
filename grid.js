//Javascript source code

const grid9x9 = document.getElementById('grid9x9');

let subgridList = [];

function buildSubgrid() {
    myDigit = '☐';
    for (let i = 0; i < 9; i++) {
        let mySubgrid = document.createElement('div');
        mySubgrid.id = 'subgrid' + i;
        mySubgrid.innerText = myDigit;
            grid9x9.appendChild(mySubgrid);
            subgridList.push(mySubgrid);
    }
}