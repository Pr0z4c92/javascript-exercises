
const removeFromArray = function arrayRemoval(objects, A, B, C, D) {
    let lengthArray = objects.length; // lengthOfArray functions as intended. Variable 'i' needs to be increased by one to much the arrays counting structure.
    for (let i = --lengthArray; i > -1; i-- ) {
        if (typeof D == 'string' || typeof D == 'number') {
            if (D === objects[i]) {
                removedObjects = objects.splice(i + 1, i)
            }
        }
        if (typeof C === 'string' || typeof C === 'number') {
            if (C === objects[i]) {
                removedObjects = objects.splice(i + 1, i)
            }
        }
        if (typeof B === 'string' || typeof B === 'number') {
            if (B === objects[i]) {
                removedObjects = objects.splice(i,)
            }
        }
        if (typeof A === 'string' || typeof A === 'number') {
            if (A === objects[i]) {
                removedObjects = objects.splice(i)
                console.log(objects)
            }
        }
<<<<<<< HEAD
        // return objects
    }
=======


        
    } 
>>>>>>> 01e12354e03c616325a5433cf8c1a97af81d9fbd
>>>>>>> 1c4f1d4498db5d58ea14644cdbb3a6502030e93b
};
removeFromArray([1, 2, 3, 4], 3)
// Do not edit below this line
module.exports = removeFromArray;
