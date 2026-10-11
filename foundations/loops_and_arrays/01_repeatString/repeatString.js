



const repeatString = function repeatString(string, num) {
{
    if (num === 0){
        notAllowed = '';
        return notAllowed
    } if (num < 0) {
        notAllowed = 'ERROR'
        return notAllowed
    } else  {
        let stringAdd = string
        for (let i = 1; i < num; i++ ) {
            stringAdd += string;
            console.log(i)
        }
        return stringAdd;
    }
}
};

// Do not edit below this line
module.exports = repeatString;
