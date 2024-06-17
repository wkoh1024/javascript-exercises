const add = function(num, num1) {
	return num + num1;
};

const subtract = function(num, num1) {
	return num - num1;
};

const sum = function(numArray) {
  if (numArray.length === 0) return 0;
	return numArray.reduce((accumulator, currentValue) => 
  {return accumulator + currentValue});
};

const multiply = function(numArray) {
  if (numArray.length === 0) return 0;
  return numArray.reduce((accumulator, currentValue) => 
    {return accumulator * currentValue});
};

const power = function(num, num1) {
	return Math.pow(num, num1);
};

const factorial = function(num) {
	if (num != 0) {
    return num * factorial(num - 1);
  }
  else return 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
