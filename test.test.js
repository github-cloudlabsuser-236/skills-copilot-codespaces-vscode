
const calculate = require('./test');

test('adds 1 + 2 to equal 3', () => {
  expect(calculate('1', '2', '+')).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(calculate('5', '3', '-')).toBe(2);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(calculate('2', '3', '*')).toBe(6);
});

test('divides 6 / 3 to equal 2', () => {
  expect(calculate('6', '3', '/')).toBe(2);
});

test('throws error for division by zero', () => {
  expect(() => calculate('6', '0', '/')).toThrow('Error! Division by zero.');
});

test('throws error for invalid operator', () => {
  expect(() => calculate('6', '3', 'x')).toThrow('Invalid operator!');
});