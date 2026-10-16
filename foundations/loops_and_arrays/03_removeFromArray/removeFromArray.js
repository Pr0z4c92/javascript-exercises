


const removeFromArray = function arrayRemoval(objects, A, B, C, D) {
    let lengthArray = objects.length; // lengthOfArray functions as intended. Variable 'i' needs to be increased by one to much the arrays counting structure.
    for (let i = 0; i < lengthArray; i++ ) {
        console.log(objects[i])
        if (typeof D === 'string' || typeof D === 'number'); {
            console.log('true')
            console.log(D)
            // typeof should be undefined but it returns either string or number so i need another way to approach this apparently
        }
        if (typeof C === 'string' || typeof C === 'number'); {
            console.log('true')
        }
        if (typeof B === 'string' || typeof B === 'number'); {
            console.log('true')
        }
        if (typeof A === 'string' || typeof A === 'number'); {
            console.log('true')
        }


        
    } 
};
removeFromArray([1, 2, 3, 4], 1, 2, 3);

console.log("Outside")

// Do not edit below this line
module.exports = removeFromArray;
