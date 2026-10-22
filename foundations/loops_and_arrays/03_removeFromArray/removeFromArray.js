
const removeFromArray = function arrayRemoval(objects, A, B, C, D) {
    let lengthArray = objects.length; // lengthOfArray functions as intended. Variable 'i' needs to be increased by one to much the arrays counting structure.
    for (let i = lengthArray; i > 0; i-- ) {
        if (typeof D == 'string' || typeof D == 'number') {
            if (D === objects[i]) {
                removedObjects = objects.splice(i, i + 1)            
            }
        }
    }
    for (let i = lengthArray; i > 0; i-- ) {
        if (typeof C === 'string' || typeof C === 'number') {
            if (C === objects[i]) {
                removedObjects = objects.splice(i, i + 1)
            }
        }
    }
    for (let i = lengthArray; i > 0; i-- ) {
        if (typeof B === 'string' || typeof B === 'number') {
            if (B === objects[i]) {
                removedObjects = objects.splice(i, i + 1)
            }
        }
    }
     for (let i = lengthArray; i > 0; i-- ) {
        if (typeof A === 'string' || typeof A === 'number') {
            if (A === objects[i]) {
                removedObjects = objects.splice(i, i + 1)
            }
        }
    }
    return objects
}
console.log(removeFromArray([1, 2, 3, 4], 3, 2))
// Do not edit below this line
module.exports = removeFromArray;
