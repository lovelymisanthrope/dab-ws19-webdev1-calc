/**
 * Reverse Polish Notation Calculator
 */

var arguments = process.argv.slice(2);

const argument1 = arguments[0];
const argument2 = arguments[1];
const operator = arguments[2];

const operand1 = parseFloat(argument1);
const operand2 = parseFloat(argument2);

console.log('Calculating:', operand1, operand2, operator);

var result;

switch (operator) {
  case '+':
    result = operand1 + operand2;
    break;
  case '-':
    result = operand1 - operand2;
    break;
  case '/':
    result = operand1 / operand2;
    break;
  case '*':
    result = operand1 * operand2;
    break;
  default:
    console.error('Not implemented:', operator);
}

console.log(result);
