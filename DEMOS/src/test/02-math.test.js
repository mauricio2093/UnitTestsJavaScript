const { sum, mult, div } = require('../02-math');

test('adds 1 + 3 should be 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('shoukd be 4', () => {
  const rta = mult(1, 4);
  expect(rta).toBe(4);
});

test('should be 4', () => {
  let rta = div(4, 1);
  expect(rta).toBe(4);
  rta = div(4, 0);
  expect(rta).toBe(Infinity);
});
