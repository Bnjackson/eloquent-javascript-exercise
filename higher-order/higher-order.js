/* 
Flattening
*/

let arrays = [[1, 2, 3], [4, 5], [6]];

arrays = arrays.reduce((all, nestedArr) => all.concat(nestedArr));

console.log(arrays);

/* 
Your Own Loop
*/

function loop(value, testFunction, updateFunction, bodyFunction) {
    if(testFunction(value)) {
        value = updateFunction(value);
        bodyFunction(value);
        loop(value, testFunction, updateFunction, bodyFunction);
    }
}

loop(10, n => n > 0, n => n - 1, console.log);

/* 
Everything
*/

function every(arr, testFunc) {
    for (let i = 0; i < arr.length; i++) {
        if (!testFunc(arr[i])) {
            return false;
        }
    }
    return true;
}

console.log(every([1, 2, 3, 4, 5], num => num < 10));
console.log(every(['Hello', 'Hi', 10, 'ten'], str => typeof str === 'string'));

