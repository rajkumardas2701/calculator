import calc from './operate';

export default function calculate(calData, btnName) {
  let { total, next, operation } = calData;
  const operators = ['+', '-', '/', '*'];

  if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (btnName === 'AC') {
    total = 0;
    next = null;
    operation = null;
  } else if (btnName === '%') {
    total = calc(total, next, operation);
    next = null;
    operation = null;
  } else if (btnName === '.' && next) {
    if (!next.includes('.')) {
      next += '.';
    }
  } else if (operators.includes(btnName)) {
    calc(total, next, operation);
  } else if ((btnName === '=') && (next && total)) {
    total = calc(total, next, operation);
    next = null;
    operation = null;
  }

  return { total, next, operation };
}
