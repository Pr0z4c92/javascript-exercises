<<<<<<< HEAD
const removeFromArray = functionarrayObjectRemoval(object, removeA, removeB,removeC, removeD) {
    var lengthObject = object.length;
    for (let i = 0; i <= object; i++){
        console.log(i);
    }

=======



const removeFromArray = function arrayRemoval(objects, A, B, C, D) {
    let lengthArray = objects.length; // lengthOfArray functions as intended. Variable 'i' needs to be increased by one to much the arrays counting structure.
    for (let i = 0; i < lengthArray; i++ ) {
        console.log(objects[i])
        if (typeof D == 'string' || typeof D == 'number') {
            console.log('true D')
            if (D === object[i]) {

            }
        }
        if (typeof C === 'string' || typeof C === 'number') {
            console.log('true C')
        }
        if (typeof B === 'string' || typeof B === 'number') {
            console.log('true B')
        }
        if (typeof A === 'string' || typeof A === 'number') {
            console.log('true A')
        }


        
    } 
>>>>>>> 01e12354e03c616325a5433cf8c1a97af81d9fbd
};
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);

console.log("Outside")

// Do not edit below this line
module.exports = removeFromArray;
