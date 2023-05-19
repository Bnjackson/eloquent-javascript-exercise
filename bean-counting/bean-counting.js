function countBs (string) {
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i] === 'b') {
            count++;
        }
    }
    return count;
}

console.log(countBs('backstabbing'));

function countChar (string, char) {
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countChar('pizzazzes', 'z'));