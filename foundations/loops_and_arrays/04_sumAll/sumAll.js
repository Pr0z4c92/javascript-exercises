


const sumAll = function equateSumAll(A, B) {
    let addToA = A
    let addToB = B



    if ( typeof A !== 'number' || typeof B !== 'number') {
        return 'ERROR';
    } else if (!Number.isInteger( A ) || !Number.isInteger( B ) ) {
        return 'ERROR'
    } else if ( A <= -1 || B <= -1 ) {
        return 'ERROR'
    } else if (B > A) {
        for (i = A; i <= B; i++){
            if (i > A) {
                addToA += i
            } else if (i === A ) {
            }
        }
        return addToA
    } else if ( A > B ) {
        for (j = B; j <= A; j++){
            if (j > B) {
                addToB += j
            } else if (j === B ) {
            }
        }
        return addToB
    }
    
};
// Do not edit below this line
module.exports = sumAll;
