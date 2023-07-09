//Should output a string of an 8 * 8 grid. Each position in grid should contain either a # or a space. Each line should alternate which character starts.
/*
let chessboard = '';

for(let i = 1; i <= 8; i++) {
    if(i % 2 === 0) {
        chessboard += '# # # # ';
    } else {
        chessboard += ' # # # #';
    }
    chessboard += '\n';
}

console.log(chessboard);
*/

//Second version should do the same as the first but grid size is determined by a number. So if the number is 10 the grid will be 10 * 10. The pattern should be the same as the first.

let gridNumber = 10;
let chessboard = '';

for(let i = 1; i <= gridNumber; i++) {
    let firstCharacter;
    for(let j = 1; j <= gridNumber; j++) {
        if (i % 2 !== 0 && j === 1) {
            chessboard += ' ';
            firstCharacter = ' ';
        } else if (i % 2 === 0 && j === 1) {
            chessboard += '#';
            firstCharacter = '#';
        } else if (j % 2 === 0 && firstCharacter === ' ') {
            chessboard += '#';
        } else if (j % 2 !== 0 && firstCharacter === '#') {
            chessboard += '#';
        } else if (j % 2 !== 0 && firstCharacter === ' ') {
            chessboard += ' ';
        } else if (j % 2 === 0 & firstCharacter === '#') {
            chessboard += ' ';
        }
    }
    chessboard += '\n';
}
console.log(chessboard);