function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
console.log(reverseArray([1, 2, 3, 4 ,5]));

function reverseArrayInPlace(arr) {
    let referenceArr = [...arr];
    let arrLength = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = referenceArr[arrLength - i]; 
    }
    return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));