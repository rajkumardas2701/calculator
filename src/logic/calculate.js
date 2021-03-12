import operate from './operate';

const calculate = (calData, btnName) => {
  let { total, next, operation } = calData;
  const operators = ['+', '-', '/', '*'];

  if (btnName === '+/-') {
    if (total && total !== 'NaN' && !next) {
      total = (total * -1).toString();
      return { total, next, operation };
    }
  } else if (btnName === 'AC') {
    total = '0';
    next = null;
    operation = null;
    return { total, next, operation };
  } else if (btnName === '%') {
    if (next) {
      next = operate(null, next, btnName);
    } else if (!(total.isNaN)) {
      total = operate(total, null, btnName);
    }
  } else if (btnName === '.') {
    if (total && !(total.isNaN) && !total.split('').includes('.')) {
      total = `${total}`;
    }
    if (next && !total.split('.').includes('.')) {
      next = `${next}`;
    }
    if (!next && operation && total !== 'NaN') {
      next = '0.';
    }
  } else if (btnName === '=') {
    if (total === 'NaN' && next && operation) {
      return { total: 'Invalid Operation', next: null, operation: null };
    }
    if (next) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
      return { total, next, operation };
    }
  }

  if (operators.includes(btnName)) {
    if (total === 'NaN' && next && operation) {
      return { total: 'NaN', next: null, operation: btnName };
    }
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
    }
    operation = btnName;
    next = null;
    return { total, next, operation };
  }

  if (!(Number(btnName).isNaN) && (total !== '0' && total !== 'NaN') && !operation) {
    total += btnName;
  }

  if (!(Number(btnName).isNaN) && total === '0' && !operation) {
    total = btnName;
  }

  if (!(Number(btnName).isNaN) && operation && next !== null) {
    next += btnName;
  }

  if (!(Number(btnName).isNaN) && operation && next === null) {
    next = btnName;
  }

  if (total === 'NaN' && !(btnName).isNaN && !operation) {
    total = btnName;
  }
  return { total, next, operation };
};

export default calculate;
