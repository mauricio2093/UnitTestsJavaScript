//  matchers

test('test obj ', () => {
  const data = { name: 'mauricio' };
  data.lastname = 'cadena';
  expect(data).toEqual({ name: 'mauricio', lastname: 'cadena' });
});
test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});
test('booleans', () => {
  const data = true;
  expect(data).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();

  expect(1).toBeTruthy();
  expect('1').toBeTruthy();
  expect(true).toBeTruthy();
});

test('string', () => {
  expect('Mauricio').toMatch(/Mau/);
});

test('list / arrays', () => {
  const numbers = [1, 3, 4, 5, 6];
  expect(numbers).toContain(3);
});
