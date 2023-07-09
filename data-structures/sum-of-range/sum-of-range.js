'use strict';

function range(start, end) {
    let rangeArr = [];
    for (let i = start; i <= end; i++) {
        rangeArr.push(i);
    }
    return rangeArr;
}

console.log(range(1, 10));

function sumOfRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumOfRange(1, 10));
