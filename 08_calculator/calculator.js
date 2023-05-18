const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, each) => acc + each, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, each) => acc * each, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if(num === 0){
    return 1;
  }
  else if(num > 0 && Number.isInteger(num)){
    return num * factorial(num - 1);
  }
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
