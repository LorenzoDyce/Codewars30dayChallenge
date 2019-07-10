/* This time we want to write calculations using functions and get the results. Let's have a look at some examples:

JavaScript:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3 


Requirements:

  There must be a
function
for each number from 0("zero") to 9("nine")
There must be a
function
for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer
function represents the left operand, the most inner
function represents the right operand
Division should be integer division, e.g eight(dividedBy(three())) / eight(divided_by(three)) should
return 2, not 2.666666...


*/




const expression = (number, operator) => {
  if (!operator)
    return number;
  return operator(number);
}

const zero = (operator) => {
  return expression(0, operator);
}

const one = (operator) => {
  return expression(1, operator);
}

const two = (operator) => {
  return expression(2, operator);
}

const three = (operator) => {
  return expression(3, operator);
}

const four = (operator) => {
  return expression(4, operator);
}

const five = (operator) => {
  return expression(5, operator);
}

const six = (operator) => {
  return expression(6, operator);
}


// mathematical operations
const seven = (operator) => {
  return expression(7, operator);
}

const eight = (operator) => {
  return expression(8, operator);
}

const nine = (operator) => {
  return expression(9, operator);
}

const plus = (x) => {
  return function (y) {
    return y + x;
  }
}

const minus = (x) => {
  return function (y) {
    return y - x;
  }
}


const times = (x) => {
  return function (y) {
    return y * x;
  }
}

const dividedBy = (x) => {
  return function (y) {
    return Math.floor(y / x);
  }
}