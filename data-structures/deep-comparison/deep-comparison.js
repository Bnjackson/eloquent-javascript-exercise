function compareArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function compareObjects(obj1, obj2) {
    const obj1Keys = Object.keys(obj1), obj2Keys = Object.keys(obj2);
    const obj1Values = Object.values(obj1), obj2Values = Object.values(obj2);
    if (obj1Keys.length === obj2Keys.length && obj1Values.length === obj2Values.length) {
        for (let i = 0; i < obj1Keys.length; i++) {
            if (obj1Keys[i] !== obj2Keys[i] || obj1Values[i] !== obj2Values[i]) {
                console.log('not the same')
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

function deepEqual(value1, value2) {


    if (typeof value1 === 'object' && typeof value2 === 'object' && value1 !== null && value2 !== null) {
        if (Array.isArray(value1) && Array.isArray(value2)) {
           return compareArrays(value1, value2);
        } else {
            return compareObjects(value1, value2);
        }
    } else {
        return value1 === value2;
    }
}

console.log(deepEqual({a : 1, b : 2}, {a : 1, b : 2}));