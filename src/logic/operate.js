import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let result = 0;
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);

  if (operation === '+') {
    result = num1.plus(num2);
  } else if (operation === '-') {
    result = num1.minus(num2);
  } else if (operation === '/') {
    result = num1.div(num2);
  } else if (operation === '*') {
    result = num1.times(num2);
  } else if (operation === '%') {
    result = num1.mod(num2);
  }
  return result;
}
