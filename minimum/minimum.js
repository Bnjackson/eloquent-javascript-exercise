function findMinimum (a, b) {
    if (a < b) {
        return a;
    } else if (b < a) {
        return b;
    } else {
        return 'Both numbers are the same value';
    }
}

console.log(findMinimum(1, 1));