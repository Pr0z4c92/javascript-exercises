const convertToCelsius = function(F) {
  // tempInFahrenheit - 32 (/ 1.8)
  let equateFarenheit = (F - 32) / 1.8
  let convertNumbF = undefined
  if (Number.isInteger(equateFarenheit)) {
  return equateFarenheit
  } else {
    convertNumbF = equateFarenheit.toPrecision(3)
    return Number(convertNumbF)
  }

};

const convertToFahrenheit = function(C) {
  // tempInCelsius * 1.8 (+ 32)
  let equateCelsius = (C * 1.8) + 32
  let convertNumbC = undefined
  if (Number.isInteger(equateCelsius)) {
  return equateCelsius
  } else {
    convertNumbC = equateCelsius.toPrecision(4)
    return Number(convertNumbC)
  }

};

console.log(convertToCelsius(100))
console.log(convertToFahrenheit(73.2))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
