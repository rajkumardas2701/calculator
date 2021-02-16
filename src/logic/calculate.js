export default function calculate(calData, btnName) {
  let { total, next, operation } = calData;

  if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (btnName === 'AC') {
    total = 0;
    next = null;
    operation = null;
  }

  return { total, next, operation };
}
