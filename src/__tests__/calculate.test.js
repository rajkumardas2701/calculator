import calculate from '../logic/calculate';

test('AC button', () => {
  const calcObj = { total: '1', next: '2', operation: '+' };
  expect(calculate(calcObj, 'AC')).toEqual({ total: '0', next: null, operation: null });
});

test('= button with total, next and operation given', () => {
  const calcObj = { total: '10', next: '11', operation: '*' };
  expect(calculate(calcObj, '=')).toEqual({ total: '110', next: null, operation: null });
});

test('% button with only total given', () => {
  const calcObj = { total: '10', next: null, operation: null };
  expect(calculate(calcObj, '%')).toEqual({ total: '0.1%', next: null, operation: null });
});

test('total, next and operation given', () => {
  const calcObj = { total: '10', next: '2', operation: '/' };
  expect(calculate(calcObj, '/')).toEqual({ total: '5', next: null, operation: '/' });
});

test('only operation given', () => {
  const calcObj = { total: null, next: null, operation: null };
  expect(calculate(calcObj, '*')).toEqual({ total: null, next: null, operation: '*' });
});

test('+/- button with next given', () => {
  const calcObj = { total: 7, next: null, operation: null };
  expect(calculate(calcObj, '+/-')).toEqual({ total: '-7', next: null, operation: null });
});

test('only total is given', () => {
  const calcObj = { total: '100', next: null, operation: null };
  expect(calculate(calcObj, '9')).toEqual({ total: '1009', next: null, operation: null });
});

test('only next is given', () => {
  const calcObj = { total: null, next: '7', operation: null };
  expect(calculate(calcObj, '3')).toEqual({ total: 'null3', next: '7', operation: null });
});

test('no total, next and operation given', () => {
  const calcObj = { total: null, next: null, operation: null };
  expect(calculate(calcObj, '23')).toEqual({ total: 'null23', next: null, operation: null });
});
