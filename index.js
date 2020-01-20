/**
 * Reverse Polish Notation Calculator
 */
const arguments = process.argv.slice(2);

const operand1 = parseFloat(arguments[0]);
const operand2 = parseFloat(arguments[1]);

const operator = arguments[2];

console.log('Calculating:', operand1, operand2, operator);

let result;

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

console.log('Result:', result);
