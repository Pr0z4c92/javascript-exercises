
const removeFromArray = function arrayRemoval(objects, A, B, C, D) {

    for (let i = objects.length - 1; i > -1; i-- ) {
        console.log(objects[i] + ' A1')
        if (typeof A == 'string' || typeof A == 'number') {
            if (A === objects[i]) {
                removedObjectA = objects.splice(i, 1)
                console.log(objects + ' A2')

            }
        }
    }
    for (let j = objects.length - 1; j > -1; j-- ) {
        console.log(objects[j] + ' B1')
        if (typeof B === 'string' || typeof B === 'number') {
            if (B === objects[j]) {
                removedObjectB = objects.splice(j, 1)
                console.log(objects + ' B2')

            }
        }
    }
    for (let k = objects.length - 1; k > -1; k-- ) {
                console.log(objects[k] + ' C1')
        if (typeof C === 'string' || typeof C === 'number') {
            if (C === objects[k]) {
                removedObjectC = objects.splice(k, 1)
                console.log(objects + ' C2')
            }
        }
    }
     for (let l = objects.length - 1; l > -1; l-- ) {
                console.log(objects[l] + ' D1')
        if (typeof D === 'string' || typeof D === 'number') {
            if (D === objects[l]) {
                removedObjectD = objects.splice(l, 1)
                console.log(objects + ' D2')


            }
        }
    }
    return objects
}
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4))
// Do not edit below this line
module.exports = removeFromArray;
