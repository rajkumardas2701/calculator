import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  const num1 = Big(numberOne || '0');
  const num2 = Big(numberTwo || '0');

  if (operation === '+') {
    result = num1.plus(num2).toFixed();
  } else if (operation === '-') {
    result = num1.minus(num2).toFixed();
  } else if (operation === '/') {
    result = num1.div(num2).toFixed();
  } else if (operation === '*') {
    result = num1.times(num2).toFixed();
  } else if (operation === '%') {
    result = num1.div(100).toFixed();
  }
  return result;
};

export default operate;
