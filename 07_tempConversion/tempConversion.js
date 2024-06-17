const convertToCelsius = function(fahrenheit) {
  let celcius = (((fahrenheit - 32)) / 1.8);
  let rounded = Math.round(celcius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = (celcius * 1.8 + 32);
  let rounded = Math.round(fahrenheit * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
