function arrToList(arr) {
    let list = {};
    let lastLayer = list;
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        const layer = {};
        lastLayer.value = value;
        lastLayer.rest = layer;
        lastLayer = layer;
    }
    return list;
}

console.log(arrToList([1, 2, 3, 4, 5]));