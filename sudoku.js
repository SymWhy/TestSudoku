// JavaScript source code
    let digits = [11,22,33,44,55,66,77,88,99];
    let myGrid = [];
function buildGrid() {
    for (let i = 0; i < 9; i++) {
        x= getRandomInt(digits.length);
        let n = digits[x];
        myGrid.push(n);
        digits.splice(x,1);
    }
    //return digits;
    return myGrid;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}