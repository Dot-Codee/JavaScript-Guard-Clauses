function findIndex(array, value) {
    if (!array || !array.length) {
        return -1;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
        return i;
        }
    }

    return -1;
}
  
console.log(findIndex([1, 2, 3], 2)); // Outputs 1
console.log(findIndex([], 2)); // Outputs -1
console.log(findIndex(null, 2)); // Outputs -1