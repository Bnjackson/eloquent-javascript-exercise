function checkIfEven (num) {
    if (num === -2) {
        return true;
    } else if (num === -1) {
        return false;
    } else {
        return checkIfEven(num -2);
    }
}

console.log(checkIfEven(100));