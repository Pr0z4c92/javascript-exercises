


const removeFromArray = function arrayRemoval(objects, removeObjectsA, removeObjectsB, removeObjectsC, removeObjectsD) {
    let lengthArray = objects.length;
    console.log(lengthArray);
    console.log(objects)
    console.log(removeObjectsD)
    console.log(removeObjectsC)
    console.log(removeObjectsB)
    console.log(removeObjectsA)
    console.log()
    for (let i = 0; i >= lengthArray; i++ )
    console.log(objects[i]) // this is located as a way to show the notation in relations to a for loop with a counter to iterate through the array's objects.
    
    // I could probably use a for loop that is based off of the removeObjects. I could use bracket notation or even .slice to remove the 
    // necessary objects. but i would need to be able to identify which object it is in the array and then a counter that is plus 1 
    // above the start slice counter. 
    // Going to use .length for counting. and need to look into bracket notation. 
    // After that iw ill need to start looking into booleans for the remove of the item Which will need to use 
    // an if statement.

    console.log(arrayRemoval([1, 2, 3, 4], 1, 2, 3, 4));
};

// Do not edit below this line
module.exports = removeFromArray;
