
const removeFromArray = function arrayRemoval(objects, A, B, C, D) {
    let lengthArray = objects.length; // lengthOfArray functions as intended. Variable 'i' needs to be increased by one to much the arrays counting structure.
    for (let i = --lengthArray; i > -1; i-- ) {
        if (typeof D == 'string' || typeof D == 'number') {
            if (D === objects[i]) {
                removedObjects = objects.splice(i, i - 1)            }
        }
        if (typeof C === 'string' || typeof C === 'number') {
            if (C === objects[i]) {
                removedObjects = objects.splice(i, i - 1)
            }
        }
        if (typeof B === 'string' || typeof B === 'number') {
            if (B === objects[i]) {
                removedObjects = objects.splice(i, i - 1)
                console.log(objects)

            }
        }
        if (typeof A === 'string' || typeof A === 'number') {
            if (A === objects[i]) {
                removedObjects = objects.splice(i, i - 1)
            }
        }
    }
};
// Do not edit below this line
module.exports = removeFromArray;
