

const reverseString = function reverseTheString(string) {
    let lengthOfParameter = string.length;
    let alteredString = ''
    for (let i = --lengthOfParameter; i >= 0; i-- ) {
        alteredString += string.slice(i, i + 1);
    }
    return alteredString;
};
// Do not edit below this line
module.exports = reverseString;