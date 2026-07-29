/*
 * Complete the 'calculate' function below.
 *
 * The function is expected to return a NUMBER.
 * The function accepts following parameters:
 *  1. STRING operation
 *  2. NUMBER a
 *  3. NUMBER b
 */

function calculate(operation, a, b) {  
    let result = 0;
  if (operation === "add") {
    result = (a + b);
  } else if (operation === "subtract") {
    result = (a - b);
  }   else if (operation === "multiply") {
    result = (a * b);
  } else if (operation === "divide") {
    result = (a / b);
  } else if (operation === "power") {
    result = (a ** b);
  } else if (operation === "modulo") {
    result = (a%b);
  } else {
    result = 'Invalid operation';
  }

  return result;
  // TODO: use an object literal to map operations to functions
}

module.exports = calculate;
