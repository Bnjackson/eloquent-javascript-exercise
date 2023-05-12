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

