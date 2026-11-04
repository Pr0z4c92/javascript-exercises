


const leapYears = function findLeapYear (A) {

    let equateFour = A % 4
    let equateHundred = A % 100
    let equateForHund = A % 400
    console.log(equateForHund)
    
    if (equateForHund === 0) {
        return true
    }  else if (equateHundred === 0) {
        return false
    }else if (equateFour != 0) {
        return false
    } else if (equateFour === 0) {
        return true 
    }
};
console.log(leapYears(1984))

// Do not edit below this line
module.exports = leapYears;
